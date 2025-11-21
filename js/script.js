// small helpers
    document.getElementById('yr').textContent = new Date().getFullYear();

    // Mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    menuToggle.addEventListener('click', ()=>{
      if(mainNav.style.display === 'flex') mainNav.style.display = '';
      else mainNav.style.display = 'flex';
      mainNav.style.flexDirection = 'column';
      mainNav.style.position = 'absolute';
      mainNav.style.right = '20px';
      mainNav.style.top = '72px';
      mainNav.style.background = 'white';
      mainNav.style.padding = '12px';
      mainNav.style.borderRadius = '10px';
      mainNav.style.boxShadow = '0 10px 30px rgba(2,6,23,0.08)';
    });

    // fade-in on scroll
    const fades = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show') })
    },{threshold:0.12});
    fades.forEach(f=>obs.observe(f));

    // Gallery population & filter
    const galleryData = [
      {cat:'servico',sub:'eletrica',title:'Instalação de quadro elétrico',img:'assets/qdc.png'},
      {cat:'produto',sub:'informatica',title:'Notebook',img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop'},
      {cat:'servico',sub:'informatica',title:'Configuração de rede',img:'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'},
      {cat:'produto',sub:'eletrica',title:'Disjuntores',img:'assets/disjuntores.png'},
      {cat:'servico',sub:'eletrica',title:'Inspeção de segurança',img:'assets/inspecao.png'},
      {cat:'produto',sub:'informatica',title:'SSD 960GB - pronta entrega',img:'assets/ssd.png'}
    ];
    const gallery = document.getElementById('gallery');
    function renderGallery(filter){
      gallery.innerHTML='';
      galleryData.filter(i=>filter==='all' || i.cat===filter || i.sub===filter).forEach(it=>{
        const div = document.createElement('div');div.className='gallery-item card';
        div.innerHTML = `<img src="${it.img}" alt="${it.title}"><h4 style=\"margin:10px 0 6px\">${it.title}</h4><div class=\"muted\">${it.cat==='servico'?'Serviço':'Produto'} · ${it.sub}</div><div style=\"margin-top:10px\"><a class=\"btn secondary\" href=\"#\">Comprar / Ver mais detalhes</a></div>`;
        gallery.appendChild(div);
      });
    }
    renderGallery('all');
    document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>renderGallery(b.dataset.filter)));

    // Testimonials carousel
    const testi = [
      {name:'Mariana R.',stars:5,text:'Serviço rápido e profissional. Recomendado!'},
      {name:'Batata da Hora',stars:5,text:'Resolveram meu problema de curto em pouco tempo com garantia.'},
      {name:'João P.',stars:5,text:'Atualizaram o SSD do meu notebook e ficou como novo.'}
    ];
    const testiSlides = document.getElementById('testiSlides');
    function renderTesti(){
      testiSlides.innerHTML='';
      testi.forEach(t=>{
        const s = document.createElement('div'); s.style.minWidth='100%'; s.style.padding='18px';
        s.innerHTML = `<div style=\"display:flex;gap:12px;align-items:center\"><div style=\"width:56px;height:56px;border-radius:999px;background:var(--glass);display:flex;align-items:center;justify-content:center;font-weight:800\">${t.name.charAt(0)}</div><div><strong>${t.name}</strong><div class=\"stars\">${'★'.repeat(t.stars)}</div></div></div><p style=\"margin-top:12px\">${t.text}</p>`;
        testiSlides.appendChild(s);
      });
    }
    renderTesti();
    let testiIndex = 0;
    function showTesti(i){ testiSlides.style.transform = `translateX(-${i*100}%)`; }
    document.getElementById('prevTesti').addEventListener('click', ()=>{ testiIndex = (testiIndex-1+testi.length)%testi.length; showTesti(testiIndex); });
    document.getElementById('nextTesti').addEventListener('click', ()=>{ testiIndex = (testiIndex+1)%testi.length; showTesti(testiIndex); });

    // Lead form handling (simulated save to dados.json style)
    const leadForm = document.getElementById('leadForm');
    leadForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const whatsapp = document.getElementById('whatsapp').value.trim();
      const type = document.getElementById('type').value;
      const message = document.getElementById('message').value.trim();
      if(!name||!whatsapp){document.getElementById('leadResult').textContent = 'Preencha nome e WhatsApp.';return}
      // Simulate saving — in production, send to server or save to dados.json via backend/API
      document.getElementById('leadResult').textContent = 'Enviando...';
      setTimeout(()=>{
        document.getElementById('leadResult').textContent = 'Orçamento solicitado! Em breve entraremos em contato pelo WhatsApp.';
        leadForm.reset();
      },900);
    });

    // Small accessibility: keyboard scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', (ev)=>{
        const id = a.getAttribute('href');
        if(id.length>1){
          ev.preventDefault();
          const el = document.querySelector(id);
          if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        }
      });
    });

    // lightweight analytics hook (console)

    console.log('HL Serviços — wireframe carregado');
