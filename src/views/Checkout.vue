<template>
  <form @submit.prevent="checkout()">
    <div class="checkoutContainer">
      <div class="cart">
        <h3>Your Cart Item</h3>
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
                  <a
                    href="#"
                    @click.prevent="removeProductFromCart(item.product)"
                    >Remove</a
                  >
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5" style="padding: 20px">Total</td>
              <td>${{ totlalPrice }}</td>
              <td>
                <button type="submit" @click.prevent="clearCartItems()">
                  Clear Cart
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="container">
        <h3>Customer Information</h3>

        <label for="fname">Your Name</label>
        <input
          type="text"
          id="fname"
          v-model="form.customer_name"
          placeholder="Your name.."
          required
        />

        <label for="lname">Mobile Number</label>
        <input
          type="text"
          id="lname"
          v-model="form.customer_mobile"
          placeholder="Mobile Number"
          required
        />

        <label for="country">District</label>
        <select id="country" v-model="form.district" required>
          <option selected value="Dhaka">Dhaka</option>
          <option value="Comilla">Comilla</option>
          <option value="Khulna">Khulna</option>
          <option value="Chitagong">Chitagong</option>
          <option value="Barishal">Barishal</option>
        </select>

        <label for="address">Address</label>
        <textarea
          required
          id="address"
          v-model="form.address"
          placeholder="Your Address"
          style="height: 200px"
        ></textarea>
        <input type="hidden" v-model="form.product" />
        <input type="submit" value="Submit" />
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "checkout",
  data() {
    return {
      form: {
        customer_name: "",
        customer_mobile: "",
        district: "",
        user_id: 1,
        total_price: 10,
        products: [],
      },
      cart: this.$store.state.cart,
    };
  },
  created() {
    let cp = this.$store.state.cart.cart;
    this.form.products = cp;
    this.form.total_price = this.totlalPrice;
  },
  methods: {
    ...mapActions("cart", ["removeProductFromCart", "clearCartItems"]),
    ...mapActions("order", ["removeProductFromCart"]),

    
    async checkout() {
      await this.$store.dispatch("order/orderSubmitAction", this.form)
      this.$router.push('/profile')
      this.$store.state.order=null;
    },
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

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
img {
  width: 100px;
}
table {
  width: 100%;
  padding: 30px;
}
button {
  padding: 10px;
  cursor: pointer;
  color: #fff;
  background-color: red;
  font-size: 15px;
}
button:hover {
  color: #fff;
  background-color: #2c2c2c;
  transition: 0.4s;
}
a {
  text-decoration: none;
}

.checkout {
  margin: 50px;
}
.checkoutContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  clear: both;
  padding-top: 50px;
}
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 40%;
}
</style>