const messages = [
    "Dios es amor ❤️",
    "La fe mueve montañas 🏔️",
    "Todo lo puedo en Cristo 🙏",
    "Bendiciones para tu vida ✨",
    "Bajo la mirada de Dios 🕊️",
    "Caminando con fe ✝️",
    "La paz de Cristo esté contigo",
    "Dios tiene un plan para ti",
    "Que Su luz ilumine tu camino 🕯️",
    "Dios es nuestra fortaleza",
    "En Sus manos todo es posible",
    "Gracias a Dios por ti 🙏",
    "Eres una bendición ✨",
    "Dios te ama infinitamente ❤️",
    "Fíate de Dios con todo tu corazón"
];

function createBubble() {
    const container = document.getElementById('bubbles-container');
    const bubble = document.createElement('div');
    
    bubble.classList.add('bubble');
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    bubble.innerText = messages[randomIndex];
    
    // Posición aleatoria
    const xPos = Math.random() * 80 + 10; 
    bubble.style.left = `${xPos}%`;
    
    // Velocidad aleatoria
    const duration = Math.random() * 5 + 6; 
    bubble.style.animationDuration = `${duration}s`;

    container.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// Crear un cartel cada 1 segundo
setInterval(createBubble, 1000);