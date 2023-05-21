import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

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


const dbClientes = collection(db, "usuarios");
const listaClientes = await getDocs(dbClientes);
const btSign = document.getElementById("buscar");

btSign.addEventListener("click", async (err) => {
  let campoBusca = document.getElementById("busca").value;
  let categoria = document.getElementById("campo").value;

  const listaBusca = query(dbClientes, where(categoria, "==", campoBusca));
  const lista = await getDocs(listaBusca);

  let tabela = "<table class='table'>" +
    "<thead>" +
    "<tr>" +
    "<th scope='col'>#</th>" +
    "<th scope='col'>Nome</th>" +
    "<th scope='col'>Cidade</th>" +
    "<th scope='col'>E-mail</th>" +
    "</tr>" +
    "</thead>" +
    "<tbody>";
  lista.forEach((lista) => {
    tabela += `<tr>
        <th scope='row'>${lista.id}</th>
        <td>${lista.data().nome}</td>
        <td>${lista.data().cidade}</td>
        <td>${lista.data().email}</td>
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
  "<th scope='col'>#</th>" +
  "<th scope='col'>Nome</th>" +
  "<th scope='col'>Cidade</th>" +
  "<th scope='col'>E-mail</th>" +
  "</tr>" +
  "</thead>" +
  "<tbody>";
listaClientes.forEach((lista) => {
  tabela += `<tr>
        <th scope='row'>${lista.id}</th>
        <td>${lista.data().nome}</td>
        <td>${lista.data().cidade}</td>
        <td>${lista.data().email}</td>
      </tr>`
})
tabela += "</tbody>"
"</table>"
document.getElementById("tabelaHtml").innerHTML = tabela
//#endregion

const btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", (error) => {
  window.location.href = "../telas/formCadastroCity.html";
})