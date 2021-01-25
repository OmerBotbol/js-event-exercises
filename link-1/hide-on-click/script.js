document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded() {
    const hider = document.getElementById("hider");
    hider.addEventListener("click", hideTheText);
    
    function hideTheText(){
        let text = document.getElementById("text");
        text.textContent = "";
    }
}
