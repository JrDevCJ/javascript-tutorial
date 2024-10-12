	
// Converte unix_timestamp em 
// string date "DD-MM-YYYY HH:MM:SS"
function formatToDateString(unix_timestamp) {

          const date = new Date(unix_timestamp * 1000);
          
          return (
          [
              padTo2Digits(date.getDate()),
              padTo2Digits(date.getMonth() + 1),
              date.getFullYear(),
          ].join('-') + ' ' +
          [
              padTo2Digits(date.getHours()),
              padTo2Digits(date.getMinutes()),
              padTo2Digits(date.getSeconds()),
          ].join(':')
          );
}
      
// função usada para adicionar adicionar 0 
// a frente de números com apenas 1 casa decimal
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}	

console.log(formatToDateString(1664913450));