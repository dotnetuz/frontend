<template>
    <div class="oi-btn pointer">
        <slot name="img-left"></slot>
        <span>
            <slot name="text"></slot>
        </span>
        <slot name="img-right"></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.oi-btn {
  display: flex;
  gap: 10px;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  transition: 0.3s;
  justify-content: center;
  border: 1px solid transparent;
}

.oi-btn--dark {
  color: white;
	background: #324352;
}
.oi-btn--dark:hover {
  color: #324352;
  background: white;
  border: 1px solid #324352
}

.oi-btn--green {
  color: white;
	background: #00C695;
}
.oi-btn--green a {
  color: white
}
.oi-btn--green:hover {
  color: #00C695;
	background: white;
  border: 1px solid #00C695;
}
.oi-btn--green:hover a {
  color: #00C695
}

.oi-btn--white {
  background: #FFFFFF;
  border: 1px solid #E6EAED;
}

.oi-btn--white.active,
.oi-btn--green.active {
	color: white;
	background: #00C695;
}

.oi-btn--green-outline {
  color: #00C695;
	background: white;
  border: 1px solid #00C695;
}
.oi-btn--green-outline:hover {
  color: white;
	background: #00C695;
  border: 1px solid #00C695;
}
.border-27 {
  border-radius: 27px;
}
</style>