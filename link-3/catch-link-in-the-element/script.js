document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded() {
    const content = document.getElementById("contents");
    content.addEventListener("click", exitQuestion);
    
    function exitQuestion(event){
        const target = event.target.closest("a");
        if (target !== null) {
            userChoice = confirm("Are you sure you want to live this page?");
            if (!(userChoice)){
                event.preventDefault();
            }
        }
    }
}
