<template>
  <div class="container">
    <div class="left">
      <div class="overlay">
        <img src=".././assets/logo.png" />
      </div>
    </div>
    <div class="right">
      <h4>Crée un Compte</h4>
      <p>Veuillez assurer que vous avez payé vos abonnements.</p>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <!-- email -->
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

        <!-- Password -->
        <el-form-item label="Password" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <!-- button -->
        <el-form-item>
          <router-link to="/" tag="button">Login</router-link>
          <el-button
            plain
            type="primary"
            class="btn btn-primary btn-lg btn-block"
            @click="submitForm('ruleForm')"
            >Crée un Compte</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      }
      if (value !== 6) {
        callback(new Error("The password field must be at least 6 characters"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("rulesForm");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: "",
        pass: {
          required: true,
          min: 6,
          max: 10,
        },
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.userRegister();
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
    async userRegister() {
      const auth = getAuth();
      const userCredential = createUserWithEmailAndPassword(
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
  },
};
</script>

<style>
@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");

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
  color: #ffffff;
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
  border: 0;
  cursor: pointer;
  outline: 0;
  box-shadow: 0px 4px 20px 0px #a876eaa6;
  background-image: linear-gradient(135deg, #bba3ee 10%, #b681d4 100%);
}
</style>