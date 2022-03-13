<template>
  <section id="instructions" class="container">
    <div class="instructions">
      <h1 class="oi-section--title">Tafsiyaviy ko’rsatmalar</h1>
      <div class="instructions__boxes">
        <a
          class="instructions__box gap-10 pointer"
          :href="instructions.link"
          target="_blank"
          v-for="(instructions, index) of instructions"
          :key="instructions.title + index"
        >
          <div
            class="d-flex flex-column align-items-center justify-content-center gap-10"
          >
            <img class="inst-img" :src="instructions.image" />
            <h2>{{ instructions.title }}</h2>
            <p>{{ instructions.desc }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import JavaScript from "../../assets/icons/java-script.svg";
import Java from "../../assets/icons/java.svg";
import Python from "../../assets/icons/python.svg";
import СPlus from "../../assets/icons/plus.svg";
import Сsharp from "../../assets/icons/sharp.svg";
import Uxui from "../../assets/icons/uxui.svg";
import Typescript from "../../assets/icons/typescript.svg";
import Devops from "../../assets/icons/devops-2.svg";
export default {
  data() {
    return {
      instructions: [
        {
          image: JavaScript,
          link: "https://www.javascript.com/",
          title: "JavaScript",
        },
        {
          image: Java,
          link: "https://www.java.com/ru/",
          title: "Java",
        },
        {
          image: Python,
          link: "https://www.python.org/",
          title: "Python",
        },
        {
          image: Сsharp,
          link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
          title: "C#",
        },
        {
          image: СPlus,
          link: "https://isocpp.org/",
          title: "C++",
        },
        {
          image: Uxui,
          link: "https://habr.com/ru/post/321312/",
          title: "UX/UI",
        },
        {
          image: Typescript,
          link: "https://www.typescriptlang.org/",
          title: "Typescript",
        },
        {
          image: Devops,
          link: "https://aws.amazon.com/ru/devops/what-is-devops/",
          title: "DevOps",
        },
      ],
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

.instructions {
  padding: 50px 0 0;
  font-family: "Montserrat", sans-serif;
}
.instructions__boxes {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
}
.instructions__box {
  width: 23%;
  padding: 30px;
  display: flex;
  gap: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid #f6f6f6;
}
.instructions__box h2 {
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  color: #5d6677;
  margin-bottom: 27px;
  text-align: center;
}

.instructions__box:hover {
  background: linear-gradient(white, white) padding-box,
    linear-gradient(180deg, #00c695, white) border-box;
  border: 1px solid transparent;
}
.instructions__box:hover .instructions__box h2 {
  color: #324352;
  font-weight: 700;
}
.inst-img {
  width: 40%;
  object-fit: contain;
}
/* 
.instructions-link {
  width: 100%;
  height: 100%;
  display: inline-block;
} */
</style>
