<template>
  <div class="left-menu">
    <div class="topbar left-menu-logo">
      <h3>Smart-HR</h3>
    </div>
    <left-menu-profile />
    <div class="topbar-list">
      <ul class="metismenu list-unstyled">
        <li class="" v-for="(item, index) of menus" :key="'topbar-' + index">
          <router-link :to="item.path"> {{ item.name }} </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import LeftMenuProfile from "@/components/layout/LeftMenuProfile.vue";
export default {
  props: ["menus"],

  components: {
    LeftMenuProfile,
  },
};
</script>
<style>
.left-menus {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: red;
}
.left-menu-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.topbar-list > ul > li > a {
  color: #56678f;
  display: flex;
  align-items: center;
  padding: 0.6rem 1.33rem 0.6rem 1.33rem;
  position: relative;
  transition: all 0.1s;
  font-size: 14px;
}
</style>
