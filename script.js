function toggleMenu(){
  document.getElementById('nav').classList.toggle('show');
}
function toggleLanguage(){
  alert('Add your language-switching system here.');
}
document.querySelectorAll('#nav a').forEach(a=>{
  a.addEventListener('click',()=>document.getElementById('nav').classList.remove('show'));
});
