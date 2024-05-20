//criando os objetos dos elementos de texto do form

var nome = document.querySelector("#inputName");
var nomeHelp = document.querySelector("#inputNameHelp");
var ano = document.querySelector("#inputYear");
var anoHelp = document.querySelector("#inputYearHelp");
var email = document.querySelector("#inputEmail");
var emailHelp = document.querySelector("#inputEmailHelp"); 
var senha = document.querySelector("#inputPassword");
var senhaHelp = document.querySelector("#inputPasswordHelp");
var passStrenghtMeter = document.querySelector("#passStrengthMeter");
var botao = document.querySelector("#button")
var inputResult = document.querySelector("#inputResult");

function contarEspacos(str) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            contador++;
        }
    }
    return contador;
}

/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco do campo inputName mude, será chamada a função validarNome*/
nome.addEventListener('focusout', validarNome);
email.addEventListener('focusout', validarEmail);
senha.addEventListener('focusout', validarSenha);

botao.addEventListener('click', validarTudo);
function validarTudo(e){
    var Nome;
    var Ano;
    var Email;
    var Senha;

    if(emailHelp.textContent === ""){
        Email = 1;
    }
    if(nomeHelp.textContent === ""){
        Nome = 1;
    }
    if(anoHelp.textContent === ""){
        Ano = 1;        
    }
    if(senhaHelp.textContent === "moderada" ||senhaHelp.textContent === "fraca"|| senhaHelp.textContent === "forte" ){
        Senha = 1;
    }

    if(Nome === 1 && Ano === 1 && Email === 1 && Senha === 1){
        inputResult.textContent = "Parabéns seus dados foram registrados :)";
    } else{
        inputResult.textContent = "Cadastro invalido"
    }

}
/*declaração tradicional de função validarNome(e)
'e' é o objeto do tipo evento que contém, alpem de outras propriedades, o objeto que iniciou o evento,
neste caso o objeto 'nome'
*/

function validarNome(e){ 
    //declaração da expressão regular para definir o formato de um nome válido
    const regexNome = /^[a-zA-Z\s]+$/g;
    
    console.log(e); //impressão em console do objeto evento e
    console.log(e.target.value); //impressão em console do valor do objeto 'nome' que originou o evento   
    var nameLenght = (e.target.value.trim().length) - contarEspacos(e.target.value.trim());
    
    if( (e.target.value.trim().match(regexNome)==null) || (nameLenght < 6) || nameLenght > 30){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputNameHelp
        nomeHelp.textContent = "Formato de nome inválido"; 
        nomeHelp.style.color="red";
    }
    else{
        nomeHelp.textContent = "";
    }       
}

function validarEmail(e){ 
    
    const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(br|com|net|org)$/;
    console.log(e); //impressão em console do objeto evento e
    console.log(e.target.value); //impressão em console do valor do objeto 'email' que originou o evento   
    if( (e.target.value.trim().match(regexEmail)==null)){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputNameHelp
        emailHelp.textContent = "Email invalido"; 
        emailHelp.style.color="red";
    }
    else{
        emailHelp.textContent = "";
    }    
}

