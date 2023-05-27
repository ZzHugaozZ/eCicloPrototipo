import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

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

const btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", async (error) => {
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


btnAdicionar.addEventListener("click", (error) => {
  window.location.href = "../telas/formCadastroCity.html";
})

btVoltar.addEventListener("click", (error) => {
  window.location.href = "../telas/cidades.html";
})

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../telas/index.html";
  }
});