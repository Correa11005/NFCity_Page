// Cambia el número en config.js y se actualizan todos los botones
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function(a){a.href=a.href.replace(/wa\.me\/\d+/,'wa.me/'+NFCITY.whatsapp)});
(function(){
var fl=document.getElementById('flip'),st=fl.parentElement,flipped=false,rx=0,ry=0;
function paint(){fl.style.transform='rotateX('+rx+'deg) rotateY('+(ry+(flipped?180:0))+'deg)'}
st.addEventListener('pointermove',function(e){var r=st.getBoundingClientRect();ry=((e.clientX-r.left)/r.width-.5)*24;rx=-((e.clientY-r.top)/r.height-.5)*18;paint()});
st.addEventListener('pointerleave',function(){rx=0;ry=0;paint()});
fl.addEventListener('click',function(){flipped=!flipped;paint()});
var d=document.getElementById('dlg'),big=document.getElementById('big');
document.querySelectorAll('.gal button').forEach(function(b){b.addEventListener('click',function(){var i=b.querySelector('img');big.src=i.src;big.alt=i.alt;d.showModal()})});
d.addEventListener('click',function(){d.close()});
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();var f=e.target;
var t='Hola NFCity, soy '+f.n.value+' de '+f.b.value+'. Me interesan '+f.q.value+' tarjeta(s) NFC.'+(f.m.value?' '+f.m.value:'');
window.open('https://wa.me/'+NFCITY.whatsapp+'?text='+encodeURIComponent(t),'_blank')});
})();
