<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__main">
                <div class="footer__desc col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="footer__desc-logo">
                        <a href="/">
                            <img class="common__purehover" :src="Logo" alt="logo" />
                        </a>
                    </div>
                    <p class="footer__desc-text">Biz bilan birgalikda nafaqat ish qidiruvchilar balki ish beruvchilar ham oson, tez va qulay tarzda o'z muammolariga yechim topish imkoniyatiga egadurlar. SmartHR bu sizning muammolaringizni yengil qiluvchi hamod'st</p>
                    <ul class="footer__desc-socials">
                        <li>
                            <a class="footer__desc-socials-item" href="#!">
                                <img src="https://sms24.uz/assets/icons/social-facebook.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a class="footer__desc-socials-item" href="#!">
                                <img src="https://sms24.uz/assets/icons/social-telegram.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a class="footer__desc-socials-item" href="#!">
                                <img src="https://sms24.uz/assets/icons/social-instagram.svg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="footer__links col-xl-4 col-lg-4 col-md-12">
                    <ul>
                        <p class="footer__title">Afzalliklar</p>
                        <li class="footer__links-item"><span>»</span> Tezkorlik</li>
                        <li class="footer__links-item"><span>»</span> Ishonchlilik</li>
                        <li class="footer__links-item"><span>»</span> Qulaylik</li>
                        <li class="footer__links-item"><span>»</span> Tushunarlik</li>
                        <li class="footer__links-item"><span>»</span> Foydalik</li>
                    </ul>
                </div>

                <div class="footer__contacts col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <p class="footer__title">Bog’lanish</p>
                    <ul class="footer__contacts-list">
                        <li>
                            <div class="footer__contacts-list-img">
                                <img src="https://sms24.uz/assets/icons/svg-location.svg" alt="location" />
                            </div>
                            <p class="footer__contacts-list-text">Toshkent sh., Yunusobod t., Amir Temur shox ko’chasi, 107 B uy</p>
                        </li>
                        <li>
                            <div class="footer__contacts-list-img">
                                <img src="https://sms24.uz/assets/icons/svg-mail.svg" alt="mail" />
                            </div>
                            <p class="footer__contacts-list-text">info@smarthr.uz</p>
                        </li>
                        <li>
                            <div class="footer__contacts-list-img">
                                <img src="https://sms24.uz/assets/icons/svg-phone.svg" alt="phone" />
                            </div>
                            <p class="footer__contacts-list-text">+998 91 009 21 21</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer__developer">
                <p class="footer__developer-text">Copyright © 2022 <span> SmartHR.</span> Barcha huquqlar himoyalangan</p>
                <a href="#!" class="footer__developer-link common__purehover">
                    <p>Tashkilot faoliyati: <span>2021-2022</span></p>
                </a>
            </div>
        </div>
    </footer>
</template>
<script>
// import Button from "@/components/button/Button";
import Logo from "@/assets/Logo.svg";
export default {
  data() {
    return {
    //   topOfPage: true,
      Logo,
    };
  },
//   components: { Button },
//   beforeMount() {
//     window.addEventListener("scroll", this.handleScroll);
//   },
//   methods: {
//     goto(item) {
//       this.$emit("goto", item);
//     },
//     scrollToSection(id) {
//       document.getElementById(id).scrollIntoView({
//         behavior: "smooth",
//       });
//     },
//     handleScroll() {
//       if (window.pageYOffset > 0) {
//         if (this.topOfPage) this.topOfPage = false;
//       } else {
//         if (!this.topOfPage) this.topOfPage = true;
//       }
//     },
//     scrollToTop() {
//       window.scroll({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     },
//   },
};
</script>
<style>
.footer {
  background: #263238;
  padding-top: 30px;
  background: #263238;
}

.footer__head {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid #424752;
}

.footer__head-titling h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 140%;
  color: #ffffff;
  margin-bottom: 10px;
}

.footer__head-titling p {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #7d8893;
}

.footer__head-form {
  width: 40%;
  position: relative;
}

.footer__head-form input {
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid #424752;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  border-radius: 10px;
  height: 55px;
  width: 100%;
  color: #ffffff;
}

