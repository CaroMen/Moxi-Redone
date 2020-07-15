import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import SignIn from "@/components/SignIn";

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
        }
    ]
});