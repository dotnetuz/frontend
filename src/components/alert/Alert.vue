<template>
  <div>
    <slot></slot>
    <span v-html="alertText"></span>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    value: false,
    alertText: "",
    alertType: "",
    alertDismissible: false,
  },
  data() {
    return {
      show: this.value,
      dismissSecs: 5,
      dismissCountDown: 0,
    };
  },
  computed: {},
  mounted() {},

  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
  },
};
</script>

<style>
.isa_info,
.isa_success,
.isa_warning,
.isa_error {
  width: 100%;
  margin: 10px 0px;
  padding: 12px;
}
.isa_info {
  color: #00529b;
  background-color: #bde5f8;
}
.isa_success {
  color: #4f8a10;
  background-color: #dff2bf;
}
.isa_warning {
  color: #9f6000;
  background-color: #feefb3;
}
.isa_error {
  color: #d8000c;
  background-color: #ffd2d2;
}
.isa_info i,
.isa_success i,
.isa_warning i,
.isa_error i {
  margin: 10px 22px;
  font-size: 2em;
  vertical-align: middle;
}
</style>
