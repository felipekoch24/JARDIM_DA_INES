const conteudoAbas = {
    flores: `
        <div class="pane active">
            <div class="section-title"><i class="fa-solid fa-leaf"></i> Como Cuidar das Suas Plantinhas</div>
            
            <div class="card-item">
                <h3>🌸 Vídeo Especial: Lírio da Paz</h3>
                <p>Um guia prático e direto ao ponto de 2 minutos sobre como cuidar direitinho do Lírio da Paz para ele ficar sempre lindo.</p>
                <video controls width="100%" src="lirio_da_paz.mp4" style="margin-top:10px; border-radius:12px;" playsinline></video>
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
            
            <div class="card-item">
                <h3>Parabéns Especial 🐱🎂</h3>
                <p>Olha só esse gatinho fofo com um bolo dando parabéns para celebrar a data!</p>
                <video controls width="100%" src="01.mp4" style="margin-top:10px; border-radius:12px;" playsinline></video>
            </div>

            <div class="card-item">
                <h3>Momentos de Aniversário 🎉</h3>
                <p>Registros rápidos e cheios de alegria para guardar na memória.</p>
                <video controls width="100%" src="02.mp4" style="margin-top:10px; border-radius:12px;" playsinline></video>
            </div>

            <div class="card-item">
                <h3>Reunião em Família ❤️</h3>
                <p>O vídeo mais completo e especial reunindo a família toda celebrando junta.</p>
                <video controls width="100%" src="03.mp4" style="margin-top:10px; border-radius:12px;" playsinline></video>
            </div>
        </div>
    `,
    contato: `
        <div class="pane active">
            <div class="dev-card">
                <div class="dev-avatar"><i class="fa-solid fa-code"></i></div>
                <h3 style="font-size: 1.3rem; margin-bottom: 10px; color: #ff4757;">Canal de Atendimento</h3>
                <p>Envie suas melhorias, upgrades, reclamações, sugestões ou elogios diretamente para o suporte!</p>
                
                <a href="https://wa.me/5551995830380?text=Ol%C3%A1!%20Vim%20pelo%20Jardim%20da%20Ines..." target="_blank" class="whatsapp-btn">
                    <i class="fa-brands fa-whatsapp fa-lg"></i> Abrir WhatsApp
                </a>
            </div>
        </div>
    `
};

function switchTab(event, tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    document.getElementById('conteudo-dinamico').innerHTML = conteudoAbas[tabName];
}

// Carrega a primeira aba ao abrir (Flores)
document.getElementById('conteudo-dinamico').innerHTML = conteudoAbas['flores'];
