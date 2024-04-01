<template>
  <div class="q-pa-md container">
    <q-form @submit.prevent="fetchPost" class="form-container">
      <q-input
        filled
        v-model="formData.address"
        placeholder="Enter your wallet address or $handle..."
      />
      <q-btn type="submit" color="primary" label="Get my warriors!" />
    </q-form>

    <!-- Render the first item using the Totals component -->
    <warrior-totals v-if="posts[0]" :post="posts[0]" class="total-totals" />

    <container-comp :posts="posts" />

    <q-separator spaced />
  </div>
</template>

<script>
import axios from "axios";
import WarriorTotals from "components/WarriorTotals.vue"; // Import the Total component
import ContainerComp from "components/ContainerComp.vue"; // Import the Containers component

export default {
  components: {
    WarriorTotals, // Register the Totals component
    ContainerComp, // Register the Containers component
  },
  data() {
    return {
      formData: {
        address: "",
      },
      posts: [],
    };
  },
  methods: {
    async fetchPost() {
      try {
        const response = await axios.post(
          "https://kadana-incl-totals.ew.r.appspot.com/get_metadata",
          this.formData
        );
        this.posts = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.q-pa-md {
  padding: var(--q-space-md);
}

.form-container {
  max-width: 400px;
  margin-bottom: var(--q-space-md);
}

.input-field {
  margin-bottom: var(--q-space-sm);
}

.submit-button {
  width: calc(100% - 24px);
  margin-bottom: var(--q-space-md);
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

.card {
  background-color: rgba(255, 255, 255, 0.7);
  padding: var(--q-space-md);
}

.info-line {
  margin-bottom: var(--q-space-xs);
}

.label {
  font-weight: bold;
  margin-right: var(--q-space-xs);
}

.value {
  flex-grow: 1;
}

.card h3 {
  margin-bottom: var(--q-space-sm);
  color: var(--q-color-grey-9);
}

.card p {
  color: var(--q-color-grey-7);
}
</style>
