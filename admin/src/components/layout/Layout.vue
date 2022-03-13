<template>
  <div class="dashboard">
    <div class="left-bar">
      <LeftMenu :menus="menus" />
    </div>
    <div class="right-bar">
      <Topbar />
      <div class="layout">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "./LeftMenu.vue";
import Topbar from "./Topbar.vue";

const routes = [
  { path: "/roadmap", name: "RoadMap", role: "Applicant" },
  { path: "/calendar", name: "Calendar", role: "Applicant" },
  { path: "/interviewer", name: "Interviewers", role: "Applicant" },
  { path: "/applicant-users", name: "Users", role: "Applicant" },

  { path: "/interviewer-list", name: "Interviewer", role: "Interviewer" },
  { path: "/interviewer-calendar", name: "Calendar", role: "Interviewer" },

  { path: "/admin", name: "Admin", role: "Admin" },
  { path: "/admin-dashboard", name: "Dashboard", role: "Admin" },
  { path: "/admin-list", name: "List", role: "Admin" },
  { path: "/admin-Users", name: "Users", role: "Admin" },

  { path: "/hr", name: "Admin", role: "HR" },
];
export default {
  name: "hr-layout",
  components: {
    LeftMenu,
    Topbar,
  },
  computed: {
    menus() {
      return routes.filter(
        (item) => item.role === localStorage.getItem("user_role")
      );
    },
  },
};
</script>

<style scoped>
.layout {
  padding: 30px;
}
.dashboard {
  display: flex;
  justify-content: space-between;
}
.right-bar {
  width: 100%;
}
</style>
