var $conteudoGeral = document.querySelector(".container-geral");
var $conteudoEmArray = [].slice.call(document.querySelectorAll(".components"));
var $botoesDeFechar = [].slice.call(
  document.querySelectorAll(".components-botao-fechar")
);

setTimeout(function () {
  $conteudoGeral.classList.remove("js-container-geral");
}, 200);

$conteudoEmArray.forEach(function ($componente) {
  $componente.addEventListener("click", function () {
    if (this.classList.contains("caixa-container-ativo")) return;
    $conteudoGeral.classList.add("caixa--componente-ativo");
    this.classList.add("caixa-container-ativo");
  });
});

$botoesDeFechar.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $conteudoGeral.classList.remove("caixa--componente-ativo");
    document
      .querySelector(".components.caixa-container-ativo")
      .classList.remove("caixa-container-ativo");
  });
});
