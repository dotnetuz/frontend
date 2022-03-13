<template>
  <div>
    <div v-if="!isAuth">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </div>

    <div v-else>
      <hr-layout>
        <transition name="fade" mode="out-in">
          <router-view :key="routeKey" />
        </transition>
      </hr-layout>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  computed: {
    isAuth() {
      return localStorage.getItem("auth_token");
    },
    routeKey() {
      if (this.$route.meta.requiresAuth) {
        return this.$route.name;
      }
    },
  },
};
</script>
