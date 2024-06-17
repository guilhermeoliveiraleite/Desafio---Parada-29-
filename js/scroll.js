window.addEventListener("scroll", function(){
    let cabecalho = document.querySelector('.cabecalho')
    cabecalho.classList.toggle('scroll',window.scrollY > 0)
})