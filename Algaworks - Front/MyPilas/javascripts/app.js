var alternador = document.querySelector('.js-botao-chaveador');

alternador.onclick = function(){
    var menu = document.querySelector('.menu');
    menu.classList.toggle('menu--exibindo');
}