<template>
  <div class="page-wrapper d-flex align-items-center justify-content-center">
    <div class="col-xs-12">
      <div class="login-whitebox">
        <form>
          <h3 class="welcome-msg">Welcome to Gujarat Delicacies!!!</h3>
          <div class="login-container">
            <label class="float-left asterisk">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              class="input-field"
            />
          </div>
          <div class="login-container">
            <label class="float-left asterisk">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              class="input-field"
            />
          </div>
          <div class="login-btn-container">
            <button type="button" class="delicacy-btn" @click="loginUser">Log in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
    };
  },
  methods: {
    loginUser() {
      this.$router.push({ name: 'DashboardPage' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome-msg {
  padding: 30px 40px 0px 40px;
  font-size: 24px;
  text-align: center;
}
.page-wrapper {
  min-height: 100vh;
  background-image: url('../../../public/static/images/logos/World_Map_Login.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}
.login-whitebox {
  background: #ffffff;
  min-height: 300px;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgb(0 0 0 / 25%);
  margin: 0px 20px;
}
.login-container {
  padding: 10px 30px;
}
.asterisk:after {
  content: '*';
  font-size: 16px;
  color: #B00505;
  position: relative;
  top: 2px;
  margin-left: 4px;
}
.input-field {
  width: 100%;
  font-size: 18px;
  padding: 6px 12px;
  border: 1px solid #333333;
  box-sizing: border-box;
  border-radius: 4px;
}
.input-field:focus{
  outline:none !important;
  outline-width: 0 !important;
  box-shadow: none;
  background-color: none;
}
.login-btn-container {
  padding: 40px 30px;
}
</style>
