//imagens agentes//
document.addEventListener('DOMContentLoaded', function() {
    const agentes = document.querySelectorAll('ul li[data-imagem]');
    const imagemExibida = document.getElementById('imagem-exibida');
    const tituloAgentes = document.querySelector('#agents h2');
    let imagemFixa = false;  // Variável para controlar se a imagem está fixa

    agentes.forEach(function(agente) {
        agente.addEventListener('mouseover', function() {
            if (!imagemFixa) { // Se a imagem não estiver fixa, troque ao passar o mouse
                const novaImagem = agente.getAttribute('data-imagem');

                // Fade out
                imagemExibida.style.opacity = '0'; // Faz a imagem atual desvanecer

                // Troca a imagem após um pequeno atraso
                setTimeout(() => {
                    imagemExibida.src = novaImagem; // Troca a imagem
                    imagemExibida.style.opacity = '1'; // Faz a nova imagem aparecer
                }, 200); // O mesmo tempo que a transição CSS
            }
        });

        agente.addEventListener('mouseout', function() {
            if (!imagemFixa) { // Se a imagem não estiver fixa, volta para a imagem padrão ao sair do mouse
                // Fade out
                imagemExibida.style.opacity = '0'; // Faz a imagem atual desvanecer

                // Troca a imagem após um pequeno atraso
                setTimeout(() => {
                    imagemExibida.src = 'imagens/agentes.png'; // Volta para a imagem padrão
                    imagemExibida.style.opacity = '1'; // Faz a nova imagem aparecer
                }, 200); // O mesmo tempo que a transição CSS
            }
        });

        agente.addEventListener('click', function() {
            // Ao clicar, fixa a imagem correspondente ao agente
            const novaImagem = agente.getAttribute('data-imagem');
            imagemExibida.style.opacity = '0'; // Faz a imagem atual desvanecer

            // Troca a imagem após um pequeno atraso
            setTimeout(() => {
                imagemExibida.src = novaImagem; // Troca a imagem
                imagemExibida.style.opacity = '1'; // Faz a nova imagem aparecer
            }, 200); // O mesmo tempo que a transição CSS
            imagemFixa = true;  // Agora a imagem está fixa
        });
    });

    // Evento para o título "Agentes" para resetar a imagem fixa
    tituloAgentes.addEventListener('click', function() {
        imagemExibida.style.opacity = '0'; // Faz a imagem atual desvanecer

        // Troca a imagem após um pequeno atraso
        setTimeout(() => {
            imagemExibida.src = 'imagens/agentes.png';  // Volta para a imagem padrão
            imagemExibida.style.opacity = '1'; // Faz a nova imagem aparecer
            imagemFixa = false;  // Libera a imagem fixa para permitir hover novamente
        }, 200); // O mesmo tempo que a transição CSS
    });
});

//imagens mapas//
document.addEventListener('DOMContentLoaded', function() {
    const mapas = document.querySelectorAll('ul li[data-imagens]');
    const imagemPrincipal = document.getElementById('imagem-principal');
    const tituloMapas = document.querySelector('#maps h2');
    let imagemParada = false;  // Variável para controlar se a imagem está fixa

    mapas.forEach(function(mapas) {
        mapas.addEventListener('mouseover', function() {
            if (!imagemParada) { // Se a imagem não estiver fixa, troque ao passar o mouse
                const novaImagem = mapas.getAttribute('data-imagens');

                // Fade out
                imagemPrincipal.style.opacity = '0'; // Faz a imagem atual desvanecer

                // Troca a imagem após um pequeno atraso
                setTimeout(() => {
                    imagemPrincipal.src = novaImagem; // Troca a imagem
                    imagemPrincipal.style.opacity = '1'; // Faz a nova imagem aparecer
                }, 200); // O mesmo tempo que a transição CSS
            }
        });

        mapas.addEventListener('mouseout', function() {
            if (!imagemParada) { // Se a imagem não estiver fixa, volta para a imagem padrão ao sair do mouse
                // Fade out
                imagemPrincipal.style.opacity = '0'; // Faz a imagem atual desvanecer

                // Troca a imagem após um pequeno atraso
                setTimeout(() => {
                    imagemPrincipal.src = 'imagens/mapas.jfif'; // Volta para a imagem padrão
                    imagemPrincipal.style.opacity = '1'; // Faz a nova imagem aparecer
                }, 200); // O mesmo tempo que a transição CSS
            }
        });

        mapas.addEventListener('click', function() {
            // Ao clicar, fixa a imagem correspondente ao mapas
            const novaImagem = mapas.getAttribute('data-imagens');
            imagemPrincipal.style.opacity = '0'; // Faz a imagem atual desvanecer

            // Troca a imagem após um pequeno atraso
            setTimeout(() => {
                imagemPrincipal.src = novaImagem; // Troca a imagem
                imagemPrincipal.style.opacity = '1'; // Faz a nova imagem aparecer
            }, 200); // O mesmo tempo que a transição CSS
            imagemParada = true;  // Agora a imagem está fixa
        });
    });

    // Evento para o título "Mapas" para resetar a imagem fixa
    tituloMapas.addEventListener('click', function() {
        imagemPrincipal.style.opacity = '0'; // Faz a imagem atual desvanecer

        // Troca a imagem após um pequeno atraso
        setTimeout(() => {
            imagemPrincipal.src = 'imagens/mapas.jfif';  // Volta para a imagem padrão
            imagemPrincipal.style.opacity = '1'; // Faz a nova imagem aparecer
            imagemParada = false;  // Libera a imagem fixa para permitir hover novamente
        }, 200); // O mesmo tempo que a transição CSS
    });
});

