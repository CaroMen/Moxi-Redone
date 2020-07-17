import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
import Index from "../components/Index";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Dashboard from "../components/Dashboard";
import AddActivity from "../components/AddActivity";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/sign-in",
        name: "SignIn",
        component: SignIn,
    },
    {
        path: "/sign-up",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/add-activity",
        name: "AddActivity",
        component: AddActivity,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;