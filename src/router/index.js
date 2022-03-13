import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import RoadMap from "../views/Applicant/roadmap.vue";
import Calendar from "../views/Applicant/calendar.vue";
import Interviewers from "../views/Applicant/interviewers.vue";
import ApplicantUsers from "../views/Applicant/users.vue";

import InterviewerList from "../views/Interviewer/Interviewer.vue";
import CalendarInterViewer from "../views/Interviewer/Calendar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    role: "admin",
    meta: {
      requiresAuth: true,
    },
    component: Dashboard,
  },
  // !
  {
    path: "/roadmap",
    name: "RoadMap",
    role: "Applicant",
    meta: {
      requiresAuth: true,
    },
    component: RoadMap,
  },
  {
    path: "/calendar",
    name: "Calendar",
    role: "Applicant",
    meta: {
      requiresAuth: true,
    },
    component: Calendar,
  },
  {
    path: "/interviewer",
    name: "Interviewers",
    role: "Applicant",
    meta: {
      requiresAuth: true,
    },
    component: Interviewers,
  },
  {
    path: "/applicant-users",
    name: "Applicant-users",
    role: "Applicant",
    meta: {
      requiresAuth: true,
    },
    component: ApplicantUsers,
  },
  // !
  {
    path: "/interviewer-list",
    name: "InterviewerList",
    role: "Interviewer",
    meta: {
      requiresAuth: true,
    },
    component: InterviewerList,
  },
  {
    path: "/interviewer-calendar",
    name: "Applicant-calendar",
    role: "Interviewer",
    meta: {
      requiresAuth: true,
    },
    component: CalendarInterViewer,
  },
  // !
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isAuth = localStorage.getItem("auth_token");
    if (!isAuth) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