.footer__head-form button {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: #1e5bfa;
  border-radius: 0px 10px 10px 0px;
  padding: 15px 25px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  cursor: pointer;
  color: #ffffff;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.footer__head-form button:hover {
  opacity: 0.7;
}

.footer__main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
}

.footer__desc {
  padding: 30px 40px 30px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  border-right: 1px solid #424752;
}

.footer__desc-logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 30px;
}

.footer__desc-logo img {
          filter: invert(1) hue-rotate(186deg);
}

.footer__desc-text {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  color: #7d8893;
  margin-bottom: 25px;
}

.footer__desc-socials {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 25px;
}

.footer__desc-socials img {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.footer__desc-socials img:hover {
  -webkit-filter: brightness(2);
          filter: brightness(2);
}

.footer__links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 30px 15px;
  border-right: 1px solid #424752;
}

.footer__links ul {
  width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  padding-left: 15px;
}

.footer__links-item {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 41px;
  color: #7d8893;
  white-space: nowrap;
  cursor: pointer;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.footer__links-item span {
  color: #ffffff;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.footer__links-item:hover {
  color: #ffffff;
}

.footer__links-item:hover span {
  margin-right: 5px;
}

.footer__title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 180%;
  margin-bottom: 20px;
  color: #ffffff;
}

.footer__contacts {
  padding: 30px 0 0 30px;
}

.footer__contacts-list li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  gap: 15px;
  margin-bottom: 15px;
}

.footer__contacts-list-img {
  width: 30px;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  padding-top: 4px;
}

.footer__contacts-list-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 200%;
  color: #7d8893;
}

.footer__developer {
  border-top: 1px solid #424752;
  width: 100%;
  padding: 25px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.footer__developer-text {
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #7d8893;
}

.footer__developer-text span {
  color: #ffffff;
}

.footer__developer-link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #7d8893;
}

.footer__developer-link span {
  font-size: 14px;
  font-weight: 700;
  line-height: 120%;
  color: #1e5bfa;
  margin-right: 10px;
}

@media (max-width: 1200px) {
  .footer__desc-text {
    font-size: 14px;
  }
  .footer__title {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .footer__links-item {
    font-size: 14px;
  }
  .footer__developer-text {
    font-size: 14px;
  }
  .footer__developer-link {
    font-size: 14px;
  }
}

@media (max-width: 992px) {
  .footer {
    padding-top: 40px;
  }
  .footer__head {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    gap: 30px;
  }
  .footer__head-titling {
    text-align: center;
  }
  .footer__head-form {
    width: 60%;
  }
  .footer__main {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .footer__desc {
    -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
            order: 1;
  }
  .footer__contacts {
    -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
            order: 2;
  }
  .footer__links {
    -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
            order: 3;
    border: none;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    border-top: 1px solid #424752;
  }
  .footer__links ul {
    width: 170px;
  }
}

@media (max-width: 768px) {
  .footer__links-item {
    line-height: 35px;
  }
  .footer__developer {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .footer__developer-text {
    margin-bottom: 15px;
  }
}

@media (max-width: 576px) {
  .footer__head-titling h3 {
    font-size: 20px;
  }
  .footer__head-titling p {
    font-size: 12px;
  }
  .footer__head-form {
    width: 80%;
  }
  .footer__head-form input,
  .footer__head-form button {
    font-size: 12px;
    font-size: 12px;
  }
  .footer__desc {
    border: 0;
    text-align: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 30px;
    border-bottom: 1px solid #424752;
  }
  .footer__desc-logo, .footer__desc-text {
    margin-bottom: 15px;
  }
  .footer__contacts {
    padding: 30px;
  }
  .footer__links {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin: 0;
    padding: 0;
    padding: 30px;
    padding-bottom: 0;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .footer__links ul {
    width: unset;
    padding: 0;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-align: center;
    margin-bottom: 30px;
  }
  .footer__links-item span {
    display: none;
  }
  .footer__title {
    text-align: center;
    font-size: 18px;
    margin-bottom: 15px;
  }
  .footer__developer {
    padding: 25px 30px;
  }
  .footer__developer-text, .footer__developer-link {
    font-size: 12px;
    line-height: 160%;
  }
}

</style>
