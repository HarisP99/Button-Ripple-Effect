const btnE1 = document.querySelector(".btn");


btnE1.addEventListener("mouseover", ()=>{
    const x = (event.pageX - btnE1.offsetLeft);
    const y = (event.pageY - btnE1.offsetLeft);

btnE1.style.setProperty("--xPos", x + "px");
btnE1.style.setProperty("--yPos", y + "px");    
});