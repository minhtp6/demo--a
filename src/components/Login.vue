<template>
  <div class="row">
    <div class="col-md-6 mx-auto p-0">
      <div class="card">
        <div class="login-box">
          <div class="login-snip">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              class="sign-in"
              checked
            /><label for="tab-1" class="tab">Login</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" /><label
              for="tab-2"
              class="tab"
            ></label>
            <div class="login-space">
              <div class="login">
                <div class="loader" v-if="$loading"></div>
                <div class="group">
                  <label for="user" class="label">Username</label>
                  <input
                    id="user"
                    type="text"
                    v-model="form.username"
                    class="input"
                    placeholder="Enter your username"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">Password</label>
                  <input
                    id="pass"
                    type="password"
                    v-model="form.password"
                    class="input"
                    data-type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <!-- <div class="group"> <input id="check" type="checkbox" class="check" checked> <label for="check"><span class="icon"></span> Keep me Signed in</label> </div> -->
                <div class="group">
                  <input
                    type="submit"
                    class="button"
                    value="Sign In"
                    v-on:click="submit()"
                  />
                </div>
                <div class="hr"></div>
                <!-- <div class="foot"> <a href="#">Forgot Password?</a> </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import sweetalert from "sweetalert";
export default {
  name: "Login",

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    submit() {
      let vm = this;
      console.log(this.form.password);

      if (this.form.username == "" || this.form.password == "") {
        sweetalert("Error!", "Please input your account", "error");
      } else {
        vm.$loading(true);
        axios
          .post("https://60c2b23a917002001739d615.mockapi.io/users", this.form)
          .then(function (response) {
            if (response.status == 201) {
                vm.$loading(false)
              vm.$session.start();
              vm.$session.set("jwt", response.status);
              vm.$router.replace({ name: "Home" });
            } else {
              sweetalert("Error!", "Can Not Connect To Server!", "error");
            }
          })
          .catch(function (a) {
            console.error(a);
          })
      }
    },
  },
};
</script>

<style>
body {
  padding: 10%;
  float: initial;
  color: black;
  background: url("https://img.wallpapersafari.com/desktop/1920/1080/7/5/xqilPm.png");
  font: 600 16px/18px "Open Sans", sans-serif;
}

.login-box {
  width: 100%;
  margin: auto;
  max-width: 75%;
  min-height: 40%;
  position: relative;
  background: white;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  padding: auto;
}

.login-snip {
  width: 100%;
  height: 100%;
  padding: 10%;
  background: lightblue;
}

.login-snip .login,
.login-snip .sign-up-form {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
}

.login-snip .sign-in,
.login-snip .sign-up,
.login-space .group .check {
  display: none;
}

.login-snip .tab,
.login-space .group .label,
.login-space .group .button {
  text-transform: uppercase;
}

.login-snip .tab {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}

.login-snip .sign-in:checked + .tab,
.login-snip .sign-up:checked + .tab {
  color: black;
  border-color: #1161ee;
}

.login-space {
  min-height: 345px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}

.login-space .group {
  margin-bottom: 15px;
}

.login-space .group .label,
.login-space .group .input,
.login-space .group .button {
  width: 100%;
  color: white;
  display: block;
}

.login-space .group .input,
.login-space .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}

/* .login-space .group input[data-type="password"] {
    text-security: circle;
    -webkit-text-security: circle
} */

.login-space .group .label {
  color: black;
  font-size: 12px;
}

.login-space .group .button {
  background: steelblue;
}

.login-space .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}

.login-space .group label .icon:before,
.login-space .group label .icon:after {
  content: "";
  width: 10px;
  height: 2px;
  background: #fff;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
}

.login-space .group label .icon:before {
  left: 3px;
  width: 5px;
  bottom: 6px;
  transform: scale(0) rotate(0);
}

.login-space .group label .icon:after {
  top: 6px;
  right: 0;
  transform: scale(0) rotate(0);
}

.login-space .group .check:checked + label {
  color: #fff;
}

.login-space .group .check:checked + label .icon {
  background: #1161ee;
}

.login-space .group .check:checked + label .icon:before {
  transform: scale(1) rotate(45deg);
}

.login-space .group .check:checked + label .icon:after {
  transform: scale(1) rotate(-45deg);
}

.login-snip .sign-in:checked + .tab + .sign-up + .tab + .login-space .login {
  transform: rotate(0);
}

.login-snip .sign-up:checked + .tab + .login-space .sign-up-form {
  transform: rotate(0);
}

*,
:after,
:before {
  box-sizing: border-box;
}

.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hr {
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, 0.2);
}

.foot {
  text-align: center;
}

.card {
  width: 500px;
  /* left: 100px */
}

::placeholder {
  color: white;
}
</style>