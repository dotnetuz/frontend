<template>
    <vue-loaders-ball-clip-rotate-multiple color="#00C69" scale="1.5"></vue-loaders-ball-clip-rotate-multiple>
</template>
<script>
export default {}
</script>
<style>
.hr-loader {
  display:flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  transform: translate(-50%, -50%)
}
</style>