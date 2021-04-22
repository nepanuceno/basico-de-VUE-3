const productDetail = {
  template: `<img v-bind:src="product.image" v-bind:alt="product.description">
    <strong v-show="product.stars > 0">{{ product.stars }}</strong>
    <button @click.prevent="addCart(product)"
        :disabled="productInCart"
        :class="['color', {'button-disabled' : productInCart}]">ADD CART
    </button>`,

  //   props: ["product", "productInCart"],
  emits: ["add-product-cart"],

  props: {
    product: {
      type: Object,
      required: true,
    },
    productInCart: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    addCart(product) {
      console.log("Add Carft In Component");
      this.$emit("add-product-cart", product);
    },
  },
};

app.component("product-datail", productDetail);
