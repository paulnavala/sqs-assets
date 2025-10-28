document.addEventListener("alpine:init",()=> {
  Alpine.data("pricing",()=>({
    period:"monthly",
    toggle(){this.period=this.period==="monthly"?"yearly":"monthly"},
    price(t){return this.period==="monthly"?t.monthly:t.yearly}
  }));
});
