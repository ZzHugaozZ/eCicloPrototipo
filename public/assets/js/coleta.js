import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
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

const btConfirmar = document.getElementById("btConfirmar");

btConfirmar.addEventListener("click", async (error) => {
  debugger;
  var solicitacao = {
    marca: document.getElementById("marca").value,
    modelo: document.getElementById("modelo").value,
    tempoDeUso: document.getElementById("tUso").value,
    pProblemas: document.getElementById("pProblemas").value
  }
  try {
    const addSolicitacao = await addDoc(collection(db, "solicitacoes"), solicitacao);
    console.log("Coleção ID: ", addSolicitacao.id);
  }
  catch (e) {
    console.error("Erro de comunicação: ", e);
  }

})
const btVoltar = document.getElementById("btVoltar")

btVoltar.addEventListener("click", (err) => {
  window.location.href = "../telas/tInicial.html";
})
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../index.html";
  }
});