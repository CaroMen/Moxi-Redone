<template>
  <body>
    <div class="section1">
      <div class="header">
        <div class="welcome center">
          <h2>I dont know what will go here</h2>
        </div>
      </div>
      <v-card>
        <v-tabs background-color="#603CE7" color="#F0C345" right>
          <v-tab>
            <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
          </v-tab>
          <v-tab>
            <router-link :to="{ name: 'AddActivity' }"
              >Add Activity</router-link
            >
          </v-tab>
          <v-tab>
            <router-link :to="{ name: 'Calendar' }">Calendar</router-link>
          </v-tab>
          <v-tab>Abstract</v-tab>
        </v-tabs>
      </v-card>
    </div>
    <div class="cal">
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="64">
            <v-toolbar flat color="white">
              <v-btn
                outlined
                class="mr-4"
                color="grey darken-2"
                @click="setToday"
                >Today</v-btn
              >
              <v-btn color="primary" class="mr-4" @click="dialog = true"
                >New Event</v-btn
              >
              <v-btn fab text small color="grey darken-2" @click="prev">
                <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn
                fab
                text
                small
                color="grey darken-2"
                @click="next"
                class="mr-4"
              >
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">{{
                $refs.calendar.title
              }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu bottom right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    outlined
                    color="grey darken-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon right>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>Day</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = '4day'">
                    <v-list-item-title>4 days</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>
          <!-- Add event dialog -->
          <v-dialog v-model="dialog" max-width="500">
            <v-card>
              <v-container class="container-cal">
                <v-form @submit.prevent="addEvent" class="cal-form">
                  <v-text-field
                    v-model="name"
                    type="text"
                    label="event name (required)"
                  ></v-text-field>
                  <v-text-field
                    v-model="details"
                    type="text"
                    label="detail"
                  ></v-text-field>
                  <v-text-field
                    v-model="start"
                    type="date"
                    label="start (required)"
                  ></v-text-field>
                  <v-text-field
                    v-model="end"
                    type="date"
                    label="end (required)"
                  ></v-text-field>
                  <v-text-field
                    v-model="color"
                    type="color"
                    label="color (click to open menu)"
                  ></v-text-field>
                  <v-btn
                    type="submit"
                    color="primary"
                    class="mr-4"
                    @click.stop="dialog = false"
                    >Create Event</v-btn
                  >
                </v-form>
              </v-container>
            </v-card>
          </v-dialog>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange"
            ></v-calendar>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card color="grey lighten-4" min-width="350px" flat>
                <v-toolbar :color="selectedEvent.color" dark>
                  <v-btn @click="deleteEvent(selectedEvent.id)" icon>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-toolbar-title
                    v-html="selectedEvent.name"
                  ></v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <form v-if="currentlyEditing != selectedEvent.id">
                    {{ selectedEvent.details }}
                  </form>
                  <form v-else>
                    <textarea-autosize
                      v-model="selectedEvent.details"
                      type="text"
                      style="width: 100%"
                      :min-height="100"
                      placeholders="add note"
                    ></textarea-autosize>
                  </form>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="secondary" @click="selectedOpen = false"
                    >Cancel</v-btn
                  >
                  <v-btn
                    text
                    v-if="currentlyEditing !== selectedEvent.id"
                    @click.prevent="editEvent(selectedEvent)"
                    >Edit</v-btn
                  >
                  <v-btn text v-else @click.prevent="updateEvent(selectedEvent)"
                    >Save</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </body>
</template>

<script>
import db from "@/firebase/init";

export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    name: null,
    details: null,
    start: null,
    end: null,
    color: "#1976D2",
    currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    dialog: false,
  }),
  computer: {
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }
      const startMonth = this.monthFormatter(start);
      const endMonth = this.monthFormatter(end);
      const suffixMonth = startMonth === endMonth ? "" : endMonth;

      const startYear = start.year;
      const endYear = end.year;
      const suffixYear = startYear === endYear ? "" : endYear;

      const startDay = start.day + this.nth(start.day);
      const endDay = end.day + this.nth(end.day);

      switch (this.type) {
        case "month":
          return `${startMonth} ${startYear}`;
        case "week":
        case "4day":
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
        case "day":
          return `${startMonth} ${startDay} ${startYear}`;
      }
      return;
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long",
      });
    },
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      let snapshot = await db.collection("calEvent").get();

      let events = [];

      snapshot.forEach((doc) => {
        let appData = doc.data();
        appData.id = doc.id;
        events.push(appData);
      });
      this.events = events;
    },
    async addEvent() {
      if (this.name && this.start && this.end) {
        await db.collection("calEvent").add({
          name: this.name,
          details: this.details,
          start: this.start,
          end: this.end,
          color: this.color,
        });
        this.getEvents();
        this.name = "";
        this.details = "";
        this.start = "";
        this.end = "";
        this.color = "#1976D2";
      } else {
        alert("Name, start, and end date are required");
      }
    },
    async updateEvent(ev) {
      await db
        .collection("calEvent")
        .doc(this.currentlyEditing)
        .update({
          details: ev.details,
        });
      this.selectedOpen = false;
      this.currentlyEditing = null;
    },
    async deleteEvent(ev) {
      await db
        .collection("calEvent")
        .doc(ev)
        .delete();

      this.selectedOpen = false;
      this.getEvents();
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    editEvent(ev) {
      this.currentlyEditing = ev.id;
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
  },
};
</script>

<style>
.section1 {
  background-color: #1e1935;
  /* background-color: white !important; */
  margin-top: -10px;
  margin-bottom: 500px;
}

.cal {
  /* max-width: 1000px;
  margin-left: 220px;
  margin-top: -350px; */
  position: relative;
  top: -30%;
  width: 80%;
  margin: 0 auto;
}

.cal-form {
  background-color: white;
}
.container-cal {
  background-color: white;
}
</style>
