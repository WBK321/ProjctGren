<script>
import axios from 'axios';
axios.defaults.baseURL = `http://localhost:3005`;

export default {
	data() {
		return {
			maps:[],
		};
	},
  mounted() {
		this.card();
  },
  methods: {
  async card(){
    let response = await axios.get(`/card`);
    this.maps = response.data
    }
  },
  
}

</script>

<template>
  <div class="bloc_flex" id="Products">
    <div class="bloc_in_bloc">
      <div class="bloc_text_main">
        <h1 id="text_main">Best Sekling Plants</h1>
      </div>
      <div class="bloc_text_pob">
        <p class="text_pob">
          Easist way to healthy life by buying your favorite plants
        </p>
      </div>
    </div>

    <div class="Bloc_img_card">
      <div class="bloc_in_bloc" v-for="(card,index) in maps">
        <div class="bloc_img_main">
          <img :src="'src/assets/'+ card.image + '.png' "  title="" alt="" id="img_main" />
        </div>
        <div class="bloc_text_img">
          <p class="text_img">{{ card.title }}</p>
        </div>
        <div class="bloc_number">
          <p class="Number">$ {{ card.gold }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="raz"></div>
</template>
 
<style scoped>
.raz {
  margin: 120px;
}

.bloc_flex {
  display: flex;
}

.Bloc_img_card {
  display: flex;
  margin: 0px 0px 0px 75px;
}

.bloc_in_bloc {
  display: block;
  margin: 20px 75px 0px 35px;
}

.bloc_text_main {
  width: 350px;
  height: 100px;
}

#text_main {
  font-weight: 650;
  font-size: 46px;
}

.bloc_text_pob {
  margin: 15px 0px;
  width: 255px;
}

.text_pob {
  font-size: 23px;
}

.bloc_text_img {
  margin: 10px 0px;
}

.text_img {
  font-weight: 600;
  font-size: 23px;
  margin: 0px;
}

/* .bloc_number{
  
} */

.Number {
  font-size: 18px;
  color: rgb(144, 138, 138);
}

img {
  height: 436px;
  width: 300px;
  border-radius: 15px;
}
</style>