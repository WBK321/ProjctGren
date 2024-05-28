<script>
export default {
  //    data(){
  //       return{
  //            class_left:false,
  //        }
  //    },
  //    methods: {
  //       mouseOver_left(){
  //        this.class_left != this.class_left
  //       }
  //    },
  //    }
};
</script>

<template>
  <div class="Bloc_infa_pelvis">
    <h1 id="text_pelvis">About us</h1>
    <p id="texr_pob">Order now and appreciate the beury of nature</p>
  </div>

  <div class="Bloc_flex_color">
    <div class="bloc_FL_bloc">
      <img src="../assets/Res_gor1.png" title="Растение" alt="Растение" />
      <p class="text_img">Natural Plants</p>
    </div>

    <div class="bloc_FL_bloc">
      <img src="../assets/Res_gor2.png" title="Растение" alt="Растение" />
      <p class="text_img">Plant Accessories</p>
      <p class="text_img_pob">
        Horem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <div class="bloc_FL_bloc">
      <img src="../assets/Res_gor3.png" title="Растение" alt="Растение" />
      <p class="text_img">Artificial Plants</p>
    </div>
  </div>

  <div class="raz"></div>
</template>
 
<style scoped>
.Bloc_infa_pelvis {
  text-align: center;
}

.raz {
  margin: 100px;
}

#text_pelvis {
  font-weight: 700;
  font-size: 48px;
}

#text_pob {
  font-size: 21px;
  font-weight: 600;
  color: rgb(144, 138, 138);
}

.Bloc_flex_color {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c1dcdc;
  height: 835px;
  border-radius: 5px;
  margin: 35px 0px 0px 0px;
}

.bloc_FL_bloc {
  display: bloc;
  margin: 0px 80px 0px 80px;
  text-align: center;
}

img {
  width: 352px;
  height: 512px;
  border-radius: 12px;
  margin: 20px 0px 0px 0px;
}

.text_img {
  text-align: center;
  font-weight: 700;
  margin: 10px 0px 0px 0px;
  font-size: 25px;
}

.text_img_pob {
  text-align: center;
  margin: 5px 0px 0px 0px;
  font-size: 18px;
  width: 370px;
  color: rgb(144, 138, 138);
}

.active_lesft {
  border: 1px solid rgb(140, 200, 71);
  margin: 0px 0px 10px 0px;
}
</style>
