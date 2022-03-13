<template>
  <div>
    <b-table :items="data.items" :tbody-tr-class="rowClass"></b-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fields: [],
      data: [],
    };
  },
  created() {
    this.getInterviewer();
  },
  methods: {
    async getInterviewer() {
      try {
        let res = await this.$api("/interviewers");
        this.data = res.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style></style>
