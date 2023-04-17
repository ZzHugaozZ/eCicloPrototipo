import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

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
//#endregion

findTransactions();

function findTransactions(){
    setTimeout(() => {
        addTransactonsToScreen(fakeTransactions);
    }, 1000)
}

function addTransactonsToScreen(transactions){
    const orderedList = document.getElementById('transactions')

    transactions.forEach(transactions => {
        const li = document.createElement('li');
        li.classList.add(transactions.type);
        
        const date = document.createElement('p');
        date.innerHTML = formatDate(transactions.date);
        li.appendChild(date);

        const money = document.createElement('p');
        money.innerHTML = formatMoney(transactions.money);
        li.appendChild(money);

        const type = document.createElement('p');
        type.innerHTML = transactions.transactionType;
        li.appendChild(type);

        if (transactions.description) {
            const description = document.createElement('p');
            description.innerHTML = transactions.description;
            li.appendChild(description);
        }

        orderedList.appendChild(li);
    });

}

function formatDate(date){
    return new Date(date).toLocaleDateString('pt-br');
}
function formatMoney(money){
    return `${money.currency} ${money.value.toFixed(2)}`
}

//#region fakeTransactions
const fakeTransactions =[{
    type: 'expense',
    date: '2001-01-01',
    money: {
        currency: 'R$',
        value: 10
    },
    transactionType: 'Supermercado'
}, {
        type: 'income',
        date: '2001-01-02',
        money: {
            currency: 'R$',
            value: 2000
        },
        transactionType: 'Salario',
        description: 'Empresa A'
    }, {
        type: 'expense',
        date: '2001-01-03',
        money: {
            currency: 'R$',
            value: 30
        },
        transactionType: 'mecanico'
    }, {
        type: 'expense',
        date: '2001-01-04',
        money: {
            currency: 'R$',
            value: 40
        },
        transactionType: 'transporte',
        description: 'onibus ida e volta'
}]
//#endregion