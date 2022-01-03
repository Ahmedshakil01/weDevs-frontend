<template>
  <table border="2" cellpedding="10px">
    <thead>
      <tr>
        <th>SL</th>
        <th>Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="items in cart" :key="items.product">
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>
            <img :src="item.product.image" alt="{{ item.product.name}}" />
          </td>
          <td>{{ item.product.name }}</td>
          <td>{{ item.product.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.product.price * item.quantity }}</td>
          <td>
            <a href="#" @click.prevent="removeProductFromCart(item.product)"
              >Remove</a
            >
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr >
        <td colspan="5" style="padding:20px">Total</td>
        <td>${{ totlalPrice }}</td>
        <td> <button type="submit" @click.prevent="clearCartItems()">Clear Cart</button></td>
      </tr>
    </tfoot>
  </table>

  <hr />

  <div class="checkout">
    <router-link to="checkout"><button>Checkout</button></router-link>
      
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  methods: {
    ...mapActions("cart", ["removeProductFromCart", "clearCartItems"]),
  },
  computed: {
    totlalPrice() {
      let total = 0;
      this.$store.state.cart.cart.forEach((item) => {
        total += item.product.price * item.quantity;
      });
      return total;
    },
  },
};
</script>

<style  scoped>
img {
  width: 100px;
}
table {
  width: 100%;
  padding: 50px;
}
button {
  padding: 10px; 
  cursor: pointer;
  color: #fff;
  background-color: #000000;
  font-size: 20px;
}
 button:hover {
  color: #fff;
  background-color: #2c2c2c;
  transition: 0.4s;
}
a {
  text-decoration: none;
}

.checkout{
  margin: 50px;
}
</style>