document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded() {
    const tabs = document.getElementsByClassName("pane");
    for (const tab of tabs) {
        tab.firstElementChild.addEventListener("click", closeTab);
        function closeTab(){
            tab.remove();
        }
    }
}

