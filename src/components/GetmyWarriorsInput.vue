<template>
  <div class="container">
    <form @submit.prevent="CardanoWarriors" class="form-container">
      <div>
        <label for="address" class="label"></label>
        <input
          type="text"
          id="address"
          v-model="formData.address"
          class="input-field"
          placeholder="Enter your wallet address or $handle..."
        />
      </div>
      <button type="submit" class="submit-button">Get my warriors!</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style>
.input-field {
  width: 250px;
  padding: 12px;
  margin-bottom: 10px;
  border: none;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.submit-button {
  width: 200;
  padding: 10px;
  background-color: #235457;
  color: rgb(213, 232, 232);
  border: silver;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.5s;
}

.submit-button:hover {
  background-color: #53c0b9;
}
</style>
