<script>
export default {
  data() {
    return {
      Email: "",
      Password: "",
      Address: "",
      Address_2: "",
      City: "",
      State: "",
      Zip: "",
      check: false,
    };
  },
  methods: {
    registration() {
      if (
        (Email == "",
        Password == "",
        Address == "",
        Address_2 == "",
        City == "",
        State == "",
        Zip == "")
      ) {
        alert("Сначало зополните все поля");
      } else 
      alert("Вы зарегестрированы");
    },
  },

  mounted() {
    alert("Согласны с условиями сайта которые я вам и не покажу ❤️‍🔥♡ ? ♡❤️‍🔥");
  },
};
</script>

<template>
  <div class="Bloc_forma">
    <form class="row g-3" @submit="registration()">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          v-model="Email"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword4"
          v-model="Password"
        />
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
          v-model="Address"
        />
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Address 2</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
          v-model="Address_2"
        />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">City</label>
        <input type="text" class="form-control" id="inputCity" v-model="City" />
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select" v-model="State">
          <option selected>Omericnskii</option>
          <option>Arisona</option>
          <option>Alaska</option>
          <option>Kolorada</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">Zip</label>
        <input type="text" class="form-control" id="inputZip" v-model="Zip" />
      </div>
      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="gridCheck"
            v-model="check"
          />
          <label class="form-check-label" for="gridCheck"> Check me out </label>
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary" @click="registration()">Sign in</button>
      </div>
    </form>
  </div>
</template>
 
<style scoped>
.Bloc_forma {
  margin: 0px 0px 100px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>