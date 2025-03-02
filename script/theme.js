
const colors = ["#EEF2FF", "#FFEAF2", "#F4F7FF", "#FFF0E0", "#E6FAE8", "#F4F7FF", "#DCEAFF", "#FFEEDD", "#F4F7FF"];
let i = 0;

document.getElementById("theme-btn").addEventListener("click", function(){
    document.body.style.backgroundColor = colors[i];
    i = (i + 1);
})