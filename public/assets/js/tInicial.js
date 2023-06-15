import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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

const alertadeslogado = document.getElementById('deslogado')
const deslogado = new bootstrap.Toast(alertadeslogado);


//#region singOut
function desconectar(){
const auth = getAuth();
signOut(auth).then(() => {
  setTimeout(() => {
    deslogado.show(window.location.href = "../index.html")
  }, 1300);
  // window.location.href = "../telas/index.html"
}).catch((erro) => {
    alert('algo de errado não está certo');
});
}
const sair = document.getElementById("sair");

sair.addEventListener("click", (error) => {
    desconectar();
})

//#endregion

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../index.html";
  }
});