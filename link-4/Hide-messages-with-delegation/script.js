document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded() {
    const container = document.getElementById("container");
    container.addEventListener("click", removeTab);

    function removeTab(event){
        const target = event.target.closest("button");
        if(target !== null){
            event.target.closest("div").remove();
        }
    }
}
