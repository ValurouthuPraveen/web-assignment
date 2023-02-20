<template>
  <div class="container">
    <div
      class="modal"
      tabindex="-1"
      id="successModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body center m-0 direction">
            <img
              src="/static/images/icons/check mark.png"
              class="success-image"
            >
            <h2>Thank You!!</h2>
            <p class="mt-10">
              Your order has been successfully submitted. Thanks!!
            </p>
          </div>
          <div class="modal-footer">
            <button 
              type="button"
              class="delicacy-btn"
              data-bs-dismiss="modal"
              @click="checkout"
            >
              OK
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
  data() {
    return {
      delicacies: [],
    }
  },
  methods: {
    checkout() {
      this.$router.push({ name: 'DashboardPage' });
      this.delicacies.map((delicacy) => delicacy.quantity = 0);
      setDataToSessionStorage('delicacies', JSON.stringify(this.delicacies));
    },
  },
  created() {
    this.delicacies = getDataFromSessionStorage('delicacies');
  }
}
</script>

<style scoped>
.direction {
  flex-direction: column;
}
.modal-footer {
  border-top: none;
}
.success-image {
  width: 60px;
}
.mt-10 {
  margin-top: 10px;
}
</style>