function toggleMenu() {
      const menu = document.getElementById('nav-menu');
      menu.classList.toggle('active');
    }

document.getElementById("orcamentoForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const nome = event.target.nome.value;
      const telefone = event.target.telefone.value;
      const cidade = event.target.cidade.value;
      const servico = event.target.servico.value;

      const mensagem = `Olá! Me chamo ${nome}, sou da cidade ${cidade}, e gostaria de solicitar um orçamento para o serviço de ${servico}. Meu telefone é ${telefone}.`;

      const linkWhatsApp = `https://wa.me/5521992075366?text=${encodeURIComponent(mensagem)}`;
      window.open(linkWhatsApp, '_blank');
    });