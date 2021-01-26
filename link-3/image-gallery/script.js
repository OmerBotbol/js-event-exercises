document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded() {
    const thumbs = document.getElementById("thumbs");
    const largeImg = document.getElementById("largeImg");
    thumbs.addEventListener("click", changeLrgImg);
    
    function changeLrgImg(event){
        event.preventDefault();
        const target = event.target.closest("a").getAttribute("href");
        largeImg.setAttribute("src", target);
    }
}
