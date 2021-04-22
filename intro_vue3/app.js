const myApp = {
  data() {
    return {
      title: "",
      name: "Paulo Roberto",
      lastName: "Torres",
      products: [
        {
          title: "FILME 01",
          description: "Filme YTS",
          image: "./assets/images/filme_1.png",
          stars: 3,
        },
        {
          title: "FILME 02",
          description: "Filme YTS",
          image: "./assets/images/filme_2.png",
          stars: 0,
        },
      ],
      cart: [],
      styles: {
        backgroundColor: "#000",
        color: "#fff",
      },
      themeBlack: true,
    };
  },

  methods: {
    addCart(product) {
      this.cart.push(product);
    },
    inCart(product) {
      return this.cart.indexOf(product) != -1;
    },

    removeCart(product) {
      this.cart = this.cart.filter((value, index) => {
        return product != value;
      });
    },

    toogleTheme() {
      this.themeBlack = !this.themeBlack;

      if (this.themeBlack) {
        this.styles.backgroundColor = "#000";
        this.styles.color = "#fff";
      } else {
        this.styles.backgroundColor = "#fff";
        this.styles.color = "#000";
      }
    },
  },

  computed: {
    fullName() {
      return this.name + " " + this.lastName;
    },
  },
};

const app = Vue.createApp(myApp);
