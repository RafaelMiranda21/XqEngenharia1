document.querySelector(".trabalhe-conosco").addEventListener("click", () =>
document.querySelector(".container").classList.toggle("show-form")
);

document.querySelector(".fechar-form").addEventListener("click", () =>
document.querySelector(".container").classList.toggle("show-form")
);


document.querySelector(".fale-conosco").addEventListener("click", () =>
document.querySelector(".container").classList.toggle("show-contato")
);

document.querySelector(".fechar-chat").addEventListener("click", () =>
document.querySelector(".container").classList.toggle("show-contato")
);






// let imgs=[];
// let slides;
// let imgAtual;
// let maxImg;
// let tmp;


// function preCarregamento(){
//     let s=1;
//     for(let i=0; i<3; i++){
//         imgs[i] = new Image;
//         imgs[i].src="imgs/s"+s+".jpg";
//         s++;
//     }
// }

// function carregarImg(img){
//    slides.style.backgroundImage = "url('"+imgs[img].src+"')";
// }

// function troca(){
//     imgAtual++;
//     if(imgAtual > maxImg){
//         imgAtual = 0;
//     }
//     carregarImg(imgAtual);
// }

// function inicia(){
//     preCarregamento();
//     imgAtual = 0; //indice do vetor
//     maxImg = imgs.length - 1;
//     slides = document.getElementById("Slides");
//     carregarImg(imgAtual);
//     tmp=setInterval(troca, 3000);
// }

// window.addEventListener("load",inicia);








// let slides;
// let pontoIndicador;
// let imgAtual;
// let tempoTroca = 3000;

// function carregaImg(img){
//    for(let i=0; i < slides.length; i++){
//        slides[i].style.display = "none";
//        pontoIndicador[i].className = pontoIndicador[i].className.replace(" ativo", "");
//    }
    
//    slides[img].style.display = "block";
//    pontoIndicador[img].className += " ativo";
// }

// function troca(n){
//     tempoTroca = 0;
//     imgAtual+=n;
//     console.log(imgAtual);
//     if(imgAtual > slides.length-1){
//         imgAtual = 0;
//     }else if(imgAtual < 0){
//         imgAtual = slides.length-1;
//     }

//     carregaImg(imgAtual);
// }

// function tempo(){
//     tempoTroca++;
//     if(tempoTroca >= 300){
//         tempoTroca = 0;
//         troca(1);
//     }
//     window.requestAnimationFrame(tempo);
// }

// function Indicador(n){

//    imgAtual = n;
//    carregaImg(imgAtual);
// }

//  function inicia(){
//          slides = document.getElementsByClassName("meus-slides");
//          pontoIndicador = document.getElementsByClassName("ponto-indicador-slide");
//          imgAtual = 0 ;
//          tempoTroca = 0;
//          carregaImg(imgAtual);
//          tempo()
//      }
  
//      window.addEventListener("load",inicia);


document.getElementById('contatoForm').addEventListener('submit', function () {
    var nome = this.querySelector('input[name=nome]'), nome = nome.value;
    var email = this.querySelector('input[name=email]'), email = email.value;
    var texto = 'Olá destinatário, \nMeu nome é '+ nome +' e meu email é '+ email;
    this.querySelector('input[name=Body]').setAttribute('value', texto);
});
 










/* var indice_slide = 1; //essa variável será usada em todas as nossas funções e será responsável por dizer qual o slide atual
mostrar_slides(indice_slide); //aqui já estamos chamando a função para que o slide já comece mostrando o primeiro slide
// Função principal que mostra os slides
function mostrar_slides(n) {
var i; // será usada como um contador dentro de nossa função
var slides = document.getElementsByClassName("meus-slides"); //retorna todos os elementos que possuem a classe "meus-slides"
var ponto_indicador = document.getElementsByClassName("ponto-indicador-slide"); //retorna todos os elementos que possuem a classe "ponto-indicador-slide"
if (n > slides.length){
    indice_slide = 1
} // caso o número passado como parâmetro seja maior que o número de slides então chama o primeiro 
if (n < 1){
    indice_slide = slides.length
    
} // caso o número passado como parâmetro seja menor que 1 nosso variável "indice_slide" receberá o número total de slides
for (i = 0; i < slides.length; i++) { //inicia um loop entre os slides
slides[i].style.display = "none"; //deixa o slide com display none

} //encerra o loop for
for (i = 0; i < ponto_indicador.length; i++) { //inicia um loop entre os pontos indicadores
ponto_indicador[i].className = ponto_indicador[i].className.replace(" ativo", ""); // remove a classe "ativo" do indicador
} // encerra o loop for
slides[indice_slide-1].style.display = "block"; // faz o slide atual aparecer
console.log(slides[1]);
console.log(indice_slide);
ponto_indicador[indice_slide-1].className += " ativo"; //adiciona a classe "ativo" para o indicador do slide atual
} //encerra a função

function controlador_slides(n) {
    /*quando passamos como parâmetro para os botões “próximo“ e “anterior” 
    eles serão usados nesta função para calcular qual o slide que deverá ser mostrado
    por isso passamos como parâmetro os valores "1" e "-1" para ir para frente ou para trás*/
    /*mostrar_slides(indice_slide += n);
}

    // Função que controla o slide atual caso clique no ponto indicador
function slide_atual(n) {
    mostrar_slides(indice_slide = n);
    }*/ 