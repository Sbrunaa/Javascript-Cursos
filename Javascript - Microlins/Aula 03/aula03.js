//if e else
const value = 5;

if (value == 5) {
    alert('o valor é 5');
} else {
    alert('O valor não é 5');
}

// if , else if(usado quando tem mais de um condição) e else
var date = new Date();
var hours = date.getHours();

if (hours < 12) {
    alert('Bom dia!😌');
} else if (hours < 18) {
    alert('Boa tarde!😊')
} else {
    alert('Boa noite!😴')
}

//Switch case(usado para várias comprações diferentes)

var text = ' ';

switch (text) {
    case 'aviso':
        alert('O texto é de aviso');
        break
    case 'perigo':
        alert('o texto é de perigo');
        break
    case 'info':
        alert('O texto é de informação');
        break
    default:
        alert('O texto é vázio');
        break
}

// Operadores logicos -> ==(Igualdade), <(Menor), >(Maior), !=(Diferente), And(&&), OR(||) e NOT(!)

var notesProof = 7;
var notesJob = 1;

if (notesProof >= 7 && notesJob > 0) {
    alert('Aprovado')
} else {
    alert('Reprovado')
}

var fouls = 10;
var notesEnd = 6;

if (fouls > 10 || noesEnd < 7) {
    alert('Reprovada')
} else {
    alert('Aprovada')
}

var promotion = true;

if (!promotio) {
    alert('Valor total')
} else {
    alert('Valor promocional')
}