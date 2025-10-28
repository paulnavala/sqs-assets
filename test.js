// Proves JS loads site-wide
console.log("✅ global.min.js loaded");
document.addEventListener("DOMContentLoaded",()=> {
  document.querySelectorAll("[data-test-click]").forEach(el=>{
    el.addEventListener("click",()=>alert("✅ External JS executed!"));
  });
});
