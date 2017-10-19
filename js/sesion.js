(function() {

//Inicializar Firebase
  var config = {
   apiKey: "AIzaSyBOylNl-Ka7T5yo5EWl2KMaIqXu4cuj4fg",
    authDomain: "vue-test-e6acb.firebaseapp.com",
    databaseURL: "https://vue-test-e6acb.firebaseio.com",
    projectId: "vue-test-e6acb",
    storageBucket: "vue-test-e6acb.appspot.com",
    messagingSenderId: "920258140742"
  };
  firebase.initializeApp(config);

  // Obtener elementos
  
  const btnLogout = document.getElementById('btnLogout');

  // Añadir Evento login
  //btnLogin.addEventListener('click', e => {
    //Obtener email y pass
    //const email = txtEmail.value;
    //const pass = txtPassword.value;
    //const auth = firebase.auth();
    // Sign in
    //const promise = auth.signInWithEmailAndPassword(email, pass);
    //promise.catch(e => console.log(e.message));   
  //});

  // Añadir evento signup


  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // Añadir un listener en tiempo real
   firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      
    } else {
      console.log('no logueado');
      window.location.href = 'index.html';
    }    
  });
}());