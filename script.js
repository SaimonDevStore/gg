// Loading Screen
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');

    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 3000);
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Category Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');

        // Remove active class from all tabs and categories
        document.querySelectorAll('.tab-btn').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.service-category').forEach(cat => cat.classList.remove('active'));

        // Add active class to clicked tab and corresponding category
        this.classList.add('active');
        document.getElementById(category).classList.add('active');
    });
});

// Service Modal
const modal = document.getElementById('service-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.querySelector('.close');

// Relaxe Tab
const relaxeTab = document.getElementById('relaxe-tab');
const relaxeBtn = document.getElementById('relaxe-btn');
const minimizeRelaxeBtn = document.getElementById('minimize-relaxe');
const closeRelaxeTabBtn = document.getElementById('close-relaxe-tab');

// Service details
const serviceDetails = {
    'bot-basico': {
        title: 'Bot Básico',
        description: 'Um bot Discord completo com funcionalidades essenciais para moderação e gerenciamento do seu servidor.',
        options: [
            {
                type: 'COMPLETO',
                price: 'R$ 80,00',
                features: [
                    'Arquivo completo do bot',
                    'Permite alterar nome, estilo e forma de uso',
                    'Comandos de moderação (kick, ban, mute, warn)',
                    'Sistema de logs detalhado',
                    'Proteção contra spam e raids',
                    'Comandos de utilidade (ping, info, avatar)',
                    'Sistema de níveis e experiência',
                    'Configuração personalizada',
                    'Suporte vitalício'
                ],
                delivery: 'Entrega no mesmo dia'
            },
            {
                type: 'URL',
                price: 'R$ 20,00',
                features: [
                    'Link do bot para adicionar ao servidor',
                    'Não permite alterações no nome ou estilo',
                    'Configuração manual dentro do servidor',
                    'Comandos de moderação básicos',
                    'Sistema de logs',
                    'Suporte por 30 dias',
                    'Após 30 dias, só receberá atualizações'
                ],
                delivery: 'Entrega no mesmo dia'
            }
        ],
        image: '🤖'
    },
    'bot-musica': {
        title: 'Bot de Música',
        description: 'Bot especializado em reprodução de música com integração completa ao Spotify e YouTube.',
        options: [
            {
                type: 'COMPLETO',
                price: 'R$ 100,00',
                features: [
                    'Arquivo completo do bot',
                    'Permite alterar nome, estilo e forma de uso',
                    'Player de música avançado',
                    'Integração com Spotify e YouTube',
                    'Sistema de playlists personalizadas',
                    'Controles de volume e equalização',
                    'Fila de músicas com controles',
                    'Comandos de busca e reprodução',
                    'Suporte vitalício'
                ],
                delivery: 'Entrega no mesmo dia'
            },
            {
                type: 'URL',
                price: 'R$ 35,00',
                features: [
                    'Link do bot para adicionar ao servidor',
                    'Não permite alterações no nome ou estilo',
                    'Configuração manual dentro do servidor',
                    'Player de música básico',
                    'Integração Spotify/YouTube',
                    'Suporte por 30 dias',
                    'Atualizações inclusas'
                ],
                delivery: 'Entrega no mesmo dia'
            }
        ],
        image: '🎵'
    },
    'bot-ia': {
        title: 'Bot IA',
        description: 'Bot inteligente com capacidades de IA para chat, geração de imagens e moderação automática.',
        options: [
            {
                type: 'COMPLETO',
                price: 'R$ 90,00',
                features: [
                    'Arquivo completo do bot',
                    'Permite alterar nome, estilo e forma de uso',
                    'Chat inteligente com IA integrada',
                    'Geração de imagens por IA',
                    'Moderação automática inteligente',
                    'Análise de sentimento de mensagens',
                    'Comandos de entretenimento',
                    'Sistema de aprendizado contínuo',
                    'Suporte vitalício'
                ],
                delivery: 'Entrega no mesmo dia'
            },
            {
                type: 'URL',
                price: 'R$ 50,00',
                features: [
                    'Link do bot para adicionar ao servidor',
                    'Não permite alterações no nome ou estilo',
                    'Configuração manual dentro do servidor',
                    'Chat com IA básico',
                    'Geração de imagens simples',
                    'Suporte por 30 dias',
                    'Atualizações inclusas'
                ],
                delivery: 'Entrega no mesmo dia'
            }
        ],
        image: '🧠'
    },
    'bot-agenda': {
        title: 'Bot de Agenda',
        description: 'Sistema completo de agendamento com lembretes e integração ao Google Calendar.',
        options: [
            {
                type: 'COMPLETO',
                price: 'R$ 90,00',
                features: [
                    'Arquivo completo do bot',
                    'Permite alterar nome, estilo e forma de uso',
                    'Sistema de agendamento completo',
                    'Lembretes automáticos',
                    'Integração com Google Calendar',
                    'Notificações personalizadas',
                    'Gerenciamento de eventos',
                    'Sincronização multi-dispositivo',
                    'Suporte vitalício'
                ],
                delivery: 'Entrega no mesmo dia'
            },
            {
                type: 'URL',
                price: 'R$ 27,00',
                features: [
                    'Link do bot para adicionar ao servidor',
                    'Não permite alterações no nome ou estilo',
                    'Configuração manual dentro do servidor',
                    'Sistema de agendamento básico',
                    'Lembretes simples',
                    'Suporte por 30 dias',
                    'Atualizações inclusas'
                ],
                delivery: 'Entrega no mesmo dia'
            }
        ],
        image: '📅'
    },
    'bot-customizavel': {
        title: 'Bot Customizável',
        description: 'Personalização total e possibilidade de adicionar vários bots em um só.',
        options: [
            {
                type: 'CUSTOMIZADO',
                price: 'R$ 20-180',
                features: [
                    'Personalização total conforme pedido',
                    'Possibilidade de adicionar vários bots em um só',
                    'Funcionalidades exclusivas',
                    'Design personalizado',
                    'Integrações especiais',
                    'Suporte personalizado',
                    'Prazo de entrega: 4 a 10 dias',
                    'Opção de urgência (+R$ 50)'
                ],
                delivery: '4 a 10 dias (urgência +R$ 50)',
                note: 'Preço varia conforme customização solicitada'
            }
        ],
        image: '⚙️'
    },
    'bot-premium': {
        title: 'Bot Premium',
        description: 'Inclui todos os bots de Discord criados pela Saimon Dev Store.',
        options: [
            {
                type: 'PREMIUM',
                price: 'R$ 500,00',
                features: [
                    'Todos os bots da loja incluídos',
                    'Recebe 2 arquivos: versão URL e versão COMPLETA',
                    'Acesso total a todos os bots',
                    'Suporte vitalício',
                    'Atualizações também para a versão URL',
                    'Recomendada a versão COMPLETA para desenvolvedores',
                    'Configuração completa de todos os bots',
                    'Documentação detalhada'
                ],
                delivery: 'Entrega no mesmo dia',
                note: 'Serviço premium com destaque especial'
            }
        ],
        image: '👑'
    },
    'portfolio-basico': {
        title: 'Portfólio Básico',
        description: 'Site profissional responsivo para mostrar seus projetos e habilidades.',
        options: [
            {
                type: 'BÁSICO',
                price: 'R$ 30,00',
                features: [
                    'Design responsivo moderno',
                    'Formulário de contato funcional',
                    'Animações CSS personalizadas',
                    'SEO otimizado',
                    'Integração com redes sociais',
                    'Galeria de projetos',
                    'Suporte por 30 dias'
                ],
                delivery: '7 a 10 dias'
            }
        ],
        image: '💼'
    },
    'portfolio-premium': {
        title: 'Portfólio Premium',
        description: 'Site completo com painel administrativo e funcionalidades avançadas.',
        options: [
            {
                type: 'PREMIUM',
                price: 'R$ 200,00',
                features: [
                    'Painel administrativo completo',
                    'Blog integrado com CMS',
                    'Analytics avançado',
                    'Sistema de comentários',
                    'Integração com APIs',
                    'Backup automático',
                    'Suporte por 90 dias para atualizações'
                ],
                delivery: '10 a 15 dias'
            }
        ],
        image: '👑'
    },
    'portfolio-customizavel': {
        title: 'Portfólio Customizável',
        description: 'Totalmente customizado conforme o cliente desejar.',
        options: [
            {
                type: 'CUSTOMIZADO',
                price: 'R$ 20-300',
                features: [
                    'Design totalmente personalizado',
                    'Funcionalidades exclusivas',
                    'Integrações especiais',
                    'Suporte personalizado',
                    'Prazo de entrega: 7 a 10 dias',
                    'Opção de entrega urgente (+R$ 50)'
                ],
                delivery: '7 a 10 dias (urgência +R$ 50)',
                note: 'Preço varia conforme conteúdo e pedido'
            }
        ],
        image: '🎨'
    },
    'minecraft-basico': {
        title: 'Script Básico',
        description: 'Moderação para servidor com suporte de 30 dias e atualizações eternas.',
        options: [
            {
                type: 'BÁSICO',
                price: 'R$ 30,00',
                features: [
                    'Sistema de moderação para servidor',
                    'Comandos básicos de administração',
                    'Proteção contra griefing',
                    'Sistema de logs',
                    'Suporte por 30 dias',
                    'Atualizações eternas'
                ],
                delivery: 'Entrega no mesmo dia'
            }
        ],
        image: '⚡'
    },
    'minecraft-personalizado': {
        title: 'Script Personalizado',
        description: 'Funcionalidades específicas conforme sua solicitação.',
        options: [
            {
                type: 'PERSONALIZADO',
                price: 'R$ 20-180',
                features: [
                    'Funcionalidades específicas conforme pedido',
                    'Sistema de economia personalizado',
                    'Mini-games customizados',
                    'Sistema de ranks e permissões',
                    'Plugins de proteção avançados',
                    'Suporte por 90 dias',
                    'Atualizações eternas',
                    'Prazo de entrega: 1 a 10 dias'
                ],
                delivery: '1 a 10 dias',
                note: 'Preço varia conforme funcionalidades solicitadas'
            }
        ],
        image: '🔧'
    },
    'servidor-basico': {
        title: 'Servidor Básico',
        description: 'Até 5 bots básicos configurados com suporte de 30 dias.',
        options: [
            {
                type: 'BÁSICO',
                price: 'R$ 80,00',
                features: [
                    'Até 5 bots básicos já criados',
                    'Todos configurados e prontos para uso',
                    'Bots já criados e configurados por mim',
                    'Configuração completa do servidor',
                    'Canais organizados',
                    'Suporte por 30 dias'
                ],
                delivery: '1 a 3 dias'
            }
        ],
        image: '🎮'
    },
    'servidor-premium': {
        title: 'Servidor Premium',
        description: 'Todos os bots da loja configurados e personalizados.',
        options: [
            {
                type: 'PREMIUM',
                price: 'R$ 110,00',
                features: [
                    'Todos os bots da loja configurados',
                    'Personalização completa conforme desejo',
                    'Design personalizado do servidor',
                    'Canais organizados e temáticos',
                    'Sistema de cargos e permissões',
                    'Suporte completo por 2 anos',
                    'Atualizações e manutenção inclusas'
                ],
                delivery: '1 a 3 dias'
            }
        ],
        image: '⭐'
    },
    'servidor-premium-plus': {
        title: 'Servidor Premium++',
        description: 'Suporte vitalício e totalmente customizável para lojas e servidores de games.',
        options: [
            {
                type: 'PREMIUM++',
                price: 'R$ 320,00',
                features: [
                    'Tudo que os outros servidores têm',
                    'Suporte vitalício',
                    'Totalmente customizável',
                    'Ideal para loja ou servidor de games',
                    'Conta com mais de 5000 pessoas reais já configuradas',
                    'Design exclusivo e profissional',
                    'Integrações avançadas',
                    'Opção de entrega urgente (+R$ 80)'
                ],
                delivery: '8 a 10 dias (urgência +R$ 80)',
                note: 'Serviço premium com destaque especial'
            }
        ],
        image: '💎'
    }
};

// Open modal
document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const serviceCard = this.closest('.service-card');
        const serviceType = serviceCard.getAttribute('data-service');
        const service = serviceDetails[serviceType];

        if (service) {
            let optionsHtml = '';

            service.options.forEach((option, index) => {
                const isFirst = index === 0;
                optionsHtml += `
                    <div class="service-option ${isFirst ? 'active' : ''}" data-option="${index}">
                        <div class="option-header">
                            <h4 class="option-type">${option.type}</h4>
                            <div class="option-price">${option.price}</div>
                        </div>
                        <div class="option-features">
                            <ul>
                                ${option.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="option-delivery">
                            <strong>Prazo de Entrega:</strong> ${option.delivery}
                        </div>
                        ${option.note ? `<div class="option-note">${option.note}</div>` : ''}
                        <button class="btn btn-primary buy-option-btn" onclick="buyService('${serviceType}', ${index})">
                            COMPRAR ${option.type}
                        </button>
                    </div>
                `;
            });

            modalContent.innerHTML = `
                <div class="service-modal-content">
                    <div class="service-modal-header">
                        <span class="service-emoji">${service.image}</span>
                        <h2>${service.title}</h2>
                    </div>
                    <div class="service-modal-body">
                        <p class="service-description">${service.description}</p>

                        ${service.options.length > 1 ? `
                            <div class="options-tabs">
                                ${service.options.map((option, index) => `
                                    <button class="option-tab ${index === 0 ? 'active' : ''}" data-option="${index}">
                                        ${option.type}
                                    </button>
                                `).join('')}
                            </div>
                        ` : ''}

                        <div class="service-options">
                            ${optionsHtml}
                        </div>

                        <div class="service-actions">
                            <button class="btn btn-secondary" onclick="closeModal()">
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            `;

            // Add event listeners for option tabs
            if (service.options.length > 1) {
                document.querySelectorAll('.option-tab').forEach(tab => {
                    tab.addEventListener('click', function() {
                        const optionIndex = this.getAttribute('data-option');

                        // Update tab states
                        document.querySelectorAll('.option-tab').forEach(t => t.classList.remove('active'));
                        document.querySelectorAll('.service-option').forEach(o => o.classList.remove('active'));

                        this.classList.add('active');
                        document.querySelector(`.service-option[data-option="${optionIndex}"]`).classList.add('active');
                    });
                });
            }

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Botão RELAXE
relaxeBtn.addEventListener('click', function() {
    relaxeTab.classList.add('active');
    relaxeBtn.style.display = 'none';

    // Feedback visual
    this.style.transform = 'scale(1.1)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
});

// Minimizar aba RELAXE
minimizeRelaxeBtn.addEventListener('click', function() {
    relaxeTab.classList.toggle('minimized');

    if (relaxeTab.classList.contains('minimized')) {
        this.innerHTML = '<i class="fas fa-expand"></i>';
    } else {
        this.innerHTML = '<i class="fas fa-minus"></i>';
    }
});

// Fechar aba RELAXE
closeRelaxeTabBtn.addEventListener('click', function() {
    relaxeTab.classList.remove('active');
    relaxeTab.classList.remove('minimized');
    relaxeBtn.style.display = 'flex';
    minimizeRelaxeBtn.innerHTML = '<i class="fas fa-minus"></i>';

    // Pausar o vídeo quando fechar
    const iframe = document.getElementById('lofi-iframe');
    if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = currentSrc;
    }
});

// Drag and drop para a aba RELAXE
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

const relaxeTabHeader = document.querySelector('.relaxe-tab-header');

relaxeTabHeader.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', dragEnd);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === relaxeTabHeader) {
        isDragging = true;
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();

        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, relaxeTab);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}

