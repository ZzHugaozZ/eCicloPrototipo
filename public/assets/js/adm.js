import cidades from '../dados/cidades.json' assert {type:'json'};

let botaoConfirmar = document.getElementById('botaoConfirma');
botaoConfirmar.addEventListener('click', () => Confirmar());

function Confirmar(){
    let inputIdcidade = document.getElementById('idCidade').value;
    let inputCidade = document.getElementById('cidade').value;

    let objCategoria = {
        id: inputIdcidade,
        descricao: inputCidade
    }

    cidades.push(objCategoria);
    console.log(objCategoria);
}

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../telas/index.html";
  }
});