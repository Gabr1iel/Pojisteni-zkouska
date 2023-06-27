
const recordsFromStorage = localStorage.getItem("records");
let records = recordsFromStorage ? JSON.parse(recordsFromStorage) : [];

let recordsLenght = records.length;

console.log(recordsLenght)

if (recordsLenght == 0 ) {
    $(`#counter-container`).text("Zatím jsme nikoho nepojistili");

} else if (recordsLenght == 1) {
    $(`#insured-count`).append(recordsLenght + " " + "klienta");

} else if (recordsLenght > 1 && recordsLenght < 5 ) {
    $(`#insured-count`).append(recordsLenght + " " + "klienty");

} else {
    $(`#insured-count`).append(recordsLenght + " " + "klientů");
}



    
