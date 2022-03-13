<template>
  <div
    class="platon-profile d-flex align-items-center"
    style="min-height: 70px"
    v-if="user"
  >
    <div class="platon-user-photo mr-2">
      <b-avatar
        :src="$platonFile(user.photo)"
        size="48px"
        :text="avatarText"
        variant="primary"
      />
    </div>
    <div class="platon-user-info">
      <div class="font-weight-bold">{{ user.fullName || user.username }}</div>
      <div v-if="user.postName" class="small">{{ user.postName }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftMenuProfile",
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("auth_info"));
    },
  },
};
</script>
