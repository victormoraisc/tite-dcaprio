// Usamos 'load' no lugar de 'DOMContentLoaded'. 
// Ele aguarda TUDO (incluindo imagens pesadas) baixar. Acaba o flicker.
window.addEventListener("load", function() {
    console.log("🚦 [Debug] Página 100% carregada. Iniciando animações...");

    const observerOptions = {
        root: null,
        // O pulo do gato: '-20% 0px' faz o navegador esperar a imagem
        // entrar 20% na tela antes de disparar. Isso simula o efeito de 
        // "scroll suave revelando a tela" sem precisar sequestrar o mouse.
        rootMargin: '-20% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Atraso de segurança de 50ms apenas para renderização da placa de vídeo
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, 50);

                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.anim-left, .anim-right, .anim-bottom, .anim-fade');
    
    elementsToAnimate.forEach(el => observer.observe(el));
});