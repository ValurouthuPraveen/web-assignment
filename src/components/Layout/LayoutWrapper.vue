<template>
  <div class="container">
    <nav class="navbar navbar-light bg-color">
      <div class="container">
        <a
          class="navbar-brand cursor-pointer"
          @click="goToDashboard"
        >
          <img
            src="/static/images/logos/gujarat delicacies.jpg"
            alt="gujarat delicacies image"
            class="delicacies-logo"
          >
        </a>
        <div class="d-flex">
          <h4
            class="cart"
            @click="goToCart"
            v-if="checkRoute"
          >
            Cart
          </h4>
          <h4
            class="cart"
            @click="goToDashboard"
            v-if="!checkRoute"
          >
            Dashboard
          </h4>
          <h4
            class="cart pl-30"
            @click="logout"
          >
            Logout
          </h4>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'LayoutWrapper',
  data() {
    return {

    };
  },
  computed: {
    checkRoute() {
      return this.$route.name !== 'CartItems';
    },
  },
  methods: {
    goToDashboard() {
      this.$router.push({ name: 'DashboardPage' });
    },
    goToCart() {
      this.$router.push({ name: 'CartItems', params: {inCart: "testing"} });
    },
    logout() {
      sessionStorage.clear();
      this.$router.push({ name: 'LoginPage' });
    },
  },
}
</script>

<style scoped>
.delicacies-logo {
  width: 60px;
  height: 60px;
  padding: 0px;
}
.bg-color {
  background-color: #5A1DDA;
}
.cart {
  color: #ffffff;
  cursor: pointer;
}
.pl-30 {
  padding-left: 30px;
}
</style>