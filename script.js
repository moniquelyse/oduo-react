document.addEventListener('DOMContentLoaded', () => {
    const levels = document.querySelectorAll('.level');
    
    let activeLevel = null; // Variable para rastrear el nivel activo

    // Crear el elemento del modal
    const createBubbleModal = (text, buttonText, buttonClass) => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble-modal';
        
        // Agregar clase adicional si es una etapa futura
        if (buttonClass.includes('disabled')) {
            bubble.classList.add('future-bubble');
        }
        
        bubble.innerHTML = `
            <div class="bubble-content">
                ${text}
            </div>
            <button class="${buttonClass}">${buttonText}</button>
        `;
        return bubble;
    };

    levels.forEach(level => {
        level.addEventListener('click', async (e) => {
            // Si es el mismo nivel activo, no hacemos nada
            if (level === activeLevel) {
                return;
            }

            // Si hay un nivel activo diferente, cerramos su globo primero
            if (activeLevel) {
                await removeActiveBubbles();
            }

            // Actualizamos el nivel activo
            activeLevel = level;

            // Determinar el tipo de etapa y su contenido
            let buttonText = "Empezar";
            let buttonClass = "gaming-button";
            
            if (level.classList.contains('past')) {
                buttonText = "Revisar";
            } else if (level.classList.contains('future')) {
                buttonText = "Cerrada";
                buttonClass += " disabled";
            }

            const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            const bubble = createBubbleModal(text, buttonText, buttonClass);
            
            // Agregar el bubble al DOM
            level.parentNode.appendChild(bubble);
            
            // Calcular la posición correcta
            const rect = level.getBoundingClientRect();
            const scrollTop = document.querySelector('.content-scroll').scrollTop;
            const bubbleHeight = bubble.offsetHeight;
            
            // Posicionar el globo sobre el botón
            bubble.style.top = `${rect.top + scrollTop - bubbleHeight - 50}px`;

            // Activar el globo
            bubble.classList.add('active');

            // Asegurarse de que el globo sea visible
            const contentScroll = document.querySelector('.content-scroll');
            const bubbleTop = bubble.offsetTop;
            const scrollAmount = Math.max(0, bubbleTop - 20);
            
            contentScroll.scrollTo({
                top: scrollAmount,
                behavior: 'smooth'
            });

            // Cerrar al hacer click fuera
            const closeOnClickOutside = (event) => {
                if (!bubble.contains(event.target) && event.target !== level) {
                    removeActiveBubbles();
                    activeLevel = null;
                    document.removeEventListener('click', closeOnClickOutside);
                }
            };

            setTimeout(() => {
                document.addEventListener('click', closeOnClickOutside);
            }, 100);
        });
    });
});

// Función para cerrar globos activos
function removeActiveBubbles() {
    return new Promise((resolve) => {
        const activeBubbles = document.querySelectorAll('.bubble-modal.active');
        if (activeBubbles.length === 0) {
            resolve();
            return;
        }

        activeBubbles.forEach(bubble => {
            bubble.classList.remove('active');
            setTimeout(() => {
                bubble.remove();
                resolve();
            }, 300);
        });
    });
}
