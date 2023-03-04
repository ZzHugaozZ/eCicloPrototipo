import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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
const db = getFirestore(app);
const auth = getAuth(app);
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
        celular: document.getElementById("celular").value,
        endereco: document.getElementById("endereco").value,
        numero: document.getElementById("numero").value,
        genero: document.getElementById("genero").value
    }
    if (!cadastro.nome || !cadastro.email || !cadastro.celular || !cadastro.endereco || !cadastro.numero || !cadastro.genero) {
        console.error("Erro de comunicação: ", e);
    } else {
        try {
            const usuarios = await addDoc(collection(db, "usuarios"), cadastro);
            debugger;
            console.log("Coleção ID: ", usuarios.id);
            window.location.href = "../login/login.html";
        } catch (e) {
            console.error("Erro de comunicação: ", e);
        }
    }

})
btVoltar.addEventListener("click", (err) => {
    window.location.href = "../index.html";
})
