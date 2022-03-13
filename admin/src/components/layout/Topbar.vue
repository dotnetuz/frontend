<template>
  <div class="topbar primary-text">topbar</div>
</template>

<script>
export default {
  name: "platon-topbar",
  methods: {
    async logout() {
      console.log("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-wrapper {
  margin-left: -17px;
}
.topbar-btn {
  background: transparent !important;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  padding: 10px;
  display: flex;
  align-items: center;
  height: 40px;

  &:hover {
    background: rgba(0, 0, 0, 0.1) !important;
  }
}
</style>
