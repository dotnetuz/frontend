<template>
  <section class="container">
    <div class="usefull">
      <h1 class="usefull--title">Homiylar</h1>
      <div class="usefull__boxes">
        <a
          class="usefull__box gap-10 pointer"
          :href="bank.link"
          target="_blank"
          v-for="(bank, index) of usefull"
          :key="`main-usefull-${index}`"
        >
          <div class="d-flex flex-column align-items-center">
            <img :src="bank.image" />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import astrum from "../../assets/icons/partner-astrum.png";
import epam from "../../assets/icons/partner-epam.png";
import itpark from "../../assets/icons/partner-itpark.png";


export default {
  data() {
    return {
      usefull: [
        {
          image: astrum,
          link: "https://astrum.uz/uz",
        },
        {
          image: epam,
          link: "https://www.epam.com/",
        },
        {
          image: itpark,          
          link: "https://it-park.uz/",
        }
      ],
    };
  },
};
</script>
<style>
.usefull {
  padding: 50px 0 0;
}
.usefull--title {
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  line-height: 43px;
  color: #324352;
  position: relative;
  padding-bottom: 60px;
}
.usefull--title::after {
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
.usefull__boxes {
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
}
.usefull__box {
  width: 31%;
  padding: 40px;
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid #f6f6f6;
}
.usefull__boxes a {
  display: flex;
  justify-content: center;
}
.usefull__box img {
  width: 100%;
  object-fit: cover;
}

.usefull__box:hover {
  background: linear-gradient(white, white) padding-box,
    linear-gradient(180deg, #00c695, white) border-box;
  border: 1px solid transparent;
}

@media screen and (max-width: 768px) {
  .usefull {
    padding: 25px 0 0;
  }
  .usefull--title {
    font-size: 25px;
  }
}

@media screen and (max-width: 768px) {
  .usefull {
    padding: 30px 0;
  }

  .usefull__boxes {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .usefull__box {
    width: 60%;
    padding: 15px;
    margin-bottom: 0;
  }
}
</style>
