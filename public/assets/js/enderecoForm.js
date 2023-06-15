import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAuth,  onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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
const db = getFirestore(app);
//#endregion

const confirma = document.getElementById("btConfirma");

confirma.addEventListener("click", async (error) => {
    debugger;
    var adicionar = {
        rua: document.getElementById("rua").value,
        numero: document.getElementById("numero").value,
        cidade: document.getElementById("cidade").value,
        observacao: document.getElementById("observacao").value,
    }

    try {
        const enderecos = await addDoc(collection(db, "enderecos"), adicionar);
        console.log("Coleção ID: ", enderecos.id);
    } catch (e) {
        console.error("Erro de comunicação: ", e);
    }

})

const btnVoltar = document.getElementById("btVoltar");

btnVoltar.addEventListener("click", async (error) => {
    window.location.href = "./tAdm.html";
})

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../index.html";
  }
})
