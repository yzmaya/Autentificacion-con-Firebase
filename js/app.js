
(function () {


//Inicializar Firebase
  const config = {
	    apiKey: "AIzaSyBOylNl-Ka7T5yo5EWl2KMaIqXu4cuj4fg",
    authDomain: "vue-test-e6acb.firebaseapp.com",
    databaseURL: "https://vue-test-e6acb.firebaseio.com",
    projectId: "vue-test-e6acb",
    storageBucket: "vue-test-e6acb.appspot.com",
    messagingSenderId: "920258140742"
  };
  firebase.initializeApp(config);

  // Obtener elementos
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');

  const error = document.getElementById('demo');

  // Añadir Evento login
  btnLogin.addEventListener('click', e => {
    //Obtener email y pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message)); 
    promise.catch(e => error.innerHTML = e.message); 
     
  });

  // Añadir evento signup
  btnSignUp.addEventListener('click', e => {
    // Obtener email y pass
    // TODO: comprobar que el email sea real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    promise.catch(e => error.innerHTML = e.message); 
  });

  
  // Añadir un listener en tiempo real
   firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      console.log(firebaseUser.emailVerified);

//var contador = 0;
setInterval(function(){
 if(firebaseUser.emailVerified == true){
      alert("accediste a hgome html");
      window.location.href = "home.html";



    }else{

       firebaseUser.sendEmailVerification().then(function() {
          // Email sent.
          alert('se ha enviado una confirmación a tu correo electrónico');
        }).catch(function(error) {
          // An error happened.
        });
    };
}, 2000);

   

       
        
    } else {
      console.log('no logueado');
    }    
  });
} ());