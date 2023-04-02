import cidades from '../dados/cidades.json' assert {type:'json'};
import endereco from '../dados/endereco.json' assert {type:'json'};


function popularCategoria()
{
    let divMenu = document.getElementById('menu');

    for (let idx = 0; idx < cidades.length; idx++) 
    {
        let a = document.createElement('a');
        a.id ='link' + cidades[idx].id ;
        a.className = 'flex-menu-link';
        a.innerText = cidades[idx].descricao;

        a.addEventListener('click', () => exibirEndereco(cidades[idx].id));
        divMenu.appendChild(a);
    }
    if(cidades.length > 0)
    {
        exibirEndereco(cidades[0].id);
    }             
}

function exibirEndereco(cidadeId) 
{ 
    let cidadeSelecionada = document.getElementsByClassName('selecionado');
    if (cidadeSelecionada.length > 0) 
    {
        cidadeSelecionada[0].className = 'flex-menu-link';
    }


    let novaCidadeSelecionada = document.getElementById('link' + cidadeId);
    novaCidadeSelecionada.className  += ' selecionado';

    let locais = endereco.filter(local =>{
        return local.cidadeId == cidadeId;
    });

    let divEndereco = document.getElementById('catalogo');
    divEndereco.innerHTML = '';

    locais.forEach(local=> {

        let divCard = document.createElement('div');
        divCard.className = 'flex-catalogo-card';
        

        let h4NomeLocalC = document.createElement('h4');
        h4NomeLocalC.innerText = local.descricao; + '<br/>';
        h4NomeLocalC.className = 'nome-localC';
        h4NomeLocalC.title = local.descricao;

        let h4Numero = document.createElement('h4');
        h4Numero.innerText = local.numero;

        let rua = document.createElement('h4');
        rua.innerText= local.rua;


        divCard.appendChild(h4NomeLocalC);
        divCard.appendChild(rua);
        divCard.appendChild(h4Numero);
        
        divEndereco.appendChild(divCard);

    });

}

function inicializar(){
    popularCategoria();
}

inicializar();



