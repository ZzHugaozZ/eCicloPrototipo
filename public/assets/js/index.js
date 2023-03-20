import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {  sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// var admin = require("https://www.gstatic.com/firebasejs/9.15.0/firebase-admin.js");

// var serviceAccount = require("./serviceAccount.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

//#region Configuração do App Key
const firebaseConfig = {
  apiKey: "AIzaSyAhXGsmHm-6UshQtlwogiQTDhmZHAwWDUs",
  authDomain: "eciclo-prod.firebaseapp.com",
  projectId: "eciclo-prod",
  storageBucket: "eciclo-prod.appspot.com",
  messagingSenderId: "79000886048",
  appId: "1:79000886048:web:393eeb67fcb4e92bb75545",
  measurementId: "G-078JQKC7V1"
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
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("Ambiente Logado no Firebase")
    window.location.href = "../telas/tInicial.html"
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
//#endregion

//#region Redefinição de senha
function recoverPassword(){
  var email = "";
    email = document.getElementById("email").value;
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Email de redefinição de senha enviado!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}
const btnRSenha = document.getElementById("btnRSenha");

btnRSenha.addEventListener("click", (error) => {
  recoverPassword();
 })
//#endregion

//#region singOut

// function desconectar(){
//   const auth = getAuth();
// signOut(auth).then(() => {
// alert('desconetado com sucesso');
// }).catch((error) => {
//   alert('algo de errado não está certo');
// });
// }
// const sair = document.getElementById("sair");

// sair.addEventListener("click", (error) => {
//   desconectar();
// })
//#endregion