function buyService(serviceType, optionIndex) {
    closeModal();
    const service = serviceDetails[serviceType];
    const option = service.options[optionIndex];
    const message = `Olá! Gostaria de comprar o serviço: ${service.title} (${option.type}) por ${option.price}.`;
    const discordUrl = `https://discord.gg/QtDWnzg7n2`;

    // Abrir Discord em nova aba
    window.open(discordUrl, '_blank');

    // Mostrar mensagem informativa
    alert(`🎯 Redirecionando para o Discord!\n\n${message}\n\nEntre no servidor e abra um ticket para finalizar sua compra.`);
}

// Snake Game
class SnakeGame {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.gridSize = 20;
        this.snake = [{ x: 10, y: 10 }];
        this.food = this.generateFood();
        this.direction = 'right';
        this.score = 0;
        this.gameRunning = false;
        this.gameSpeed = 150;

        this.bindEvents();
        this.draw();
    }

    bindEvents() {
        document.addEventListener('keydown', (e) => {
            if (!this.gameRunning) return;

            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    if (this.direction !== 'down') this.direction = 'up';
                    break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    if (this.direction !== 'up') this.direction = 'down';
                    break;
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    if (this.direction !== 'right') this.direction = 'left';
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    if (this.direction !== 'left') this.direction = 'right';
                    break;
            }
        });

        document.getElementById('start-game').addEventListener('click', () => {
            this.startGame();
        });

        document.getElementById('pause-game').addEventListener('click', () => {
            this.togglePause();
        });
    }

    generateFood() {
        const x = Math.floor(Math.random() * (this.canvas.width / this.gridSize));
        const y = Math.floor(Math.random() * (this.canvas.height / this.gridSize));
        return { x, y };
    }

    startGame() {
        this.snake = [{ x: 10, y: 10 }];
        this.direction = 'right';
        this.score = 0;
        this.food = this.generateFood();
        this.gameRunning = true;
        this.updateScore();
        this.gameLoop();
    }

    togglePause() {
        this.gameRunning = !this.gameRunning;
        if (this.gameRunning) {
            this.gameLoop();
        }
    }

    gameLoop() {
        if (!this.gameRunning) return;

        this.update();
        this.draw();

        setTimeout(() => {
            this.gameLoop();
        }, this.gameSpeed);
    }

    update() {
        const head = { ...this.snake[0] };

        switch (this.direction) {
            case 'up': head.y--; break;
            case 'down': head.y++; break;
            case 'left': head.x--; break;
            case 'right': head.x++; break;
        }

        // Check collision with walls
        if (head.x < 0 || head.x >= this.canvas.width / this.gridSize ||
            head.y < 0 || head.y >= this.canvas.height / this.gridSize) {
            this.gameOver();
            return;
        }

        // Check collision with self
        if (this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            this.gameOver();
            return;
        }

        this.snake.unshift(head);

        // Check if food is eaten
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score += 10;
            this.updateScore();
            this.food = this.generateFood();
            // Increase speed
            this.gameSpeed = Math.max(50, this.gameSpeed - 5);
        } else {
            this.snake.pop();
        }
    }

    draw() {
        // Clear canvas
        this.ctx.fillStyle = '#0F0F0F';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw snake
        this.ctx.fillStyle = '#8B5CF6';
        this.snake.forEach((segment, index) => {
            if (index === 0) {
                // Head
                this.ctx.fillStyle = '#EF4444';
            } else {
                // Body
                this.ctx.fillStyle = '#8B5CF6';
            }
            this.ctx.fillRect(
                segment.x * this.gridSize,
                segment.y * this.gridSize,
                this.gridSize - 2,
                this.gridSize - 2
            );
        });

        // Draw food
        this.ctx.fillStyle = '#EF4444';
        this.ctx.fillRect(
            this.food.x * this.gridSize,
            this.food.y * this.gridSize,
            this.gridSize - 2,
            this.gridSize - 2
        );
    }

    updateScore() {
        document.getElementById('score').textContent = this.score;
    }

    gameOver() {
        this.gameRunning = false;
        alert(`Game Over! Pontuação: ${this.score}`);
    }
}

