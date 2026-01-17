const colors = ["red","blue","black","purple","pink","green","yellow"]
const button= document.getElementById("btn")
button.addEventListener("click", function() {
    const randomindex = Math.floor(Math.random()*colors.length);
    const randomcolor = colors[randomindex]
    document.body.style.backgroundColor =randomcolor;

})