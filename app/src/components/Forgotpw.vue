<template>
<div>
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">

 <div class="login-form">
   <div v-if="error" class="alert alert-danger">{{error}}</div>
    <form action="#" @submit.prevent="passwordReset">
        <h2 class="text-center">Password Reset</h2>
        <div class="form-group">
        	<div class="input-group">                
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <span class="fa fa-user"></span>
                    </span>                    
                </div>
                <input  
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Email"
                    value
                    required
                    autofocus
                    v-model="user.email">
            </div>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-dark btn-block login-btn">Reset</button>
        </div>
        
    </form>
    <div class="hint-text">Don't have an account? <a href="Register" class="text-dark">Register Now!</a></div>
</div>
</div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {   
        email: ''
      }
    };
  },
  methods: {
    passwordReset() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('Please check your registered email to reset the password')
            this.user = {   
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
};
</script>

<style scoped>


.login-form {
    width: 340px;
    margin: 30px auto;
  	font-size: 15px;
    padding-top: 100px;
}
.login-form form {
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
}
.login-form h2 {
    margin: 0 0 15px;
}
.login-form .hint-text {
    color: #777;
    padding-bottom: 15px;
    text-align: center;
  	font-size: 13px; 
}
.form-control, .btn {
    min-height: 38px;
    border-radius: 2px;
}
.login-btn {        
    font-size: 15px;
    font-weight: bold;
}
.or-seperator {
    margin: 20px 0 10px;
    text-align: center;
    border-top: 1px solid #ccc;
}
.or-seperator i {
    padding: 0 10px;
    background: #f7f7f7;
    position: relative;
    top: -11px;
    z-index: 1;
}
.social-btn .btn {
    margin: 10px 0;
    font-size: 15px;
    text-align: left; 
    line-height: 24px;       
}
.social-btn .btn i {
    float: left;
    margin: 4px 15px  0 5px;
    min-width: 15px;
}
.input-group-addon .fa{
    font-size: 18px;
}
</style>