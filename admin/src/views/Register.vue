<template>
    <div>
    <section class="login">
      <div class="login__modal">
        <p class="login__modal--titling">Xush kelibsiz</p>

        <h2 class="login__modal--subtitling">Ro'yxatdan o'tish</h2>

        <div class="login__modal--input w50">
          <span>Ismingiz</span>
          <div class="login__modal--inputinner">
            <img src="https://oilakredit.uz/media/store/img/login-user.svg" alt="login" />
            <input type="text" placeholder="Login" />
          </div>
        </div>
        <div class="login__modal--input w50">
          <span>Familiyangiz</span>
          <div class="login__modal--inputinner">
            <img src="https://oilakredit.uz/media/store/img/login-user.svg" alt="login" />
            <input type="text" placeholder="Login" />
          </div>
        </div>
        <div class="login__modal--input">
          <span>Username</span>
          <div class="login__modal--inputinner">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Antu_username-copy.svg/2048px-Antu_username-copy.svg.png" alt="login" />
            <input type="text" placeholder="Login" />
          </div>
        </div>
        <div class="login__modal--input">
          <span>Telefon raqamingiz</span>
          <div class="login__modal--inputinner">
            <img src="http://simpleicon.com/wp-content/uploads/phone-1.svg" alt="login" />
            <input type="text" placeholder="Login" />
          </div>
        </div>
        <div class="login__modal--input">
          <span>E-mailingiz</span>
          <div class="login__modal--inputinner">
            <img src="http://simpleicon.com/wp-content/uploads/mail-5.svg" alt="login" />
            <input type="text" placeholder="Login" />
          </div>
        </div>

        <alert class="isa_error" v-if="error">
          <span v-html="error"></span>
        </alert>

        <Button
          class="oi-btn--dark mb-3 mt-3 cursor"
        >
          <template v-slot:text> Ro'yhatdan o'tish </template>
        </Button>
      </div>
    </section>
    <div class="hr-loader" v-if="isLoader">
      <Loader />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>

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
  width: 750px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
}

.login__modal--titling {
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  width: 100%;
}

.login__modal--subtitling {
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  color: #000000;
  margin-bottom: 25px;
  width: 100%;
}

.login__modal--input {
  margin-bottom: 25px;
  position: relative;
  width: 100%;
}

.login__modal--input.w50 {
  width: calc(50% - 15px);
}
.login__modal .oi-btn{
  width: 100%;
  height: 60px;
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
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: brightness(0);
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
