<template>
  <div class="container">
    <div class="left">
      <div class="overlay">
        <img src=".././assets/logo.png" />
      </div>
    </div>
    <div class="right">
      <h4>{{ $t("titre") }}</h4>
      <p>{{ $t("LoginTxt") }}</p>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          label-width="120px"
          class="demo-dynamic"
        >
          <el-form-item
            prop="email"
            label="Email"
            :rules="[
              {
                required: true,
                message: 'Please input email address',
                trigger: 'blur',
              },
              {
                type: 'email',
                message: 'Please input correct email address',
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
        </el-form>
        <el-form-item label="password" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">
            {{ $t("log") }}
          </el-button>
          <router-link to="/register" tag="button">
            {{ $t("compte") }}
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginPage",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Veuillez entrer le mot de passe"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: "",
        pass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.userer();
          this.$notify({
            title: "Success",
            message: "This is a success message",
            type: "success",
          });
        } else {
          this.$notify.error({
            title: "Error",
            message: "This is an error message",
          });
          return false;
        }
      });
    },
  },
  async userer() {
    const auth = getAuth();
    const userCredential = signInWithEmailAndPassword(
      auth,
      this.ruleForm.email,
      this.ruleForm.pass
    );
    const user = userCredential.user;

    try {
      nonExistentFunction();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  },
};
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
  padding: 50px;
  color: #ffffff;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
.container .left .overlay {
  padding: 30px;
  width: 100%;
  height: 50%;
}

.container .right {
  padding: 50px;
  overflow: hidden;
  background-color: rgb(240, 240, 240);
  display: block;
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
  color: #b0b3b9;
}
.container .right .inputs {
  overflow: hidden;
}
.container .right input {
  width: 100%;
  padding: 10px;
  margin-top: 25px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.container .right .mdp-design {
  color: blue;
}

.container .right button {
  color: #fff;
  font-size: 16px;
  padding: 12px 35px;
  border-radius: 50px;
  display: inline-block;
  margin-right: 50px;
  cursor: pointer;
  border: 0;
  outline: 0;
  box-shadow: 0px 4px 20px 0px #a876eaa6;
  background-image: linear-gradient(135deg, #bba3ee 10%, #b681d4 100%);
}
</style>

 