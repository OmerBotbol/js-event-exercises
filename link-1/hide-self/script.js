document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded() {
    const hider = document.getElementById("hider");
    hider.addEventListener("click", hideTheButton);
    
    function hideTheButton(){
        document.body.remove(hider);
    }
}
