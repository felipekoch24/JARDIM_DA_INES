// Objeto contendo o conteúdo estruturado de cada aba
const conteudoAbas = {
    flores: `
        <div class="pane active">
            <div class="section-title"><i class="fa-solid fa-leaf"></i> Como Cuidar das Suas Plantinhas</div>
            <div class="card-item">
                <h3>Orquídeas Radiantes</h3>
                <p>Adoram luz indireta e regas moderadas. Deixe o substrato secar levemente entre uma rega e outra.</p>
            </div>
            <div class="card-item">
                <h3>Suculentas Amadas</h3>
                <p>Pouca água e bastante sol direto. Regue apenas quando a terra estiver totalmente seca.</p>
            </div>
            <div class="card-item">
                <h3>Violetas Delicadas</h3>
                <p>Regue sempre por baixo (no pratinho), evite molhar as folhas e flores diretamente para não manchar.</p>
            </div>
        </div>
    `,
    novelas: `
        <div class="pane active">
            <div class="section-title"><i class="fa-solid fa-video"></i> Novelas & Dramas Curtos</div>
            <div class="card-item">
                <h3>Episódio 01 - O Segredo do Jardim</h3>
                <p>Duração: 2m 15s • Curtas e emocionantes estilo TikTok.</p>
            </div>
            <div class="card-item">
                <h3>Episódio 02 - Reviravolta no Casamento</h3>
                <p>Duração: 1m 50s • Um romance cheio de surpresas.</p>
            </div>
            <div class="card-item">
                <h3>Episódio 03 - Promessa de Amor</h3>
                <p>Duração: 3m 05s • Aquela história que prende do início ao fim.</p>
            </div>
        </div>
    `,
    familia: `
        <div class="pane active">
            <div class="section-title"><i class="fa-solid fa-heart-pulse"></i> Momentos Fofinhos da Família</div>
            <div class="card-item">
                <h3>Sorrisos que Aquecem o Coração</h3>
                <p>Vídeos rápidos e lembranças especiais dos melhores momentos juntos.</p>
            </div>
            <div class="card-item">
                <h3>Almoço em Família</h3>
                <p>Risadas, conversas e aquela resenha boa que a gente guarda na memória.</p>
            </div>
        </div>
    `,
    contato: `
        <div class="pane active">
            <div class="dev-card">
                <div class="dev-avatar"><i class="fa-solid fa-code"></i></div>
                <h3 style="margin-bottom: 8px; color: var(--secondary-color);">Canal de Atendimento</h3>
                <p>Envie suas melhorias, upgrades, reclamações, sugestões ou elogios diretamente para o suporte!</p>
                
                <a href="https://wa.me/5551995830380?text=Ol%C3%A1!%20Vim%20pelo%20Jardim%20da%20Ines..." target="_blank" class="whatsapp-btn">
                    <i class="fa-brands fa-whatsapp fa-lg"></i> Abrir WhatsApp
                </a>
            </div>
        </div>
    `
};

// Função para alternar as abas dinamicamente
function switchTab(event, tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    event.currentTarget.classList.add('active');
    document.getElementById('conteudo-dinamico').innerHTML = conteudoAbas[tabName];
}

// Inicializa a aba "flores" ao carregar a página pela primeira vez
document.getElementById('conteudo-dinamico').innerHTML = conteudoAbas['flores'];

// Configuração do Player de Vídeo Principal (Suporta M3U8 e MP4 universalmente)
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('main-video');
    // Cole aqui o link do seu vídeo principal (.m3u8 gerado pelo FFmpeg ou um .mp4 direto)
    const videoSrc = 'seu-video-principal.m3u8'; 

    if (Hls.isSupported() && videoSrc.endsWith('.m3u8')) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl') || videoSrc.endsWith('.mp4')) {
        // Suporte nativo para Safari (iOS) ou arquivos MP4 normais
        video.src = videoSrc;
    }
});
