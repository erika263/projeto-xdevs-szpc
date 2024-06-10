

const btnAvancar = document.getElementById("btn-avancar");
const btmVoltar = document.getElementById("btm-voltar");
let cartaoAtual = 0;
const catoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function(){
    const ehUltimoCartao =cartaoAtual === catoes.length -1;
   if(ehUltimoCartao) return; //5

      esconderCartaoSelecionado();

     cartaoAtual++;
     mostrarCartao();

});


btmVoltar.addEventListener("click", function () {
     const ehPrimeirpCartao = cartaoAtual === 0;
    if(ehPrimeirpCartao ) return;

  esconderCartaoSelecionado();

   cartaoAtual--;
   mostrarCartao();
});

function mostrarCartao() {
    catoes[cartaoAtual].classList.add("selecionado");
}

    function  esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

