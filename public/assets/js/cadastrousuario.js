import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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
const auth = getAuth(app);
const db = getFirestore(app);
const btConfirmar = document.getElementById("btConfirmar");
const btVoltar = document.getElementById("btVoltar");

btConfirmar.addEventListener("click", async (erro) => {
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    createUserWithEmailAndPassword(auth, email, senha)

        .then((userCredential) => {

            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Deu ruim!")
        });
})

btConfirmar.addEventListener("click", async (erro) => {
    var cadastro = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        celular: document.getElementById("celular").value
    }
    if (!cadastro.nome || !cadastro.email || !cadastro.celular) {
        console.error("Erro de comunicação: ", e);
    } else {
        try {
            const usuarios = await addDoc(collection(db, "usuarios"), cadastro);
            console.log("Coleção ID: ", usuarios.id);
            window.location.href = "..\telas\tInicial.html";
        } catch (e) {
            console.error("Erro de comunicação: ", e);
        }
    }

})

btVoltar.addEventListener("click", (err) => {
    window.location.href = "../telas/index.html";
})
