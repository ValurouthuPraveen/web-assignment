<template>
  <div class="container">
    <nav class="navbar navbar-light bg-color">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/static/images/logos/gujarat delicacies.jpg" alt="gujarat delicacies image" class="delicacies-logo">
        </a>
        <div class="d-flex">
          <h4 class="cart" @click="goToCart">Cart</h4>
        </div>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-4 delicacy-card" v-for="delicacy in delicacies" :key="delicacy.id">
        <div class="card h-100">
          <img :src="imagePath+delicacy.image" class="card-img-top image-resolution" alt="delicacy-image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{delicacy.name}}<span class="delicacy-price">{{delicacy.price}}</span></h5>
            <p class="card-text">{{delicacy.description}}</p>
            <button class="delicacy-btn mt-auto">{{btnText}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import delicacies from '../../../public/static/data/delicacies.json';

export default {
  name: 'DashboardPage',
  data() {
    return {
      delicacies: delicacies,
      imagePath: '/static/images/logos/',
      btnText: 'Add To Cart',
    };
  },
  methods: {
    goToCart() {
      this.$router.push({ name: 'CartItems' });
    }
  },
}
</script>

<style scoped>
.delicacy-price {
  float: right;
  font-size: 20px;
  font-weight: 700;
  color: #34117E;
}
.delicacy-card {
  padding: 30px;
}
.bg-color {
  background-color: #5A1DDA;
}
.cart {
  color: #ffffff;
  cursor: pointer;
}
.image-resolution {
  height: 200px;
  inline-size: auto;
}
.delicacies-logo {
  width: 60px;
  height: 60px;
  padding: 0px;
}
</style>