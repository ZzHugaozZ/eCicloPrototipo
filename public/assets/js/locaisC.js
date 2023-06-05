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


const dbClientes = collection(db, "enderecos");
const listaClientes = await getDocs(dbClientes);
const btSign = document.getElementById("buscar");

btSign.addEventListener("click", async (err) => {
  let campoBusca = document.getElementById("busca").value;
  let categoria = document.getElementById("campo").value;

  const listaBusca = query(dbClientes, where(categoria, "==", campoBusca));
  const lista = await getDocs(listaBusca);

//   let tabela = "<table class='table'>" +
//     "<thead>" +
//     "<tr>" +
//     "<th scope='col'>Cidade</th>" +
//     "<th scope='col'>Rua</th>" +
//     "<th scope='col'>Numero</th>" +
//     "<th scope='col'>Observação</th>" +
//     "</tr>" +
//     "</thead>" +
//     "<tbody>";
//   lista.forEach((lista) => {
//     tabela += `<tr>
//         <td>${lista.data().cidade}</td>
//         <td>${lista.data().rua}</td>
//         <td>${lista.data().numero}</td>
//         <td>${lista.data().observacao}</td>
//       </tr>`
//   })
//   tabela += "</tbody>"
//   "</table>"
  let accordeon=`<div class="accordion accordion-flush" id="accordionFlushExample">`
  lista.forEach((itens) =>{
    accordeon+=  `<div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        ${itens.data().cidade}
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">${itens.data().rua}${itens.data().numero}${itens.data().observacao}</div></div>
    </div>
</div>`
  })
//   document.getElementById("tabelaHtml").innerHTML = tabela
  document.getElementById("accordenCidade").innerHTML = accordeon
});

//#region tabela
// let tabela = "<table class='table'>" +
//   "<thead>" +
//   "<tr>" +
//   "<th scope='col'>Cidade</th>" +
//   "<th scope='col'>Rua</th>" +
//   "<th scope='col'>Numero</th>" +
//   "<th scope='col'>Observação</th>" +
//   "</tr>" +
//   "</thead>" +
//   "<tbody>";
// listaClientes.forEach((lista) => {
//   tabela += `<tr>
//         <td>${lista.data().cidade}</td>
//         <td>${lista.data().rua}</td>
//         <td>${lista.data().numero}</td>
//         <td>${lista.data().observacao}</td>
        
//       </tr>`
// })
// tabela += "</tbody>"
// "</table>"
// document.getElementById("tabelaHtml").innerHTML = tabela

//#endregion






























// function popularCategoria()
// {
//     let divMenu = document.getElementById('menu');

//     for (let idx = 0; idx < cidades.length; idx++) 
//     {
//         let a = document.createElement('a');
//         a.id ='link' + cidades[idx].id ;
//         a.className = 'flex-menu-link';
//         a.innerText = cidades[idx].descricao;

//         a.addEventListener('click', () => exibirEndereco(cidades[idx].id));
//         divMenu.appendChild(a);
//     }
//     if(cidades.length > 0)
//     {
//         exibirEndereco(cidades[0].id);
//     }             
// }

// function exibirEndereco(cidadeId) 
// { 
//     let cidadeSelecionada = document.getElementsByClassName('selecionado');
//     if (cidadeSelecionada.length > 0) 
//     {
//         cidadeSelecionada[0].className = 'flex-menu-link';
//     }


//     let novaCidadeSelecionada = document.getElementById('link' + cidadeId);
//     novaCidadeSelecionada.className  += ' selecionado';

//     let locais = endereco.filter(local =>{
//         return local.cidadeId == cidadeId;
//     });

//     let divEndereco = document.getElementById('catalogo');
//     divEndereco.innerHTML = '';

//     locais.forEach(local=> {

//         let divCard = document.createElement('div');
//         divCard.className = 'flex-catalogo-card';
        

//         let h4NomeLocalC = document.createElement('h4');
//         h4NomeLocalC.innerText = local.descricao; + '<br/>';
//         h4NomeLocalC.className = 'nome-localC';
//         h4NomeLocalC.title = local.descricao;

//         let h4Numero = document.createElement('h4');
//         h4Numero.innerText = local.numero;

//         let rua = document.createElement('h4');
//         rua.innerText= local.rua;


//         divCard.appendChild(h4NomeLocalC);
//         divCard.appendChild(rua);
//         divCard.appendChild(h4Numero);
        
//         divEndereco.appendChild(divCard);

//     });

// }

// function inicializar(){
//     popularCategoria();
// }

// inicializar();


// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (!user) {
//     window.location.href = "../telas/index.html";
//   }
// });
