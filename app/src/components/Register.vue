<template>
<div>
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">

 <div class="login-form">
   <div v-if="error" class="alert alert-danger">{{error}}</div>
    <form action="#" @submit.prevent="submit">
        <h2 class="text-center">Register</h2>
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
                    v-model="form.email">
            </div>
        </div>
		<div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <i class="fa fa-lock"></i>
                    </span>                    
                </div>
                <input 
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    required
                    v-model="form.password">
            </div>
        </div>        
        <div class="form-group">
            <button type="submit" class="btn btn-dark btn-block login-btn">Register</button>
        </div> 
        	<div class="or-seperator"><i>or</i></div>
                <div class="text-center social-btn">
            <!-- <button @click="submitFacebook" class="btn btn-primary btn-block"><i class="fab fa-facebook"></i> Sign in with <b>Facebook</b></button> -->
			      <button @click="submitGoogle" class="btn btn-danger btn-block"><i class="fab fa-google"></i> Sign in with <b>Google</b></button>
        </div>
    </form>
    <div class="hint-text">Already have an account? <a href="Signin" class="text-dark">Sign in now!</a></div>
</div>
</div>
</template>



<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
            window.location.href = "/"
        })
        .catch(err => {
          this.error = err.message;
        });
    },
      submitGoogle(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      window.location.href = "/"
      // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    },
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