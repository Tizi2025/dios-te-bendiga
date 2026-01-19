const messages = [
    "Dios te bendiga 🙏",
    "La fe mueve montañas 🏔️",
    "Todo lo puedo en Cristo ✨",
    "Dios es amor ❤️",
    "Caminando con fe ✝️",
    "La paz de Cristo esté contigo",
    "Eres una bendición 🕊️",
    "Bajo la mirada de Dios",
    "Que Su luz ilumine tu camino",
    "Gracias a Dios por este día",
    "Dios tiene un plan para ti",
    "Fíate de Dios con todo tu corazón"
];

function createBubble() {
    const container = document.getElementById('bubbles-container');
    const bubble = document.createElement('div');
    
    bubble.classList.add('bubble');
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    bubble.innerText = messages[randomIndex];
    
    // Aparecen en cualquier ancho de la pantalla
    const xPos = Math.random() * 80 + 5; 
    bubble.style.left = `${xPos}%`;
    
    // Velocidad de subida (entre 5 y 9 segundos)
    const duration = Math.random() * 4 + 5; 
    bubble.style.animationDuration = `${duration}s`;

    container.appendChild(bubble);

    // Se borran al terminar para que la página no se ponga lenta
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// Crea un cartel nuevo cada 900 milisegundos
setInterval(createBubble, 900);