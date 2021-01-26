document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded() {
    const tree = document.getElementById("tree");
    tree.addEventListener("click", openMenu);

    function openMenu(event){
        const target = event.target.closest("span");
        const listOfMenu = event.target.parentNode.querySelector("ul");
        if (target !== null) {
            listOfMenu.hidden = !listOfMenu.hidden
        }
    }
}