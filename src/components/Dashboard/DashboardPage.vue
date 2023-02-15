<template>
  <div class="container">
    <div class="row gy-4 gx-6">
      <div class="col-md-4" v-for="delicacy in delicacies" :key="delicacy.id">
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
}
</script>

<style scoped>
.delicacy-price {
  float: right;
  font-size: 20px;
  font-weight: 700;
  color: #34117E;
}
.image-resolution {
  height: 200px;
  inline-size: auto;
}
</style>