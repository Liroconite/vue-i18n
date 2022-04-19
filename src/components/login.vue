<template>
    <div class="container">
    <div class="left">
		<div class="overlay">
      <img src=".././assets/logo.png">
		</div>
	</div>
    <div class="right">
        <h4>{{ msg }}</h4>
        <p>{{$t('LoginTxt')}}</p>
            <div class="inputs">
                <input type="email" placeholder="email"  required>
                <br>
                <input type="password" placeholder="password"  required>
            </div>
            <br>
            <a href="#" class="mdp-design">{{$t('mdpo')}}</a>
            <br><br>
            <button onclick ="function()"><a href="#">{{$t('compte')}}</a></button>
            <button onclick ="function()"><a href="#">{{$t('login')}}</a></button>
	</div>
    </div>
</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String
  }
}

</script>

<style scoped>

.container {
  margin: 0 auto;
  width: 80%;
  background: rgb(129, 121, 121);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex: 1 1 100%;
  align-items: center;
  justify-content: space-between;

}

.container div {
    height: auto;
}

.container .left {
  color: #FFFFFF;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
.container .left .overlay {
  padding: 30px;
  width: 100%;
  height: 50%;
  /* background: #5961f9ad;
  overflow: hidden;
  box-sizing: border-box; */
}

.container .right {
  padding: 50px;
  overflow: hidden;
  background-color: rgb(240, 240, 240);
}
@media (max-width: 980px) {
  .container .right {
    width: 100%;
  }
}
.container .right h5 {
  font-size: 6vmax;
  line-height: 0;
}
.container .right p {
  font-size: 14px;
  color: #B0B3B9;
}
.container .right .inputs {
  overflow: hidden;
}
.container .right input {
  width: 100%;
  padding: 10px;
  margin-top: 25px;
  font-size: 16px;
  border: 1px  solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  outline: none;
  border-bottom: 1px  solid rgba(0, 0, 0, 0.2);
}

.container .right .mdp-design {
    color: blue;
}

.container .right button {
  /* float: right; */
  color: #fff;
  font-size: 16px;
  padding: 12px 35px;
  border-radius: 50px;
  display: inline-block;
  border: 0;
  outline: 0;
  box-shadow: 0px 4px 20px 0px #a876eaa6;
  background-image: linear-gradient(135deg, #bba3ee 10%, #b681d4 100%);
}
</style>
