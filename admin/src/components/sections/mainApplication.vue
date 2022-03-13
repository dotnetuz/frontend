<template>
  <section class="container">
    <div class="appl">
      <h1 class="oi-section--title">Arizalarni to'ldirish jarayoni</h1>
      <div class="appl__boxes">
        <div
          class="appl__box gap-10 pointer"
          v-for="(appl, index) of applications"
          :key="'appl' + appl.title + index"
        >
          <img :src="appl.image" />
          <h2>{{ appl.title }}</h2>
          <p>{{ appl.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      applications: [
        {
          image: "https://oilakredit.uz/media/store/img/Ariza_topshirish.svg",
          title: "Ariza topshirish",
          desc: "Foydalanuvchi tomonidan to'ldirilishi kerak bo'lgan hudud registratsiya sahifasida to'ldiriladi",
        },
        {
          image: "https://oilakredit.uz/media/store/img/Tafsiyanoma_berish.svg",
          title: "Emaildan natijani olish",
          desc: "Arizachi ro'yhatdan o'tganidan so'ng, admin sizning ma'lumotlaringiz bilan tanishib chiqgach, sizning emalingizga ro'yhatdan o'tgan yoki o'tmaganingiz haqida ma'lumot jo'natadi",
        },
        {
          image:
            "https://oilakredit.uz/media/store/img/Sugurta_shartnomasi.svg",
          title: "O'zingiz uchun imtixon oluvchi yoki talabgorni topish",
          desc: "Talabgor topilganidan so'ng ushbu suhbat (interview) uchun qulay vaqt tanlang",
        },
        {
          image: "https://oilakredit.uz/media/store/img/Kredit_ajratish.svg",
          title: "Mablag' ajratish",
          desc: "Suhbat (interview) uchun talabgirga mos mablag'ni kiriting",
        },
      ],
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
.appl {
  padding: 50px 0 0;
}
.appl__boxes {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
}
.appl__box {
  width: 48%;
  padding: 40px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid #f6f6f6;
}
.appl__box:hover {
  background: linear-gradient(white, white) padding-box,
    linear-gradient(180deg, #00c695, white) border-box;
  border: 1px solid transparent;
}
.appl__box h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #324352;
  margin: 24px 0 21px;
}
</style>
