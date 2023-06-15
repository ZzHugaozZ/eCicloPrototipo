import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, addDoc, getDocs, collection, doc, setDoc, query, where, getDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

const alertaSucesso = document.getElementById('avisoSucesso')
const alertaErro = document.getElementById('avisoErro')
const alertRSenha = document.getElementById('avisoRSenha')
const sucesso = new bootstrap.Toast(alertaSucesso);
const erro= new bootstrap.Toast(alertaErro);
const RSenha= new bootstrap.Toast(alertRSenha);

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
const db = getFirestore(app);
const dbUsuarios = collection(db, "usuarios");


const btSign = document.getElementById("btSign");
var email = "";
var password = "";
btSign.addEventListener("click", async (err) => {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      console.log(userCredential.user.email);
      const q = query(collection(db, "usuarios"), where("email", "==", userCredential.user.email));
      var credencial = false;
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        if (doc.data().tipoDeUsuario == "administrador") {
          credencial = true;
        }
      });
      sucesso.show()
      setTimeout(() => {
        if (credencial) {
          window.location.href = "../telas/tAdm.html"
        } else {
          window.location.href = "../telas/tInicial.html"
        }
      }, 1300);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      erro.show()
    });
});
btVoltar.addEventListener("click", (err) => {
  window.location.href = "../index.html";
})
//#endregion

//#region Redefinição de senha
function recoverPassword() {
  var email = "";
  email = document.getElementById("email").value;
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      RSenha.show();
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


onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../index.html";
  }
})