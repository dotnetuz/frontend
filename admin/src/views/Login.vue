<template>
  <div>
    <section class="login">
      <div class="login__modal">
        <p class="login__modal--titling">Xush kelibsiz</p>

        <h2 class="login__modal--subtitling">Tizimga kirish</h2>

        <div class="login__modal--input">
          <span>Login</span>
          <div class="login__modal--inputinner">
            <img
              src="https://oilakredit.uz/media/store/img/login-user.svg"
              alt="login"
            />
            <input
              type="text"
              :placeholder="'Login'"
              v-model="username"
              v-on:keyup.enter="tryToLogin"
            />
          </div>
        </div>
        <div class="login__modal--input">
          <span>Parol</span>
          <div class="login__modal--inputinner">
            <img
              src="https://oilakredit.uz/media/store/img/login-password.svg"
              alt="login"
            />
            <input
              :type="isPassword"
              :placeholder="'Parol'"
              v-model="password"
              v-on:keyup.enter="tryToLogin"
            />
            <span class="eye" @click="togglePassword()">
              <img
                :src="'https://oilakredit.uz/media/store/img/' + isPasswordImg"
                alt="eye"
              />
            </span>
          </div>
        </div>

        <alert class="isa_error" v-if="error">
          <span v-html="error"></span>
        </alert>

        <Button
          class="oi-btn--green mb-3 mt-3 cursor"
          style="margin-bottom: 15px"
          @click.native="tryToLogin"
        >
          <template v-slot:text> Tizimga kirish </template>
        </Button>
        <router-link to="/register" style="width: 100%">
          <Button class="oi-btn--dark mb-3 mt-3 cursor">
            <template v-slot:text> Ro'yhatdan o'tish </template>
          </Button>
        </router-link>
      </div>
    </section>
    <div class="hr-loader" v-if="isLoader">
      <Loader />
    </div>
  </div>
</template>
<script>
import Button from "@/components/button/Button";
import Loader from "@/components/loader/Loader";
const roles = ["", "Applicant", "Interviewer", "Admin", "HR"];
export default {
  data() {
    return {
      showError: false,
      error: "",
      username: "",
      password: "",
      isLoader: false,
      isPassword: "password",
      isPasswordImg: "hide-password.svg",
    };
  },

  components: {
    Button,
    Loader,
  },

  methods: {
    onError(text) {
      this.showError = true;
      this.error = text;
    },

    async tryToLogin() {
      if (this.username && this.password) {
        this.isLoader = true;
        try {
          let res = await this.$api(
            `auth/login?username=${this.username}&password=${this.password}`
          );
          if (res.status == 200) {
            localStorage.setItem("auth_token", res.data.data.token);
            localStorage.setItem("user_role", roles[res.data.data.user.role]);
            localStorage.setItem(
              "user_info",
              JSON.stringify(res.data.data.user)
            );
            this.$toastr.defaultPosition = "toast-top-right";
            this.$toastr.defaultStyle = {
              "background-color": "#00C695",
              color: "white",
            };
            this.$toastr.s("Muvoffaqqiyatli kirdingiz");
            this.$router.push({ name: "Dashboard" });
          }
        } catch (err) {
          this.onError("Login qilishda xatolik.");
        } finally {
          this.isLoader = false;
        }
      } else {
        this.onError("Formani to'liq to'ldiring.");
      }
    },

    togglePassword() {
      if (this.isPassword === "password") {
        this.isPassword = "text";
        this.isPasswordImg = "show-password.svg";
      } else {
        this.isPassword = "password";
        this.isPasswordImg = "hide-password.svg";
      }
    },
  },
};
</script>
<style scoped>
body,
html {
  background: white;
}
*,
ul,
p {
  margin: 0;
  padding: 0;
  list-style: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  scroll-behavior: smooth;
  outline: none;
  font-family: "Montserrat", sans-serif;
}

a {
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: none;
}

.cursor {
  cursor: pointer;
}
.hr-loader {
  width: 100%;
}
.login {
  background: url(https://oilakredit.uz/media/store/img/login-bg.svg) no-repeat
    #f6f6f6;
  background-position: bottom right;
  background-size: auto 100%;
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login__modal {
  background: #ffffff;
  border-radius: 10px;
  padding: 25px 35px;
  width: 450px;
}

.login__modal--titling {
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
}

.login__modal--subtitling {
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  color: #000000;
  margin-bottom: 25px;
}

.login__modal--input {
  margin-bottom: 25px;
  position: relative;
}

.login__modal--inputinner {
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e6eaed;
  box-sizing: border-box;
  border-radius: 5px;
}

.login__modal--inputinner img {
  margin: 15px;
}

.login__modal--input span {
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 5px;
  flex-shrink: 0;
}

.login__modal--input input {
  width: 100%;
  height: 100%;
  border: 0;
  background: none;
  border-left: 1px solid #e6eaed;
  padding: 0 20px;
}

.login__modal--input input::placeholder {
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #5d6677;
}

.login__modal--input .eye {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.login__modal--input .eye img {
  cursor: pointer;
}

.login__modal--input .eye img:hover {
  opacity: 0.7;
}

.login__modal--button-green {
  height: 50px;
  background: #00c695;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 20px;
}

.login__modal--button-grey img {
  margin-right: 5px;
  filter: brightness(100);
  transition: 0.1s;
}

.login__modal--button-grey:hover img {
  filter: brightness(1);
}

@media (max-width: 768px) {
  .login {
    background-position: bottom right;
    background-size: 50% auto;
  }

  .login__modal {
    width: 80%;
  }
}

@media (max-width: 576px) {
  .login__modal {
    width: 90%;
    padding: 20px 25px;
  }

  .login__modal--titling {
    font-size: 12px;
  }

  .login__modal--subtitling {
    font-size: 24px;
    margin-bottom: 15px;
  }
}
</style>
