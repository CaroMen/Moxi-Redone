import Vue from "vue";
import Router from "vue-router";
import VueResponsiveImage from "vue-responsive-image";
import Index from "@/components/Index";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import Dashboard from "@/components/Dashboard";
import AddActivity from "@/components/AddActivity";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "Index",
            component: Index
        },
        {
            path: "/sign-in",
            name: "SignIn",
            component: SignIn
        },
        {
            path: "/sign-up",
            name: "SignUp",
            component: SignUp
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard
        },
        {
            path: "/add-activity",
            name: "AddActivity",
            component: AddActivity
        }
    ]
});