function validarSenha(e){ 

    var senha = e.target.value.trim();
    var nomeDigitado = nome.value.trim();
    var anoDigitado = ano.value.trim();

    // Expressões regulares para cada parte da condição
    var regexCaractereEspecial = /[!@#%&+]/;
    var regexNumero = /\d/;
    var regexLetra = /[a-zA-Z]/;
    var regexLetraMaiuscula = /[A-Z]/;

    // Verificar o comprimento da senha
    var tamanhoInvalido = (senha.length < 6) || (senha.length > 20);

    // Verificar se a senha contém o caractere especial, número e letra
    var NaoPossuiCaractereEspecial = !(regexCaractereEspecial.test(senha));
    var NaoPossuiNumero = !(regexNumero.test(senha));
    var NaoPossuiLetra = !(regexLetra.test(senha));

    // Expressão regular para verificar se a senha contém nomeDigitado ou anoDigitado
    var regexNomeOuAno = new RegExp(nomeDigitado + "|" + anoDigitado, "i");

    console.log("Expressão Regular Nome ou Ano:", regexNomeOuAno);

    // Verificar se a senha contém nomeDigitado ou anoDigitado
    var contemNomeOuAno = regexNomeOuAno.test(senha);

    console.log("TESTE SENHA Contém Nome ou Ano:", contemNomeOuAno);
    console.log("TESTE SENHA Tamanhoinvalido:", tamanhoInvalido);
    console.log("TESTE SENHA Nao Possui caractere especial:", NaoPossuiCaractereEspecial);
    console.log("TESTE SENHA Nao Possui numero:", NaoPossuiNumero);
    console.log("TESTE SENHA Nao Possui letra:", NaoPossuiLetra);

    console.log("TESTE SENHA Ano Digitado:", anoDigitado);
    console.log("TESTE SENHA Nome Digitado:", nomeDigitado);

    if (tamanhoInvalido || NaoPossuiCaractereEspecial || NaoPossuiNumero || NaoPossuiLetra || contemNomeOuAno) {
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputSenhaHelp
        senhaHelp.textContent = "Senha inválida"; 
        senhaHelp.style.color="red";
    }
    else{
        //Fazer com que os regex's nao parem na primeira nao ocorrencia
        regexCaractereEspecial = /[!@#%&+]/g;
        regexNumero = /\d/g;
        regexLetra = /[a-zA-Z]/g;
        regexLetraMaiuscula = /[A-Z]/g;
        console.log("Senha:", senha);

        // Verificar o comprimento da senha
        var comprimento = senha.length;
        console.log("Comprimento:", comprimento);

        // Verificar se a senha contém caractere especial, número e letra maiúscula
        var possuiCaractereEspecial = regexCaractereEspecial.test(senha);
        var possuiNumero = regexNumero.test(senha);
        var possuiLetraMaiuscula = regexLetraMaiuscula.test(senha);


        console.log("Possui caractere especial:", possuiCaractereEspecial);
        console.log("Possui número:", possuiNumero);
        console.log("Possui letra maiúscula:", possuiLetraMaiuscula);

        // Determinar o nível de segurança da senha
        if (comprimento <= 8 && possuiCaractereEspecial && possuiNumero) {
            senhaHelp.textContent = "fraca";
            senhaHelp.style.color="orange";
            
            
        } else if (comprimento > 8 && comprimento <= 12 && possuiCaractereEspecial && possuiNumero && possuiLetraMaiuscula) {
            senhaHelp.textContent = "moderada";
            senhaHelp.style.color="yellow";
        } else if (comprimento > 12 && possuiCaractereEspecial && possuiNumero && possuiLetraMaiuscula) {
            // Verificar se há mais de um caractere especial, número e letra maiúscula
            var qtdCaracteresEspeciais = (senha.match(regexCaractereEspecial) || []).length;
            var qtdNumeros = (senha.match(regexNumero) || []).length;
            var qtdLetrasMaiusculas = (senha.match(regexLetraMaiuscula) || []).length;

            console.log("Quantidade de caracteres especiais:", qtdCaracteresEspeciais);
            console.log("Quantidade de números:", qtdNumeros);
            console.log("Quantidade de letras maiúsculas:", qtdLetrasMaiusculas);

            if (qtdCaracteresEspeciais > 1 && qtdNumeros > 1 && qtdLetrasMaiusculas > 1) {
                senhaHelp.textContent = "forte";
                senhaHelp.style.color="green";
            } else{
                senhaHelp.textContent = "moderada";
                senhaHelp.style.color="yellow";
            }
        } else{
            senhaHelp.textContent = "fraca";
            senhaHelp.style.color="orange";
        }

    
    }
       
}
  
/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco seja mudado, será chamada a função validarNome*/

//declaração de função de forma anônima usando uma expressão de função de seta =>

ano.addEventListener('focusout', () => {
    //declaração da expressão regular para definir o formato de um ano válido
    const regexAno = /^[0-9]+$/;
    //tirar (trim) espaços em branco antes e depois da string
    const anoTrimado = ano.value.trim();
    console.log(ano.value);

    if(anoTrimado.match(regexAno)==null){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
        anoHelp.textContent = "Formato de ano inválido";
        anoHelp.style.color="red";
    }
    else{
        //objeto Date
        var date = new Date();
        //obtem o ano atual
        
        if( parseInt(anoTrimado) > 2024 ){
             //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
            anoHelp.textContent = `Ano inválido. O ano não pode ser maior que 2024.`;
            anoHelp.style.color="red";
        }
        else if( parseInt(anoTrimado) < 1904 ){
             //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
            anoHelp.textContent = `Ano inválido. O ano não pode ser menor que 1904.`;
            anoHelp.style.color="red";
        }
        else{
            anoHelp.textContent="";
        }        
        
    }
}
);

