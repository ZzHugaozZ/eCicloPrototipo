import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

var admin = require("https://www.gstatic.com/firebasejs/9.15.0/firebase-admin.js");

var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//#region Configuração do App Key
const firebaseConfig = {
  apiKey: "AIzaSyCIewhvwhvbabisNkBjYWHtSgRnZh49aog",
  authDomain: "ecicloo.firebaseapp.com",
  projectId: "ecicloo",
  storageBucket: "ecicloo.appspot.com",
  messagingSenderId: "621707276043",
  appId: "1:621707276043:web:d18d697c865bff8b187c0e"
};
const app = initializeApp(firebaseConfig);
//#endregion

//#region Area de Login Firebase
const auth = getAuth(app);

const btSign = document.getElementById("btSign");
var email = "";
var password = "";
btSign.addEventListener("click", async(err) => {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  console.log(email + "|" + password);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("Ambiente Logado no Firebase")
    window.location.href = "../tInicial.html"
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + " | " + "Deu Rum não existe no Firebase.")
  });
});
btVoltar.addEventListener("click", (err) => {
  window.location.href = "../telas/index.html";
})

