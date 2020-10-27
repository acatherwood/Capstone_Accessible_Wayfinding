<template>
    <div class="login">
        Login
    <section id="firebaseui-auth-container"></section>
    </div>
</template>

<script>

import firebase from 'firebase';
import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

export default {

    
    
mounted() {
    
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        var uiConfig = {
            signInSuccessUrl: "/Profile",
            signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID]
        };
        ui.start("#firebaseui-auth-container", uiConfig);
    }


}
</script>

