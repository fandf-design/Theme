(function(){
  const root = document.documentElement;

  function setTheme(t){
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('fnf_theme', t); } catch(e){}
  }

  // init
  (function(){
    let t = null;
    try { t = localStorage.getItem('fnf_theme'); } catch(e){}
    if(!t){
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      t = prefersDark ? 'dark' : 'light';
    }
    setTheme(t);
  })();

  // toggle
  document.addEventListener('click', function(e){
    const btn = e.target.closest('[data-theme-toggle]');
    if(!btn) return;
    e.preventDefault();
    const current = root.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // search open
  document.addEventListener('click', function(e){
    const btn = e.target.closest('[data-search-open]');
    if(!btn) return;
    e.preventDefault();
    const el = document.querySelector('[data-search-modal]');
    if(el) el.setAttribute('data-open','true');
    const input = document.querySelector('[data-search-input]');
    if(input) input.focus();
  });
  document.addEventListener('click', function(e){
    const btn = e.target.closest('[data-search-close]');
    if(btn){
      e.preventDefault();
      const el = document.querySelector('[data-search-modal]');
      if(el) el.setAttribute('data-open','false');
    }
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      const el = document.querySelector('[data-search-modal]');
      if(el) el.setAttribute('data-open','false');
    }
  });
})();