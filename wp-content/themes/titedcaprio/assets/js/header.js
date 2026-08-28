window.addEventListener('scroll', function() {
    // Procura o seu header
    const header = document.querySelector('.header-global');
    
    if (header) {
        // Se a tela for rolada mais de 50 pixels para baixo...
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled'); // Acende o gradiente
        } else {
            header.classList.remove('header-scrolled'); // Apaga o gradiente no topo
        }
    }
});