<template>
  <div class="card" @click="toggleDetails">
    <img :src="product.image" alt="Beverage" />
    <article>
      <h4>{{ product.name }}</h4>
      <h3>฿{{ product.price }}</h3>
    </article>
  </div>
  <div v-if="detailsAreVisible" class="overlay">
    <div class="dialog">
      <img :src="product.image" alt="Beverage" />
      <article>
        <h4>{{ product.name }}</h4>
        <p>Product Description</p>
        <hr />
        <p>{{ product.description }}</p>
        <button class="buy-btn" @click="buyProduct">Buy ฿{{ product.price }}</button>
      </article>
      <button @click="toggleDetails" class="close-btn">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return { detailsAreVisible: false };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    buyProduct() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

<style scoped>
.card {
  height: -webkit-fill-available;
  max-height: 100%;
  margin-top: 10px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;
}
.card:hover{
  top: -2px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
}
.close-btn:hover,
.buy-btn:hover{
  filter: brightness(90%);
}
.card img {
  width: 50%;
  height: auto;
  object-fit: cover;
  align-self: center;
  object-position: center center;
  padding: 5% 0;
}
.card article,
.dialog article {
  padding: 20px;
  display: flex;

  flex: 1;
  justify-content: space-between;
  flex-direction: column;
}
article h3 {
  color: salmon;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 2;
}
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  background-color: white;
  border-radius: 12px;
}
.dialog img {
  width: 300px;
  height: auto;
}
.buy-btn {
  margin-top: 20px;
  color: white;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  background-color: #19A03F;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  height: 30px;
  text-transform: uppercase;
}
.close-btn {
  position: absolute;
  top: 3%;
  right: 3%;
  width: 30px;
  height: 30px;
  border-radius:50%;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  font-weight: bold;
}
</style>
