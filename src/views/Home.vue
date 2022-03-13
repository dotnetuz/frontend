<template>
  <div>
    <Header />
    <section
      class="main-section d-flex justify-content-between align-items-center"
    >
      <div class="container">
        <div
          class="main-section__banner d-flex justify-content-between align-items-center"
        >
          <!--          -->
          <div class="main-section__info">
            <h1>
              {{ mainBanner[activeFacility].title }}
            </h1>
            <p>
              {{ mainBanner[activeFacility].desc }}
            </p>
            <div
              class="main-section__info--actions d-flex gap-15 align-items-center mt-5"
            >
              <Button class="oi-btn--green">
                <template v-slot:text>
                  <a :href="`#`" target="_blank"> Ariza yuborish </a>
                </template>
              </Button>
              <Button class="oi-btn--green-outline" @click.native="passModal">
                <template v-slot:text> Ariza holatini tekshirish </template>
              </Button>
            </div>
          </div>
          <!--          -->
          <div class="main-section__img">
            <img :src="mainBanner[activeFacility].image" />
          </div>
          <!--          -->
        </div>
      </div>
    </section>
    <div class="container">
      <div class="main-section__bar d-flex justify-content-between">
        <!--          -->
        <div
          class="main-section__bar--box pointer"
          v-for="(box, index) in facilities"
          :key="`facilities-${index}`"
          @click="activeFacility = index"
        >
          <div class="d-flex justify-content-between mb-3">
            <p
              class="facility-date"
              :class="{ active: index == activeFacility }"
            >
              {{ box.time }}
            </p>
            <p class="facility-percentage mb-0">
              {{ box.percentage }}
            </p>
          </div>
          <div
            class="facility-title"
            :class="{ active: index == activeFacility }"
          >
            {{ box.title }}
          </div>
          <div
            class="facility-linear"
            :class="{ active: index == activeFacility }"
          ></div>
        </div>
        <!--          -->
      </div>
    </div>
    <div id="main-about">
      <MainApplication />
    </div>
    <div id="instructions">
      <Instructions />
    </div>
    <div id="usefull">
      <UsefullLinks />
    </div>
    <div id="contact">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Button from "@/components/button/Button";
import MainApplication from "@/components/sections/mainApplication";
import UsefullLinks from "@/components/sections/usefullLinks";
import Instructions from "@/components/sections/instructions";

