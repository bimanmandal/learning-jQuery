$(document).ready(documentReady)

function documentReady() {
    selector();
}

function generateTable(number) {
    console.log('Generating the table');
    const tbody = $('#multiplication');
    tbody.empty();
    generateContents(number).forEach(element => {
        tbody.append(element);
    });
    // console.log(generateContents(10));
        

}

function generateContents(number) {
    var contents = []
    for( i = 1 ; i <= 10 ; i++ ) {
        contents.push(
            '<tr>' +
                '<td>' + number + '</td>' +
                '<td>X</td>' +
                '<td>' + i + '</td>' +
                '<td>=</td>' +
                '<td>' + number * i + '</td>' +
            '</tr>')
    }
    return contents;
}


function selector() {
    // used for the first time
    generateTable($('select').val());
    // for any change in value
    const selectorValue = $('select').on('change' , function() {
        console.log(this.value)
        generateTable(this.value)
    });
}