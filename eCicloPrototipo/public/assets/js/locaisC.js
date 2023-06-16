import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
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

//#region tabela
const dbEnderecos = collection(db, "enderecos");
const listaEnderecos = await getDocs(dbEnderecos);
const btSign = document.getElementById("buscar");

btSign.addEventListener("click", async (err) => {
  let campoBusca = document.getElementById("busca").value;

  const listaBusca = query(dbEnderecos, where("cidade", "==", campoBusca));
  const lista = await getDocs(listaBusca);
  let tabela = "<table>" +
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
    tabela += `<tr class="tabelaHtmlItem">
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

let tabela = "<table>" +
  "<thead>" +
  "<tr>" +
  "<th scope='col'>Cidade</th>" +
  "<th scope='col'>Rua</th>" +
  "<th scope='col'>Numero</th>" +
  "<th scope='col'>Observação</th>" +
  "</tr>" +
  "</thead>" +
  "<tbody>";
listaEnderecos.forEach((lista) => {
  tabela += `<tr class="tabelaHtmlItem">
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

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../index.html";
  }
})