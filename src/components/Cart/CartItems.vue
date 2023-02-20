<template>
  <div class="container">
    <div
      class="container"
      v-if="quantityCount"
    >
      <div
        class="card m-20"
        v-for="delicacy in delicaciesInCart"
        :key="delicacy.id"
      >
        <h5 class="card-header">
          {{ delicacy.name }}
        </h5>
        <div class="card-body d-flex flex-direction space-between">
          <img
            class="col-md-8 card-title image-resolution"
            :src="delicacy.image"
          >
          <div class="d-flex align-items-center">
            <button
              @click="removeFromCart(delicacy.id)"
              class="btn btn-warning"
            >
              -
            </button>
            <p class="m-20">
              {{ delicacy.quantity }}
            </p>
            <button
              @click="addToCart(delicacy.id)"
              class="btn btn-primary"
            >
              +
            </button>
          </div>
          <div class="d-flex align-items-center">
            <h4>
              ₹ {{ getPrice(delicacy.price,delicacy.quantity) }}
            </h4>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-end align-items-center">
        <h5>
          Sub-Total: ₹ {{ getTotalPrice }}
        </h5>
        <button
          class="delicacy-btn mlr-25"
          data-bs-toggle="modal"
          data-bs-target="#successModal"
        >
          Check Out
        </button>
      </div>
    </div>
    <div
      v-if="!quantityCount"
      class="center empty-cart"
    >
      <h3>Cart is Empty!!!</h3>
    </div>
    <success-modal />
  </div>
</template>

<script>
import getDataFromSessionStorage from '@/utils/getDataFromSessionStorage';
import setDataToSessionStorage from '@/utils/setDataToSessionStorage';
import SuccessModal from '../Modal/SuccessModal.vue';

export default {
  name: 'CartItems',
  components: {
    SuccessModal,
  },
  data() {
    return {
      delicacies: [],
    };
  },
  computed: {
    delicaciesInCart() {
      return this.delicacies.filter((item) => item.quantity > 0);
    },
    quantityCount() {
      const quantity = this.delicaciesInCart.map((delicacy) => delicacy.quantity);
      return quantity.length !== 0;
    },
    getTotalPrice() {
      return this.delicaciesInCart.map((delicacy) => this.getPrice(delicacy.price, delicacy.quantity)).reduce(((acc, delicacyPrice) => acc + delicacyPrice), 0);
    },
  },
  methods: {
    getPrice(price, quantity) {
      return price * quantity;
    },
    removeFromCart(id) {
      this.delicacies[id].quantity -= 1;
      setDataToSessionStorage('delicacies', JSON.stringify(this.delicacies));
    },
    addToCart(id) {
      this.delicacies[id].quantity += 1;
      setDataToSessionStorage('delicacies', JSON.stringify(this.delicacies));
    }
  },
  created() {
    this.delicacies = getDataFromSessionStorage('delicacies');
  },
}
</script>

<style scoped>
.image-resolution {
  width: 150px;
  height: 100px;
}
.m-20 {
  margin: 20px;
}
.mlr-25 {
  margin: 0 25px;
}
.delicacy-btn, .delicacy-btn:hover {
  width: auto;
  cursor: pointer;
}
.empty-cart {
  height: 80vh;
}
@media only screen and (max-width: 600px) {
  .flex-direction {
    flex-direction: column;
    align-items: center;
  }
}
</style>