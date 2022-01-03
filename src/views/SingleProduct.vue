<template>
  <div v-if="product" class="singleProduct">
    <div class="image">
      <img :src="product.image" alt="image" />
    </div>
    <div class="content">
      <h1 class="mp">{{ product.name }}</h1>

      <div class="mp">
        <label for="">Quantity: </label>
          <input
        type="number"
        min="1"
        v-model.number="quantity"
        class="text-center col-1 mr-2 p-1"
      />
      </div>
      <div>
        <button class="mp" @click="addToCart()">Add to Cart</button>
      </div>
      <p class="mp" >{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["id"],

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    ...mapState("product", ["product"]),
  },

  mounted() {
    this.getProduct(this.$route.params.id);
  },

  methods: {
    ...mapActions("product", ["getProduct"]),

    ...mapActions("cart", ["addProductToCart"]),

    addToCart() {
      this.addProductToCart({
        product: this.product,
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style  scoped>
.singleProduct { 
  margin: 10px;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  clear: both;
  justify-content: space-around;
}
.singleProduct .image, .content { 
  margin: 10px;
  padding: 50px; 
  clear: both;
  text-align: left;
}
.mp{
  margin: 10px;
  padding: 10px;
}
.singleProduct button {
  padding: 10px 20px;
  margin: 20px;
  cursor: pointer;
  color: #fff;
  background-color: #000000;
  font-size: 20px;
}
.singleProduct button:hover {
  color: #fff;
  background-color: #2c2c2c;
  transition: 0.4s;
}
a {
  text-decoration: none;
}
</style>