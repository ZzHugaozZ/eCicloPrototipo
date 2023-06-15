import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
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
const db = getFirestore(app);
//#endregion


const dbClientes = collection(db, "enderecos");
const listaClientes = await getDocs(dbClientes);
const btSign = document.getElementById("buscar");
const btVoltar = document.getElementById("btVoltar");

btSign.addEventListener("click", async (err) => {
  let campoBusca = document.getElementById("busca").value;

  const listaBusca = query(dbClientes, where("cidade", "==", campoBusca));
  const lista = await getDocs(listaBusca);

  let tabela = "<table class='table'>" +
  "<thead>" +
  "<tr>" +
  "<th scope='col'>Cidade</th>" +
  "<th scope='col'>Rua</th>" +
  "<th scope='col'>Numero</th>" +
  "<th scope='col'>Observação</th>" +
  "</tr>" +
  "</thead>" +
  "<tbody>";
  lista.forEach((lista) => {
    tabela += `<tr>
    <td>${lista.data().cidade}</td>
        <td>${lista.data().rua}</td>
        <td>${lista.data().numero}</td>
        <td>${lista.data().observacao}</td>
      </tr>`
  })
  tabela += "</tbody>"
  "</table>"
  document.getElementById("tabelaHtml").innerHTML = tabela
});

//#region tabela
let tabela = "<table class='table'>" +
  "<thead>" +
  "<tr>" +
  "<th scope='col'>Cidade</th>" +
  "<th scope='col'>Rua</th>" +
  "<th scope='col'>Numero</th>" +
  "<th scope='col'>Observação</th>" +
  "</tr>" +
  "</thead>" +
  "<tbody>";
listaClientes.forEach((lista) => {
  tabela += `<tr>
        <td>${lista.data().cidade}</td>
        <td>${lista.data().rua}</td>
        <td>${lista.data().numero}</td>
        <td>${lista.data().observacao}</td>
        
      </tr>`
})
tabela += "</tbody>"
"</table>"
document.getElementById("tabelaHtml").innerHTML = tabela
//#endregion

btnAdicionar.addEventListener("click", (error) => {
  window.location.href = "../telas/formCadEndereco.html";
})

//#region singOut
function desconectar(){
  const auth = getAuth();
  signOut(auth).then(() => {
    window.location.href = "../index.html"
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
})
