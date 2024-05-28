<script>
// let sum = 0;
// for(let i = 1; i <=10;i++){
//   sum += i /(i+1)
// }
// console.log(sum)
import { RouterView } from "vue-router";
export default {
  components: {
    RouterView,
  },
  data() {
    return {
      activ: false,
    };
  },
  mounted() {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")} ${currentDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;

    console.log(formattedDate);
  },
  methods: {
    activ() {
      this.activ = !this.activ;
    },
    Change_agreement() {
      alert("Да увы это поле ввода особым функционалом не похвастает");
    },
    goLogin(){
      this.$router.push({
        name:'Redis'
      })
    }
  },
};
</script>

<template>
  <div class="Logo">
    <nav class="nav">
      <a class="nav-link active" aria-current="page" href="#" id="shop"
        >GREENMIND</a
      >
      <a class="nav-link" href="#Home" id="Home">Home</a>
      <a class="nav-link" href="#Products">Products</a>
      <a class="nav-link" href="#Dontocts">Dontocts</a>

      <div class="bloc_redist">
        <img
        @click="goLogin()"
          class="img"
          src="../assets/Pngwing.png"
          title="Регистрация"
          alt="Регистрация"
        />
        <p class="img_text_raz">|</p>
      </div>
      <div class="bloc_active">
        <img
          class="animens"
          src="../assets/Perek.png"
          title="Опций"
          alt="Опций"
          @mouseover="this.activ()"
        />
      </div>
    </nav>
  </div>
  <div class="bloc_infa">
    <div class="bloc_information">
      <div class="bloc_cort">
        <div class="bloc_gl_text">
          <div class="Bloc_text_ris">
            <h1 class="bloc_text">Buy your dream plants</h1>
          </div>
          <div class="bloc_content">
            <div class="bloc_con_text_1">
              <p class="Number">50+</p>
              <p class="text">Plant Specles</p>
            </div>

            <div class="Separator">
              <p class="separator">|</p>
            </div>

            <div class="bloc_con_text_2">
              <p class="Number">100+</p>
              <p class="text">Customers</p>
            </div>
          </div>

          <div class="bloc_coms">
            <div class="bloc_input">
              <label for="validationCustom01"></label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                value="What are you looking for? Click here to register"
                required
                @change="Change_agreement()"
              />

              <div class="bloc_img">
                <img
                  src="../assets/Vector.png"
                  title="Направление"
                  alt="Направление"
                />
              </div>
              <div class="Bloc_img_clikc">
                <img
                  class="img_click"
                  src="../assets/Pngwing.png"
                  title="Регистрация"
                  alt="Регистрация"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="Bloc_otp">
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </div>

  <div></div>
</template>
 
<style scoped>
.Logo {
  margin: 20px 0px 0px 30px;
  display: flex;
}

.Bloc_text_ris {
  display: block;
}

.Bloc_img_clikc {
  margin: 0px 0px 100px 10px;
}

.img_click {
  width: 35px;
  height: 35px;
}

.Bloc_otp {
  margin: 50px 50px 100px 350px;
  width: 700px;
  height: 500px;
}

.img {
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: 10px 5px 0px 5px;
}

/* .img_reg{
  width: 20px;
  height: 15px;
  margin: 6px 0px 0px 0px;
} */

#shop {
  font-family: Bookman, URW Bookman L, serif;
  margin: 0px 30px 0px 10px;
  font-size: 28px;
  padding: 4px;
  color: black;
}

.bloc_none {
  display: flex;
  opacity: 0%;
}

.bloc_redist {
  display: flex;
  margin: 0px 0px 0px 1100px;
}

.img_text_raz {
  font-size: 27px;
  margin: 0px 3px 0px 3px;
}

.bloc_active {
  opacity: 100%;
}

.animens {
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: 10px 5px 0px 5px;
  transition: 0.5s;
  transform: rotate(0deg);
}

.animens:hover {
  transition: 0.5s;
  transform: rotate(90deg);
}

#shop:hover {
  transition: 0.5s;
  color: rgb(99, 98, 98);
}

#Home {
  color: rgb(35, 35, 35);
}

#Home:hover {
  transition: 0.5s;
  color: rgb(99, 98, 98);
}

a {
  margin: 0px 10px 0px 10px;
  font-size: 23px;
  font-weight: 500;
  color: rgb(49, 48, 48);
}

#click_1:hover {
  transition: 0.5s;
  color: rgb(99, 98, 98);
}

#click_2:hover {
  transition: 0.5s;
  color: rgb(99, 98, 98);
}

.bloc_infa {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bloc_information {
  margin: 20px 0px;
  width: 1848px;
  height: 612px;
  background-color: #c1dcdc;
  border-radius: 25px;
}

.bloc_cort {
  display: flex;
}

.bloc_gl_text {
  width: 550px;
  height: 250px;
  padding: 10px 0px 0px 35px;
}

.bloc_text {
  font-size: 75px;
  font-weight: 600;
  color: rgb(0, 0, 0);
}

.bloc_content {
  display: flex;
}

.bloc_con_text_1 {
  margin: 0px 15px;
}

.bloc_con_text_2 {
  margin: 0px 35px;
}

.Separator {
  margin: 0px 20px 0px 20px;
}

.separator {
  font-size: 65px;
  font-weight: 300;
}

.Number {
  font-size: 55px;
  font-weight: 500;
}

.text {
  font-size: 28px;
}

.bloc_coms {
  display: flex;
}

.bloc_input {
  margin: 10px;
  display: flex;
}

.form-control {
  width: 480px;
  height: 55px;
}

.bloc_img {
  margin: 0px 0px 0px 20px;
  transform: rotate(-35deg);
}

.bloc_img_LOGO {
  margin: 0px 0px 50px 0px;
  border-top-left-radius: 25px;
}

.img_logo {
  margin: 0px 0px 70px 0px;
  padding: 0px 0px 70px 0px;
}

.Bloc_raster {
  display: flex;
  margin: 0px 0px 70px 0px;
}
</style>s