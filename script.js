function menu(){
  const n=document.getElementById("nav");
  if(n)n.classList.toggle("show");
}
function choose(el,group){
  document.querySelectorAll(group).forEach(x=>x.classList.remove("selected"));
  el.classList.add("selected");
}
function saveScenario(name){
  localStorage.setItem("scenario",name);
  document.getElementById("scenarioInfo").textContent="Skenario dipilih: "+name;
}
function loadScenario(){
  const s=localStorage.getItem("scenario");
  const el=document.getElementById("scenarioInfo");
  if(el && s)el.textContent="Skenario aktif: "+s;
}
function chooseAction(el){
  choose(el,".action");
  localStorage.setItem("vrAction",el.textContent.trim());
  setTimeout(()=>alert("Pilihanmu dicatat. Ingat: jangan ikut melakukan bullying dan cari bantuan orang dewasa tepercaya jika situasi tidak aman."),100);
}
let scores=[0,0,0,0];
function setScore(i,v,el){
  scores[i]=v;
  el.parentElement.querySelectorAll(".star").forEach(x=>x.classList.remove("selected"));
  el.classList.add("selected");
}
function calculate(){
  if(scores.includes(0)){alert("Isi semua penilaian terlebih dahulu.");return}
  const total=scores.reduce((a,b)=>a+b,0);
  document.getElementById("score").textContent=total+" / 20";
  document.getElementById("result").classList.add("show");
}
function finish(){
  const n=document.querySelectorAll(".commit input:checked").length;
  if(n<3){alert("Pilih minimal 3 komitmen.");return}
  document.getElementById("success").classList.add("show");
  localStorage.setItem("completed","true");
}
window.addEventListener("DOMContentLoaded",loadScenario);
