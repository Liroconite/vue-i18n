<template>
  <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
    <el-form-item
      prop="email"
      label="Email"
      :rules="[
        { required: true, message: 'Veuillez entrer l\'adresse e-mail', trigger: 'blur' },
        { type: 'email', message: 'Veuillez entrer une adresse e-mail valide', trigger: ['blur', 'change'] }
      ]"
    >
  <el-input v-model="dynamicValidateForm.email"></el-input>
    </el-form-item>
      <el-form :model="dynamicValidateForm" status-icon :rules="rules" ref="dynamicValidateForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Password" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
    <el-form-item>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')">Soumettre</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">Réinitialiser</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'ComptePage',
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1);
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: ''
        });
      }
    }
  }
</script>

<style>
@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");
</style>