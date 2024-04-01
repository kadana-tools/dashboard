<template>
  <div class="cards-container" v-if="posts.length > 0">
    <!-- Render the rest of the items using v-for -->
    <div v-for="(post, index) in posts.slice(2)" :key="index" class="card">
      <h3>{{ post.Outpost_ID }}</h3>

      <div class="info-line">
        <img :src="post.Image" class="image" alt="Warrior Image" />
      </div>
      <div class="info-line">
        <span class="label">Name:</span>
        <span class="value">{{ post["Name"] }}</span>
      </div>
      <div class="info-line">
        <span class="label">Type:</span>
        <span class="value">{{ post["Type"] }}</span>
      </div>
      <div class="info-line">
        <span class="label">Rarity:</span>
        <span class="value">{{ post["Rarity"] }}</span>
      </div>
      <div class="info-line">
        <span class="label">Warrior Points:</span>
        <span class="value">{{ post["WP"] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.image {
  max-width: 200px; /* Adjust the max-width as needed */
  max-height: 200px; /* Adjust the max-height as needed */
}

.loading {
  color: white;
  font-size: 24px;
  margin-top: 20px;
}

.form-container {
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.input-field {
  width: calc(100% - 24px);
  padding: 12px;
  margin-bottom: 10px;
  border: none;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-field::placeholder {
  color: #666666c0;
}

.submit-button {
  width: calc(100% - 24px);
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #45a049;
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
  /* existing card styles */
  background-color: rgba(255, 255, 255, 0.7); /* Add this line */
  padding: 20px;
}

.info-line {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.label {
  font-weight: bold;
  margin-right: 5px;
}

.value {
  flex-grow: 1;
}

.card h3 {
  margin-bottom: 10px;
  color: #333333;
}

.card p {
  color: #666;
}

hr {
  margin-top: 20px;
  border: none;
  border-top: 1px solid #ddd;
  width: 100%;
}
</style>
