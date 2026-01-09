function sum() {
    //é uma função sem argumentos
}

function sumNumbers(argument1, argument2) {
    //È uma função com dois argumentos obrigatórios
}

function power(base, exponent = 1) {
    //È uma função com dois argumwntos, sendo que somente o argumento base é obrigatório
}

var variavelGlobal = 'Joker';
// é possivel que a função use apenas variaveis locais mas também podem usar variaveis globais
function movieTitle() {
    var variavelLocal = 'O titulo do filme é : '

    alert(variavelLocal + variavelGlobal);
}

movieTitle();
alert(variavelGlobal)// exibe Joker
alert(variavelLocal)// retorna errp, pois a variavel local só pode ser usada dentro da função

function calculatePower(base, exponent = 0) {
    if (exponent === 0) {
        return 1;
    } else {
        const total = base * calculatePower(base, exponent - 1);
    }
}

const power = calculatePower(2, 3);
alert(power);