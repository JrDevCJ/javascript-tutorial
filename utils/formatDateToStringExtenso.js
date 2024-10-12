const formatDate = (date) =>{
const monthNames = [
    "Janeiro", "Fevereiro", "Março",
    "Abril", "Maio", "Junho", "Julho",
    "Agosto", "Setembro", "Outubro",
    "Novembro", "Dezembro"
];

let day = date.getDate();
let monthIndex = date.getMonth();
let year = date.getFullYear();

return `${day} de ${monthNames[monthIndex]} de ${year}`;
}

const dataPorExtenso = formatDate(
    new Date()
);
console.log(dataPorExtenso);