// Initialize Snake Game
const snakeGame = new SnakeGame();

// Contact Form with Discord Webhook
const contactForm = document.getElementById('contact-form');
const webhookUrl = 'https://discord.com/api/webhooks/1403607159400300596/IFzCmhK0QoWg_Ndcn18HTL-ofwFjZo3eVgumBiriPGcVGzo5wco0Ng-zjNJ3nNlGMkgU';

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');

    // Create Discord embed
    const embed = {
        title: '🎯 Nova Mensagem da SAIMON DEV STORE',
        color: 0x8B5CF6,
        fields: [
            {
                name: '👤 Nome',
                value: name,
                inline: true
            },
            {
                name: '📧 Email',
                value: email,
                inline: true
            },
            {
                name: '🛠️ Serviço de Interesse',
                value: service || 'Não especificado',
                inline: false
            },
            {
                name: '💬 Mensagem',
                value: message,
                inline: false
            }
        ],
        timestamp: new Date().toISOString(),
        footer: {
            text: 'SAIMON DEV STORE - Formulário de Contato'
        }
    };

    const webhookData = {
        embeds: [embed]
    };

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookData)
        });

        if (response.ok) {
            alert('✅ Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        } else {
            throw new Error('Erro ao enviar mensagem');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('❌ Erro ao enviar mensagem. Tente novamente ou entre em contato pelo Discord.');
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .quality-card, .stat').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 15, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
    }
});

