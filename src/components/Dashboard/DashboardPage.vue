<template>
  <div class="container">
    <div class="row">
      <div
        class="col-md-4 delicacy-card"
        v-for="delicacy in delicacies"
        :key="delicacy.id"
      >
        <div class="card h-100">
          <img
            :src="delicacy.image"
            class="card-img-top image-resolution"
            alt="delicacy-image"
          >
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              {{ delicacy.name }} 
              <span class="delicacy-price">
                ₹ {{ delicacy.price }}
              </span>
            </h5>
            <p class="card-text">
              {{ delicacy.description }}
            </p>
            <button
              class="delicacy-btn mt-auto"
              v-if="delicacy.quantity === 0"
            >
              <span
                class="cursor-pointer" 
                @click="addToCart(delicacy.id)"
              >
                Add To Cart
              </span>
            </button>
            <button 
              class="delicacy-btn mt-auto d-flex space-evenly"
              v-else
            >
              <span
                class="cursor-pointer"
                @click="removeFromCart(delicacy.id)"
              >
                -
              </span>
              {{ delicacy.quantity }}
              <span
                class="cursor-pointer"
                @click="addToCart(delicacy.id)"
              >
                +
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getDataFromSessionStorage from '@/utils/getDataFromSessionStorage';
import setDataToSessionStorage from '@/utils/setDataToSessionStorage';

export default {
  name: 'DashboardPage',
  data() {
    return {
      delicacies: [],
      delicaciesInCart: [],
      showCart: false,
    };
  },
  methods: {
    addToCart(id) {
      this.delicacies[id].quantity += 1;
      setDataToSessionStorage('delicacies', JSON.stringify(this.delicacies));
    },
    removeFromCart(id) {
      this.delicacies[id].quantity -= 1;
      setDataToSessionStorage('delicacies', JSON.stringify(this.delicacies));
    },
  },
  created() {
    this.delicacies = getDataFromSessionStorage('delicacies');
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
.image-resolution {
  height: 200px;
  inline-size: auto;
}
</style>