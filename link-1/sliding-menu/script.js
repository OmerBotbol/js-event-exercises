document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded() {
    const close = document.getElementById("closed");
    const open = document.getElementById("opened");
    close.addEventListener("click", showTheText);
    open.addEventListener("click", hideTheText);
    
    function hideTheText(){
        const list = document.querySelector("ul");
        open.style.display = "none";
        close.removeAttribute("style")
        list.removeAttribute("style")
    }

    function showTheText(){
        const list = document.querySelector("ul");
        close.style.display = "none";
        list.style.display = "none";
        open.removeAttribute("style")
    }
}
