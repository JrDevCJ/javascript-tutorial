function formatToDateString(date){
    return (
     [padToDigits(date.getDate()),
        padToDigits(date.getMonth()),
        date.getFullYear()
     ].join('-') + ' ' +
     [padToDigits(date.getHours()),
    padToDigits(date.getMinutes()),
    padToDigits(date.getSeconds())
     ].join(':')
    )
}

function padToDigits(num){
    return num.toString()
    .padStart(2,'0');
}

console.log(
    formatToDateString(new Date())
)