//imagens mini mapas//
document.addEventListener('DOMContentLoaded', function() {
    const mapas = document.querySelectorAll('ul li[data-image]');
    const imagemMiniMapa = document.getElementById('imagem-minimapa');
    const tituloMapas = document.querySelector('#maps h2');
    let imagemEstatica = false;  // Variável para controlar se a imagem está fixa

    mapas.forEach(function(mapas) {
        mapas.addEventListener('mouseover', function() {
            if (!imagemEstatica) { // Se a imagem não estiver fixa, troque ao passar o mouse
                const novaImagem = mapas.getAttribute('data-image');

                // Fade out
                imagemMiniMapa.style.opacity = '0'; // Faz a imagem atual desvanecer

                // Troca a imagem após um pequeno atraso
                setTimeout(() => {
                    imagemMiniMapa.src = novaImagem; // Troca a imagem
                    imagemMiniMapa.style.opacity = '1'; // Faz a nova imagem aparecer
                }, 200); // O mesmo tempo que a transição CSS
            }
        });

        mapas.addEventListener('mouseout', function() {
            if (!imagemEstatica) { // Se a imagem não estiver fixa, volta para a imagem padrão ao sair do mouse
                // Fade out
                imagemMiniMapa.style.opacity = '0'; // Faz a imagem atual desvanecer

                // Troca a imagem após um pequeno atraso
                setTimeout(() => {
                    imagemMiniMapa.src = 'imagens/Valorant-Minimap.png'; // Volta para a imagem padrão
                    imagemMiniMapa.style.opacity = '1'; // Faz a nova imagem aparecer
                }, 200); // O mesmo tempo que a transição CSS
            }
        });

        mapas.addEventListener('click', function() {
            // Ao clicar, fixa a imagem correspondente ao mapas
            const novaImagem = mapas.getAttribute('data-image');
            imagemMiniMapa.style.opacity = '0'; // Faz a imagem atual desvanecer

            // Troca a imagem após um pequeno atraso
            setTimeout(() => {
                imagemMiniMapa.src = novaImagem; // Troca a imagem
                imagemMiniMapa.style.opacity = '1'; // Faz a nova imagem aparecer
            }, 200); // O mesmo tempo que a transição CSS
            imagemEstatica = true;  // Agora a imagem está fixa
        });
    });

    // Evento para o título "Mapas" para resetar a imagem fixa
    tituloMapas.addEventListener('click', function() {
        imagemMiniMapa.style.opacity = '0'; // Faz a imagem atual desvanecer

        // Troca a imagem após um pequeno atraso
        setTimeout(() => {
            imagemMiniMapa.src = 'imagens/Valorant-Minimap.png';  // Volta para a imagem padrão
            imagemMiniMapa.style.opacity = '1'; // Faz a nova imagem aparecer
            imagemEstatica = false;  // Libera a imagem fixa para permitir hover novamente
        }, 200); // O mesmo tempo que a transição CSS
    });
});

//mostrando meu E-book
const url = '10-maneiras-de-como-subir-de-rank-no-Valorant-focando-em-melhorar-a-mira-e-outros-aspectos-important.pdf';
let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;

const canvas = document.querySelector('#pdf-render'),
    ctx = canvas.getContext('2d');

// Obter o documento PDF
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    document.querySelector('#page-count').textContent = pdfDoc.numPages;
    renderPage(pageNum);  // Renderiza a primeira página
});

// Função para renderizar a página
const renderPage = num => {
    pageIsRendering = true;

    pdfDoc.getPage(num).then(page => {
        // Container para o PDF
        const container = document.querySelector('#pdf-container');
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        // Viewport padrão (sem escala) para pegar o tamanho original da página
        const viewport = page.getViewport({ scale: 1 });

        // Calcular a escala para ajustar na largura e altura do container
        const scale = Math.min(containerWidth / viewport.width, containerHeight / viewport.height);
        const scaledViewport = page.getViewport({ scale });

        // Ajustar o tamanho do canvas para caber na tela
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        const renderCtx = {
            canvasContext: ctx,
            viewport: scaledViewport
        };

        // Renderizar a página no canvas
        page.render(renderCtx).promise.then(() => {
            pageIsRendering = false;

            if (pageNumIsPending !== null) {
                renderPage(pageNumIsPending);
                pageNumIsPending = null;
            }
        });

        // Atualizar o número da página atual
        document.querySelector('#page-num').textContent = num;
    });
};

// Fila para renderizar páginas enquanto uma página está sendo renderizada
const queueRenderPage = num => {
    if (pageIsRendering) {
        pageNumIsPending = num;
    } else {
        renderPage(num);
    }
};

// Botões de controle de página
document.querySelector('#prev-page').addEventListener('click', () => {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
});

document.querySelector('#next-page').addEventListener('click', () => {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
});

//notific form//
document.getElementById('form-deposito').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio real do formulário

    // Mostra a notificação
    var notification = document.getElementById('notification');
    notification.classList.add('show');

    // Oculta a notificação após 3 segundos
    setTimeout(function() {
    notification.classList.remove('show');
    }, 3000);
    
    // Aqui você pode fazer o envio do formulário via AJAX ou qualquer outro método de envio
});