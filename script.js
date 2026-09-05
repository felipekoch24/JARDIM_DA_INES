const conteudoAbas = {
    flores: `
        <div class="pane active">
            <div class="section-title"><i class="fa-solid fa-leaf"></i> Como Cuidar das Suas Plantinhas</div>
            
            <div class="card-item">
                <h3>🌸 Vídeo Especial: Lírio da Paz</h3>
                <p>Guia prático e direto ao ponto de 2 minutos sobre como cuidar direitinho do Lírio da Paz para ele ficar sempre lindo.</p>
                <video controls loop playsinline width="100%" src="lirio_da_paz.mp4" style="margin-top:10px; border-radius:12px;"></video>
            </div>

            <div class="card-item">
                <h3>🌻 Plantando Girassol</h3>
                <p>Aprenda o passo a passo de como plantar girassol diretamente na terra para ver ele brotar e crescer forte.</p>
                <video controls loop playsinline width="100%" src="plantar_girassol.mp4" style="margin-top:10px; border-radius:12px;"></video>
            </div>

            <div class="card-item">
                <h3>🌻 Cuidando do Girassol Comprado</h3>
                <p>Dicas essenciais para manter o seu girassol recém-comprado sempre saudável, radiante e cheio de vida.</p>
                <video controls loop playsinline width="100%" src="cuidar_girassol.mp4" style="margin-top:10px; border-radius:12px;"></video>
            </div>

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
    familia: `
        <div class="pane active">
            <div class="section-title"><i class="fa-solid fa-heart-pulse"></i> Momentos Fofinhos da Família</div>
            
            <!-- Barra de Pesquisa -->
            <div style="margin-bottom: 20px;">
                <input type="text" id="input-busca-familia" placeholder="🔍 Pesquisar vídeo na família..." onkeyup="filtrarFamilia()" style="width: 100%; padding: 12px 15px; border-radius: 12px; border: 2px solid #ff4081; background: rgba(255,255,255,0.1); color: #fff; font-size: 1rem; outline: none;">
            </div>

            <!-- Seção de Adicionados Recentemente -->
            <div style="background: linear-gradient(135deg, rgba(255,71,87,0.2), rgba(255,64,129,0.2)); border: 2px dashed #ff4757; padding: 15px; border-radius: 16px; margin-bottom: 20px;">
                <h4 style="color: #ff4757; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-bolt"></i> Adicionados Recentemente
                </h4>
                <div class="card-item" data-titulo="lembrete pra mae" style="background: rgba(0,0,0,0.2);">
                    <h3>LEMBRETE PRA MÃE ❤️</h3>
                    <p>Sei que as vezes pareço distante, mas as coisas mudam, mas JURO que só quero ser MOTIVO de ORGULHO pra TI❤️.</p>
                    <video controls loop playsinline width="100%" src="04.mp4" style="margin-top:10px; border-radius:12px;"></video>
                </div>
            </div>

            <div id="lista-videos-familia">
                <div class="card-item" data-titulo="parabens especial gatinho bolo">
                    <h3>Parabéns Especial 🐱🎂</h3>
                    <p>Olha só esse gatinho fofo com um bolo dando parabéns para celebrar a data!</p>
                    <video controls loop playsinline width="100%" src="01.mp4" style="margin-top:10px; border-radius:12px;"></video>
                </div>

                <div class="card-item" data-titulo="momentos de aniversario">
                    <h3>Momentos de Aniversário 🎉</h3>
                    <p>Registros rápidos e cheios de alegria para guardar na memória.</p>
                    <video controls loop playsinline width="100%" src="02.mp4" style="margin-top:10px; border-radius:12px;"></video>
                </div>

                <div class="card-item" data-titulo="reuniao em familia">
                    <h3>Reunião em Família ❤️</h3>
                    <p>O vídeo mais completo e especial reunindo a família toda celebrando junta.</p>
                    <video controls loop playsinline width="100%" src="03.mp4" style="margin-top:10px; border-radius:12px;"></video>
                </div>
            </div>
        </div>
    `,
    contato: `
        <div class="pane active">
            <div class="dev-card" style="text-align: center;">
                <img src="dev.png" alt="Desenvolvedor" id="foto-dev" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 3px solid #ff4757; margin-bottom: 15px; box-shadow: 0 0 15px rgba(255, 71, 87, 0.4); cursor: pointer;" title="Clique para ampliar a foto!" onerror="this.style.display='none'">
                
                <h3 style="font-size: 1.5rem; margin-bottom: 15px; color: #ff4757;">Fale Comigo</h3>
                <p style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 25px;">
                    OLÁ AQUI É O DEV (DESENVOLVEDOR).<br>
                    Adoraria saber se você gostou ou não do projeto, se sigo com ele ou paro!<br>
                    Espero que goste do app e seja útil pra você!<br>
                    Qualquer dúvida, só entrar em contato comigo.
                </p>
                
                <a href="https://wa.me/5551995830380?text=Ol%C3%A1!%20Vim%20pelo%20Jardim%20da%20Ines..." target="_blank" class="whatsapp-btn" style="font-size: 1.1rem; padding: 14px 20px; display: inline-flex; align-items: center; justify-content: center; gap: 12px; background-color: #25d366; border: none; color: #1a0f14; text-decoration: none; font-weight: 900; border-radius: 16px; width: 100%; box-shadow: 0 4px 20px rgba(37, 211, 102, 0.6);">
                    <i class="fa-brands fa-whatsapp fa-lg"></i> Chamar no WhatsApp
                </a>

                <div style="margin-top: 25px; border-top: 2px dashed #ff4081; padding-top: 20px;">
                    <p style="font-size: 1.1rem; margin-bottom: 15px; color: #ffffff;">Tem alguma dúvida sobre plantas ou qualquer outro assunto?</p>
                    <a href="https://gemini.google.com" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; background-color: #4285f4; color: #ffffff; text-decoration: none; font-size: 1.1rem; font-weight: 900; padding: 14px 20px; border-radius: 16px; width: 100%; box-shadow: 0 4px 20px rgba(66, 133, 244, 0.6);">
                        <i class="fa-solid fa-robot fa-lg"></i> Perguntar ao Gemini
                    </a>
                </div>
            </div>
        </div>

        <div id="modal-foto" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.85); z-index: 9999; justify-content: center; align-items: center; flex-direction: column;">
            <div style="position: relative; max-width: 90%; max-height: 80%; display: flex; flex-direction: column; align-items: center;">
                <img src="dev.png" alt="Foto Ampliada" style="width: 280px; height: 280px; border-radius: 20px; object-fit: cover; border: 4px solid #ff4757; box-shadow: 0 10px 30px rgba(0,0,0,0.7);">
                <button id="fechar-modal" style="margin-top: 20px; background-color: #ff4757; color: white; border: none; font-size: 1.1rem; font-weight: bold; padding: 12px 30px; border-radius: 14px; cursor: pointer; box-shadow: 0 4px 15px rgba(255, 71, 87, 0.5);">
                    <i class="fa-solid fa-xmark"></i> Fechar Foto
                </button>
            </div>
        </div>
    `
};

function configurarVideos() {
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach(video => {
        video.addEventListener('play', () => {
            allVideos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });
}

function configurarFotoDev() {
    const foto = document.getElementById('foto-dev');
    const modal = document.getElementById('modal-foto');
    const botaoFechar = document.getElementById('fechar-modal');

    if (foto && modal && botaoFechar) {
        foto.addEventListener('click', () => { modal.style.display = 'flex'; });
        botaoFechar.addEventListener('click', () => { modal.style.display = 'none'; });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { modal.style.display = 'none'; }
        });
    }
}

function filtrarFamilia() {
    const termo = document.getElementById('input-busca-familia').value.toLowerCase();
    const cards = document.querySelectorAll('.pane .card-item');
    
    cards.forEach(card => {
        const texto = card.innerText.toLowerCase();
        if (texto.includes(termo)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function criarBotaoTopo() {
    if (document.getElementById('btn-voltar-topo')) return;
    
    const btn = document.createElement('button');
    btn.id = 'btn-voltar-topo';
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    btn.style.cssText = `
        position: fixed; bottom: 20px; right: 20px; width: 45px; height: 45px;
        background-color: #ff4757; color: white; border: none; border-radius: 50%;
        font-size: 1.2rem; cursor: pointer; display: none; z-index: 999;
        align-items: center; justify-content: center;
        box-shadow: 0 4px 15px rgba(255, 71, 87, 0.6);
    `;
    
    btn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.display = 'flex';
        } else {
            btn.style.display = 'none';
        }
    });
}

function switchTab(event, tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    document.getElementById('conteudo-dinamico').innerHTML = conteudoAbas[tabName];
    configurarVideos();
    configurarFotoDev();
}

document.getElementById('conteudo-dinamico').innerHTML = conteudoAbas['flores'];
configurarVideos();
configurarFotoDev();
criarBotaoTopo();
