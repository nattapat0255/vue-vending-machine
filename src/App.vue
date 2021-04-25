<template>
  <div class="container">
    <div class="branch-selection">
      <select name="cars" id="cars">
        <option v-for="vendor in vendors" :value="vendor.location_name" :key="vendor.id">
        {{vendor.location_name}}
        </option>
      </select>
    </div>
    <div class="grid">
      <div class="grid-item" v-for="product in products" :key="product.id">
        <product-element :product="product"></product-element>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      vendors: [],
      products: [
        {
          id: "1",
          image: require("@/assets/images/chamisul.png"),
          name: "Jinro Phamisul",
          description: "360 ml. Alcohol 17.8%",
          price: 149,
          quantity: 15,
        },
        {
          id: "2",
          image: require("@/assets/images/grape-fluit.png"),
          name: "Jinro Grape Fruit",
          description: "360 ml. Alcohol 13%",
          price: 149,
          quantity: 15,
        },
        {
          id: "3",
          image: require("@/assets/images/green-grape.png"),
          name: "Jinro Green Grape",
          description: "360 ml. Alcohol 16%",
          price: 149,
          quantity: 15,
        },
        {
          id: "4",
          image: require("@/assets/images/plum.png"),
          name: "Jinro Plum",
          description: "360 ml. Alcohol 14%",
          price: 149,
          quantity: 15,
        },
        {
          id: "1",
          image: require("@/assets/images/chamisul.png"),
          name: "Jinro Phamisul",
          description: "360 ml. Alcohol 17.8%",
          price: 149,
          quantity: 15,
        },
        {
          id: "2",
          image: require("@/assets/images/grape-fluit.png"),
          name: "Jinro Grape Fruit",
          description: "360 ml. Alcohol 13%",
          price: 149,
          quantity: 15,
        },
        {
          id: "3",
          image: require("@/assets/images/green-grape.png"),
          name: "Jinro Green Grape",
          description: "360 ml. Alcohol 16%",
          price: 149,
          quantity: 15,
        },
        {
          id: "4",
          image: require("@/assets/images/plum.png"),
          name: "Jinro Plum",
          description: "360 ml. Alcohol 14%",
          price: 149,
          quantity: 15,
        },
      ],
    };
  },
  mounted() {
    axios.get("http://localhost:5000/api/v1/vendors").then((response) => {
      var data = response.data;
      var vendors = [];
      data.forEach((item) => {
        vendors.push({"id": item[0],"location_name":item[1],"quantity_per_slot":item[2],"max_slot":item[3]});
      });
      this.vendors = vendors;
    });
  },
};
</script>

<style>
@font-face {
  font-family: "noto-sans-thai";
  src: local("NotoSansThai"),
    url(./assets/fonts/NotoSansThai-Regular.ttf) format("truetype");
}
* {
  margin: 0;
  padding: 0;
}
html {
  box-sizing: border-box;
}
body {
  color: #0f1111;
  background-color: #f3f7fa;
  font-family: noto-sans-thai, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.container {
  margin: 40px 40px;
}
.grid {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 20px;
  row-gap: 20px;
}
.branch-selection {
  text-align: center;
}
.branch-selection select{
  font-family: sans-serif;
  width: 80%;
  height: 40px;
  margin: 30px 0;
  border-radius: 12px;
  border-color: lightgray;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
}
@media only screen and (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
