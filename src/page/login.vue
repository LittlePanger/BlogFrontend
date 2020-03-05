<template>
  <div class="login-bg">
    <img src="../../static/img/city.jpg" alt="" class="login-bg-img">
    <div class="login-wrapper">
      <div class="login-title">
        <router-link to="/"><img src="../assets/catLogoBig.png" alt="" style="height: 80px"></router-link>
      </div>
      <div class="login-form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm" inline="true"
                 label-position="left">
          <el-form-item label="Username or Email Address" prop="username">
            <el-input v-model="ruleForm.username" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="ruleForm.password" style="width: 250px" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Remember Me" label-width="150px" prop="remember" class="login-remember">
            <el-switch v-model="ruleForm.remember" style="margin-left: 10px"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" class="login-button">Log In</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        ruleForm: {
          username: '',
          password: '',
          remember: false,
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
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
      }
    }
  }
</script>

<style scoped>
  .login-bg {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }

  .login-bg-img {
    display: block;
    /*opacity: 0.1;*/
    width: 100%;
    height: 100%;
  }

  .login-wrapper {
    background: rgba(255, 255, 255, .80);
    /*padding: 20px 0;*/
    width: 350px;
    height: 522px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .login-title {
    margin-top: 10px;
  }

  .login-remember {
    width: 100%;
    margin-left: -5px;
  }

  .el-form--inline .el-form-item {
    margin-right: 0;
  }

  .login-button {
    background-color: #ff5656;
    border-color: #ff5656;
    border-radius: 65px;
    width: 250px;
  }

</style>
