<template>
  <div>
    <div class="oi-header" :class="{ onscroll: !topOfPage }">
      <div
        class="container oi-header--wrapper gap-10 d-flex justify-content-between"
      >
        <div class="oi-header--link">
          <router-link to="/">
            <img :src="Logo" alt="logo" />
          </router-link>
          <ul
            class="list-none ml-3 d-flex gap-5 alig-items-center justify-content-between mb-0"
          >
            <li @click="scrollToSection(`main-about`)">Loyiha haqida</li>
            <li @click="scrollToSection('instructions')">
              Tafsiyaviy ko’rsatmalar
            </li>
            <li>Yangiliklar</li>
            <li @click="scrollToSection('contact')">Bog‘lanish</li>
          </ul>
        </div>

        <div
          class="oi-header__detail d-flex gap-20 align-items-center justify-content-between"
        >
          <div>
            <a href="tel:+99891 009 21 21" target="_blank">
              <div class="oila__detail--phone d-flex align-items-center gap-3">
                <img
                  src="https://oilakredit.uz/media/store/img/icon-phone.svg"
                />
                <p class="d-flex align-items-center gap-1 mb-0">
                  <span>+998 91</span>
                  <span> 009 21 21</span>
                </p>
              </div>
            </a>
          </div>

          <div class="oila__detail--cabinet">
            <router-link to="/login">
              <Button class="oi-btn--dark">
                <template v-slot:text> Shaxsiy kabinet </template>
              </Button>
            </router-link>
          </div>
        </div>

        <div class="oi-header__burger">
          <span>X</span>
        </div>
      </div>
    </div>

    <div class="oi-header__holder"></div>
  </div>
</template>
<script>
import Button from "@/components/button/Button";
import Logo from "@/assets/Logo.svg";
export default {
  data() {
    return {
      topOfPage: true,
      Logo,
    };
  },
  components: { Button },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    goto(item) {
      this.$emit("goto", item);
    },
    scrollToSection(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.topOfPage) this.topOfPage = false;
      } else {
        if (!this.topOfPage) this.topOfPage = true;
      }
    },
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

.oi-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 0px 60px rgb(0 0 0 / 10%);
  backdrop-filter: blur(10px);
  padding: 26px 0;
  font-family: "Montserrat", sans-serif;
}

.oi-topwarning {
  position: fixed;
  z-index: 1000;
  height: 40px;
  top: 0;
  left: 0;
  right: 0;
  background: #324352;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

.oi-topwarning p {
  display: flex;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
}

.oi-header__holder {
  width: 100%;
  display: flex;
  height: 96.5px;
  margin: 0;
  padding: 0;
}

.oi-header__burger {
  display: none;
}

.oi-header--link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.oi-header--link > ul > li {
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #5d6677;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
  cursor: pointer;
  transition: 0.3s;
}
.oi-header--link > ul > li:hover a {
  color: #00c695;
}
.oila__detail--phone p {
  font-weight: 600;
}
.oila__detail--phone p span:first-child {
  font-size: 16px;
  line-height: 18px;
  color: #141c33;
}
.oila__detail--phone p span:last-child {
  font-size: 18px;
  line-height: 30px;
  color: #141c33;
}
.oila__detail--phone img {
  width: 30px;
  height: 30px;
  object-fit: cover;
}

.oi_detail--cabinet-bar {
  position: relative;
}
.oi_detail--cabinet-bar ul {
  top: 10px;
  opacity: 0;
  width: 100%;
  z-index: 15;
  visibility: hidden;
  position: absolute;
  transition: all 0.2s ease;
  backdrop-filter: blur(24px);

  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.1);
}
.oi_detail--cabinet-bar ul li {
  width: 100%;
  padding: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 19px;
  color: #5d6677;
}
.oi_detail--cabinet-bar ul li:first-child {
  border-bottom: 1px solid #e6eaed;
}
.oi_detail--cabinet-bar ul li:hover {
  color: white;
  background-color: #324352;
}
.oi_detail--cabinet-bar ul li:hover a {
  color: white;
}
.oi_detail--cabinet-bar .cabinet {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 1200px) {
  .oila__detail--phone {
    position: fixed;
    bottom: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 100%;
    z-index: 9;
    animation: pulse-animation 2s infinite;
    display: none !important;
  }

  .oila__detail--phone p {
    display: none !important;
  }

  .oila__detail--phone img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px rgba(0, 198, 149, 0.2);
    }
    100% {
      box-shadow: 0 0 0 20px rgba(0, 198, 149, 0);
    }
  }
}

@media (max-width: 992px) {
  .oi-header__holder {
    display: none;
  }

  /*   .oi-header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  } */

  /*   .oi-header__burger{
    display:flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    heigth: 50px;
    background: red;
    flex-shrink: 0
  } */

  /*   .oi-header__burger span{
    display: flex;
    height: 35px;
    width: 35px;
    border-top: 3px solid #000;
    border-bottom: 3px solid #000;
  } */

  /*   .oi-header--wrapper{
    position: fixed;
    z-index: 999999;
    background: lightblue;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
  } */
}
</style>
