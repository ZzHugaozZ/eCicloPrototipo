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
const auth = getAuth(app);
const db = getFirestore(app);
//#endregion

const btConfirmar = document.getElementById("btConfirmar");
const btVoltar = document.getElementById("btVoltar");


btConfirmar.addEventListener("click", async (error) => {
    debugger;
    var cadastro = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        celular: document.getElementById("celular").value,
        senha: document.getElementById("senha").value,
        tipoDeUsuario: "comum"
    }
    createUserWithEmailAndPassword(auth, cadastro.email, cadastro.senha)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user)
            try {
                const usuarios = await addDoc(collection(db, "usuarios"), cadastro);
                console.log("Coleção ID: ", usuarios.id);
            } catch (e) {
                console.error("Erro de comunicação: ", e);
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Deu ruim!")
        });
})

btVoltar.addEventListener("click", (err) => {
    window.location.href = "../telas/index.html";
})