import Design from "@/assets/Header/web-design.svg";
import Frontend from "@/assets/Header/frontend.svg";
import Backend from "@/assets/Header/backend.svg";
import Android_development from "@/assets/Header/android_development.svg";
export default {
  components: {
    Footer,
    Header,
    Button,
    MainApplication,
    UsefullLinks,
    Instructions,
  },
  mounted() {
    this.lang = localStorage.getItem("platon_locale") || "uz";
  },
  created() {
    // this.checkAuth();
    this.interval = setInterval(() => {
      this.changeActiveFacility();
    }, 4000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
  methods: {
    checkAuth() {
      const isAuth = localStorage.getItem("auth_token");
      if (isAuth) {
        this.$router.push({ name: "Dashboard" });
      }
    },
    passModal() {
      this.$refs.modal.openModal();
    },
    scrollToSection(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
    changeActiveFacility() {
      if (this.activeFacility === 3) {
        this.activeFacility = -1;
      }
      this.activeFacility++;
    },
    setQueryLang(lang) {
      let route = this.$router.resolve({
        params: this.$route.params,
        query: { locale: lang },
      });
      if (this.$route.fullPath !== route.resolved.fullPath) {
        this.$router.push(route.resolved);
      }
    },
  },
  data() {
    return {
      lang: "uz",
      hasTestParam: true,
      interval: null,
      activeFacility: 0,
      mainBanner: [
        {
          title: "UI/UX dizayner",
          desc: "Web saytlarning asosiy qismi bu albatta UI/UX hidoblanadi. Buning uchun siz dizaynerlik sohasida o'z bilib va ko'nikmalaringizni sinovdan o'tkazing va o'z bilimingizni tasdiqlovchi hujjatga ega bo'ling",
          image: Design,
        },
        {
          title: "Frondend developer",
          desc: "Frontend sohasida o'zingizni sinab ko'rmoqchimisiz. Buning uchun siz frontend sohasida o'z bilib va ko'nikmalaringizni sinovdan o'tkazing va o'z bilimingizni tasdiqlovchi hujjatga ega bo'ling",
          image: Frontend,
        },
        {
          title: "Backend developer",
          desc: "Backend sohasida o'zingizni sinab ko'rmoqchimisiz. Buning uchun siz backend sohasida o'z bilib va ko'nikmalaringizni sinovdan o'tkazing va o'z bilimingizni tasdiqlovchi hujjatga ega bo'ling",
          image: Backend,
        },
        {
          title: "Mobile developer",
          desc: "Mobile dasturchilik sohasida o'zingizni sinab ko'rmoqchimisiz. Buning uchun siz mobile dasturchilik sohasida o'z bilib va ko'nikmalaringizni sinovdan o'tkazing va o'z bilimingizni tasdiqlovchi hujjatga ega bo'ling",
          image: Android_development,
        },
      ],
      facilities: [
        {
          time: "1 oy imtiyozli davr",
          percentage: "60%",
          title: "UI/UX dizayn",
        },
        {
          time: "1 oy imtiyozli davr",
          percentage: "40%",
          title: "Frontend development",
        },
        {
          time: "2 oy imtiyozli davr",
          percentage: "40%",
          title: "Backend development",
        },
        {
          time: "1 oy imtiyozli davr",
          percentage: "50%",
          title: "Mobile development",
        },
      ],
      applications: [
        {
          image: "https://oilakredit.uz/media/store/img/Ariza_topshirish.svg",
          title: "Ariza topshirish",
          desc: "Kredit oluvchi tomonidan hokim yordamchisi nomiga ariza to’ldiriladi",
        },
        {
          image: "https://oilakredit.uz/media/store/img/Tafsiyanoma_berish.svg",
          title: "Tafsiyanoma berish",
          desc: "Sektor rahbari ariza beruvchi va hokim yordamchisi taqdim qilgan hujjatlarni ko’rib chiqadi va tafsiyanoma taqdim qiladi",
        },
        {
          image:
            "https://oilakredit.uz/media/store/img/Sugurta_shartnomasi.svg",
          title: "Sug'urta shartnomasi",
          desc: "Sug'urta shartnomasi tuzish hamda ma'qullangan summaga mos garov ta'minotini bankka taqdim qilish to'g'risidagi so'rov",
        },
        {
          image: "https://oilakredit.uz/media/store/img/Kredit_ajratish.svg",
          title: "Kredit ajratish",
          desc: "Tijorat bank tomondan ta'minotchiga kredit ajratish to'g'risida qaror qabul qilinadi",
        },
        {
          image: "https://oilakredit.uz/media/store/img/Xaridlar.svg",
          title: "Xaridlar",
          desc: "Mijoz ta'minotchini tanlaydi, shartnoma tuziladi hamda ta'minotchi tomonidan mahsulot etkazib beriladi",
        },
        {
          image: "https://oilakredit.uz/media/store/img/Xulosalar_hisoboti.svg",
          title: "Xulosalar hisoboti",
          desc: "Hokim yordamchisi tomonidan ajratilgan “Biznes reja” ning to'g'ri ketayotganligi ustidan nazorat o'rnatiladi",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  background-color: white !important;
}
a,
a:hover {
  text-decoration: none;
}
input:focus {
  outline: none;
}
.list-none {
  list-style: none;
}

.gap-3 {
  gap: 3px;
}
.gap-5 {
  gap: 5px;
}
.gap-7 {
  gap: 7px;
}
.gap-10 {
  gap: 10px;
}
.gap-12 {
  gap: 12px;
}
.gap-15 {
  gap: 15px;
}
.gap-20 {
  gap: 20px;
}

.pointer {
  cursor: pointer;
}

.oi-section--title {
  font-weight: 700;
  text-align: center;
  font-size: 32px;
  line-height: 43px;
  color: #324352;
  padding-bottom: 60px;
  position: relative;
  font-family: "Montserrat", sans-serif;
}
.oi-section--title::after {
  content: "";
  width: 102px;
  height: 2px;
  background: #00c695;
  backdrop-filter: blur(70px);
  border-radius: 60px;
  left: 50%;
  top: 60px;
  position: absolute;
  transform: translateX(-50%);
}

.main-section {
  height: 100%;
  min-height: 600px;
  background-color: #f7f7f7;
}
.main-section__info {
  width: 50%;
}
.main-section__img {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
}
.main-section__img img {
  width: 80%;
  object-fit: cover;
}
.main-section__info > h1 {
  font-weight: 700;
  font-size: 48px;
  line-height: 68px;
  color: #324352;
  margin-bottom: 26px;
  font-family: "Montserrat", sans-serif;
}
.main-section__info > p {
  font-size: 14px;
  line-height: 24px;
  color: #5d6677;
  padding-left: 16px;
  position: relative;
  font-family: "Montserrat", sans-serif;
}
.main-section__info > p:before {
  content: "";
  width: 4px;
  height: 100%;
  top: 0;
  left: 0;
  background: #00c695;
  border-radius: 5px;
  position: absolute;
}

.main-section__bar {
  position: relative;
  margin-top: -50px;
  padding: 8px 19px;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.05);
}

.main-section__bar-mobile {
  display: none;
}

.main-section__bar--box {
  width: 25%;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Montserrat", sans-serif;
}
.main-section__bar--box:first-child {
  padding-right: 23px;
}
.main-section__bar--box:last-child {
  padding-left: 23px;
  position: relative;
}
.main-section__bar--box:nth-child(2),
.main-section__bar--box:nth-child(3) {
  padding: 10px 23px;
  position: relative;
}
.main-section__bar--box:not(:nth-child(1))::before {
  content: "";
  width: 1px;
  height: 80%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #e6eaed;
}
.main-section__info--actions {
  flex-wrap: wrap;
}

.facility-date {
  padding-left: 25px;
  font-weight: 600;
  font-size: 12px;
  line-height: 32px;
  position: relative;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
}
.facility-date:before {
  content: "";
  width: 19px;
  height: 19px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  border-radius: 50%;
  border: 4px solid #e6eaed;
}
.facility-date.active:before {
  border: 4px solid #00c695;
}
.facility-percentage {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #e6eaed;
}
.facility-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #5d6677;
  margin-bottom: 18px;
}
.facility-title.active {
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #324352;
}
.facility-linear {
  width: 100%;
  height: 4px;
  background: #e6eaed;
  border-radius: 60px;
  backdrop-filter: blur(70px);
}
.facility-linear.active {
  position: relative;
}
.facility-linear.active::before {
  content: "";
  width: 50%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background: #00c695;
  animation: 4s infinite slidein;
}
@keyframes slidein {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes mainBanner {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 991px) {
  .main-section {
    min-height: 450px;
  }
  .main-section__info > h1 {
    font-size: 25px;
    line-height: 50px;
  }
  .main-section__info > p {
    font-size: 12px;
  }
  .main-section__bar {
    margin-top: -40px;
  }
  .facility-percentage {
    font-size: 25px;
  }
  .facility-title {
    font-size: 14px;
  }
  .main-section__bar--box:first-child,
  .main-section__bar--box:last-child {
    padding-right: 15px;
  }
  .facility-title.active {
    font-size: 14px;
  }
  .main-section__bar--box:nth-child(2),
  .main-section__bar--box:nth-child(3) {
    padding: 0px 15px;
  }
  .oi-section--title {
    font-size: 28px;
    padding-bottom: 40px;
  }
  .appl__box {
    width: 49%;
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 768px) {
  .main-section {
    min-height: unset;
    padding-top: 0;
  }

  .main-section__info > h1 {
    font-size: 20px;
    line-height: 120%;
    margin-bottom: 15px;
    text-align: center;
  }

  .main-section__info > p {
    font-size: 12px;
    line-height: 180%;
    padding-left: unset;
    text-align: center;
  }

  .main-section__info > p:before {
    content: "";
    width: 150px;
    height: 2px;
    top: unset;
    left: 50%;
    bottom: -10px;
    transform: translatex(-50%);
  }

  .main-section__banner {
    flex-direction: column-reverse;
  }

  .main-section__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 70px;
  }

  .main-section__img {
    width: 70%;
    margin-bottom: 30px;
  }

  .main-section__bar {
    flex-wrap: wrap;
    padding: 10px 20px;
  }

  .main-section__bar--box:nth-child(1),
  .main-section__bar--box:nth-child(2),
  .main-section__bar--box:nth-child(3),
  .main-section__bar--box:nth-child(4) {
    margin: unset;
    padding: unset;
  }

  .main-section__bar--box:nth-child(1)::before,
  .main-section__bar--box:nth-child(3)::before {
    display: none;
  }

  .main-section__bar--box:nth-child(n + 3) {
    margin-bottom: 0 !important;
  }

  .main-section__bar--box:not(:nth-child(1))::before {
    content: "";
    width: 1px;
    height: 80%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) translateX(-24px);
    background-color: #e6eaed;
  }

  .main-section__bar--box {
    margin-bottom: 15px !important;
    width: 45%;
    position: relative;
  }

  .main-section__bar-mobile {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: -40px;
    position: relative;
    padding: 8px 19px;
    background: #ffffff;
    box-shadow: 0px 30px 60px rgb(0 0 0 / 5%);
    margin-left: 50px;
    width: calc(100vw - 50px);
    overflow-x: scroll;
  }

  .oi-section--title,
  .banks--title {
    font-size: 20px;
    line-height: 120%;
    margin-bottom: 35px;
    text-align: center;
    padding: 0;
  }

  .oi-section--title::after,
  .banks--title::after {
    top: unset;
    bottom: -10px;
  }

  .appl__box {
    padding: 20px;
  }

  .appl__box img {
    width: 70px;
    margin-bottom: 15px;
  }

  .appl__box h2 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 120%;
  }

  .appl__box p {
    font-size: 14px;
    line-height: 140%;
  }

  .instructions__box {
    width: 33%;
    padding: 20px;
    gap: 0 !important;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .instructions__box img {
    width: 70px;
    object-fit: contain;
    margin-bottom: 15px;
  }

  .instructions__box h2 {
    margin-bottom: 15px;
    text-align: center;
  }

  .instructions__box p {
    display: none;
    text-align: center;
  }

  .accordion--list {
    font-size: 14px;
    line-height: 120%;
  }

  .banks__box {
    padding: 15px;
  }
}

@media screen and (max-width: 576px) {
  .main-section__info {
    padding-bottom: 50px;
  }

  .main-section__info > h1 {
    font-size: 18px;
  }

  .main-section__info--actions {
    margin-top: 20px !important;
  }

  .main-section__info--actions .oi-btn {
    width: 100%;
  }

  .main-section__bar {
    padding: 10px 5px;
  }

  .main-section__bar--box {
    padding: 5px 15px !important;
    width: 50%;
  }

  .main-section__bar--box::before {
    display: none !important;
  }

  .facility-title {
    font-size: 11px;
    margin-bottom: 10px;
  }

  .facility-title.active {
    font-size: 11px;
    font-weight: 800;
  }

  .oi-section--title,
  .banks--title {
    font-size: 18px;
    margin-bottom: 30px;
  }

  .appl {
    padding: 30px 0;
  }

  .appl__box {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .appl_box:last-child {
    margin: 0;
  }

  .appl__box img {
    display: flex;
    margin-bottom: 0;
  }

  .appl__box h2 {
    font-size: 16px;
    margin-bottom: 5px;
    text-align: center;
  }

  .appl__box p {
    text-align: center;
    margin-bottom: 0;
  }

  .market {
    padding: 30px 10px;
  }

  .market__wrapper {
    display: flex;
    flex-direction: column;
  }

  .market__wrapper > h3 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 25px;
  }

  .market__wrapper > a {
    margin: 0 auto;
  }

  .market__list {
    gap: 15px;
    margin-bottom: 30px;
  }

  .market__list li span {
    margin-left: 15px;
    font-size: 16px;
    line-height: 120%;
  }
  .market__list li img {
    width: 25px;
    object-fit: contain;
  }

  .instructions {
    padding: 30px 0 10px 0;
  }

  .instructions__box {
    width: calc(50% - 5px);
    margin-bottom: 15px;
  }

  .instructions__box h2 {
    margin: 0;
    font-size: 16px;
    line-height: 120%;
  }

  .oi-faq {
    padding: 30px 0;
  }

  .onm-accordion {
    width: 100%;
  }

  .oi-faq__accordion {
    gap: 15px;
  }

  .onm-accordion__item {
    margin: 0;
  }

  .accordion--line h5 {
    margin: 0;
  }

  .banks {
    padding: 30px 0;
  }

  .banks__boxes {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .banks__box {
    width: 60%;
    padding: 15px;
    margin-bottom: 0;
  }
}
</style>
