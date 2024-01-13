window.k_init = window.k_init || [];
k_init.push({
    id: process.env.REACT_APP_BLOCK_ID,
    type: 'bn',
    domain: process.env.REACT_APP_BLOCK_DOMAIN,
    refresh: false,
    next: 0
});

var s = document.createElement('script');
s.setAttribute('async', true);
s.setAttribute('charset', 'utf-8');
s.setAttribute('data-cfasync', false);
s.src = process.env.REACT_APP_BLOCK_SRC; 
document.head && document.head.appendChild(s);