// Add CSS for modal content
const style = document.createElement('style');
style.textContent = `
    .service-modal-content {
        color: var(--light-color);
    }

    .service-modal-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(139, 92, 246, 0.3);
    }

    .service-emoji {
        font-size: 3rem;
    }

    .service-modal-header h2 {
        color: var(--primary-color);
        font-size: 2rem;
    }

    .service-description {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        color: #CCCCCC;
    }

    .options-tabs {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 2rem;
        justify-content: center;
    }

    .option-tab {
        padding: 0.8rem 1.5rem;
        background: var(--glass-bg);
        border: 2px solid var(--glass-border);
        border-radius: 25px;
        color: var(--light-color);
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Rajdhani', sans-serif;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .option-tab:hover {
        border-color: var(--primary-color);
        transform: translateY(-2px);
    }

    .option-tab.active {
        background: var(--purple-gradient);
        border-color: var(--primary-color);
        box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
    }

    .service-options {
        margin-bottom: 2rem;
    }

    .service-option {
        display: none;
        animation: fadeIn 0.5s ease;
    }

    .service-option.active {
        display: block;
    }

    .option-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: rgba(139, 92, 246, 0.1);
        border-radius: 10px;
        border: 1px solid rgba(139, 92, 246, 0.2);
    }

    .option-type {
        color: var(--primary-color);
        font-size: 1.3rem;
        margin: 0;
    }

    .option-price {
        color: var(--accent-color);
        font-weight: 700;
        font-size: 1.5rem;
    }

    .option-features {
        margin-bottom: 1.5rem;
    }

    .option-features h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .option-features ul {
        list-style: none;
        margin-bottom: 1rem;
    }

    .option-features li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        color: #CCCCCC;
    }

    .option-features i {
        color: var(--accent-color);
    }

    .option-delivery {
        margin-bottom: 1rem;
        padding: 0.8rem;
        background: rgba(239, 68, 68, 0.1);
        border-radius: 8px;
        border: 1px solid rgba(239, 68, 68, 0.2);
        color: #CCCCCC;
    }

    .option-note {
        margin-bottom: 1.5rem;
        padding: 0.8rem;
        background: rgba(255, 215, 0, 0.1);
        border-radius: 8px;
        border: 1px solid rgba(255, 215, 0, 0.2);
        color: #FFD700;
        font-style: italic;
    }

    .buy-option-btn {
        width: 100%;
        margin-bottom: 1rem;
    }

    .service-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .options-tabs {
            flex-direction: column;
            align-items: center;
        }

        .option-tab {
            width: 100%;
            max-width: 200px;
        }

        .option-header {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
        }

        .service-actions {
            flex-direction: column;
        }
    }
`;
document.head.appendChild(style);
