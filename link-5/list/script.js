document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded() {
    const ul = document.getElementById("ul");
    ul.addEventListener("click", markUpLine);

    function markUpLine(event){
        const target = event.target.closest("li");
        if(event.ctrlKey || event.metaKey){
            ctrlSelect(target)
        } else {
            singleSelect(target)
        }
        
    }
    
    function ctrlSelect(target){
        target.setAttribute("class", "selected");
    }
    
    function singleSelect(target){
        let sign = ul.getAttribute("class");
        ul.setAttribute("class", "marked")
        if (target && sign){
            const items = target.parentNode.getElementsByTagName("li");
            for (const item of items) {
                item.removeAttribute("class")
            }
            target.setAttribute("class", "selected");
            ul.setAttribute("class", "marked")
        } else if(target && (!sign)){
            target.setAttribute("class", "selected");
            ul.setAttribute("class", "marked")
        }
    }
}