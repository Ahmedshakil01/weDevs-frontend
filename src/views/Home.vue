<template>
  <div class="product">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script> 
import Product from "@/components/Product.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    Product,
  },
  computed: {
    ...mapState("product", ["products"]),
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    ...mapActions("product", ["getProducts"]),
  },
};
</script>
<style  scoped>
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  clear: both;
}
</style>

