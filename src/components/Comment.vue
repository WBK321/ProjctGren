<script>
</script>

<template>
  <div class="Bloc_com">
    <h1 class="bloc_text">What Customers say about GREEMIND?</h1>
  </div>
  <div class="bloc_infa">
    <div class="bloc_information">
      <p class="Text_comment">
        Jorem ipsum dolor sit amer,consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum,ac aliquet odio mattis.Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <div class="bloc_img">
        <img
          class="img_Youtuber"
          src="../assets/Youtuber.png"
          title="Ютубер"
          alt="Ютубер"
        />
        <div class="bloc_text_pob">
          <p id="text_img_coment">Johm Doe</p>
          <p id="text_img_pob">Youtuber</p>
        </div>

        <div class="bloc_zest">
          <img
            class="img_zest"
            src="../assets/Zvezda.png"
            title="Оценка"
            alt="Оценка"
          />
          <div class="bloc_number">
            <p class="Number">4.5</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="raz"></div>
</template>
 
<style scoped>
.Bloc_com {
  margin: 50px 0px 0px 30px;
  width: 700px;
}

.raz {
  margin: 80px 0px 0px 0px;
}

.bloc_text {
  font-weight: 700;
  color: rgb(26, 26, 26);
}

.bloc_infa {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bloc_information {
  margin: 20px 0px;
  width: 1750px;
  height: 730px;
  background-color: #c1dcdc;
  border-radius: 25px;
}

.Text_comment {
  margin: 50px;
  font-size: 35px;
  width: 1400px;
  font-weight: 600;
}

.bloc_img {
  display: flex;
  margin: 123px 30px 30px 30px;
}

.bloc_text_pob {
  display: block;
  margin: 110px 0px 0px 0px;
}

.img_Youtuber {
  width: 350px;
  height: 400px;
}

#text_img_coment {
  font-size: 28px;
  font-weight: 700;
  width: 200px;
  margin: 0px 0px 10px 0px;
}

#text_img_pob {
  font-size: 18px;
  color: (99, 98, 98);
}

.bloc_zest {
  display: flex;
  padding: 110px 0px 0px 1000px;
}

.bloc_number {
  padding: 0px 100px 0px 0px;
}

.img_zest {
  width: 35px;
  height: 35px;
}

.Number {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 0px 10px;
}
</style>