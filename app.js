// setting up firebase
const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyBMmfY9Eji3_CfiSVEUbPmt9l5y6p79ru0",
  authDomain: "signup-b41aa.firebaseapp.com",
  projectId: "signup-b41aa",
  storageBucket: "signup-b41aa.appspot.com",
  messagingSenderId: "843787263285",
  appId: "1:843787263285:web:599fe4f43757fe46c5407c"
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// signup function
const signUp = () => {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  console.log(firstname, lastname, email, password, dob);
  // firebase code
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    document.write("You are now signed in")
    console.log(result);
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}

// // login function
// const signIn = () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   // firebase code
//   firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((result) => {
//     // Logged in 
//     document.write("You are now Logged in")
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.code);
//     console.log(error.message);
//   });
// }

const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          document.write("You are Signed In")
          console.log(result)
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
      });
}