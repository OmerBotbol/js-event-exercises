document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded() {
    document.addEventListener("mouseover" ,showTooltip)
    document.addEventListener("mouseout" ,hideTooltip)
    const tooltip = document.createElement("div")

    function showTooltip(event){
        const target = event.target;
        const location = event.target.closest("button");
        console.log(location);
        if (location){
            tooltip.setAttribute("class", "tooltip");
            tooltip.textContent = location.getAttribute("data-tooltip");
            document.body.append(tooltip);
        }

        const coords = target.getBoundingClientRect();

        let left = coords.left + (target.offsetWidth - tooltip.offsetWidth) / 2;
        if (left < 0) {
            left = 0; 
        }
        let top = coords.top - tooltip.offsetHeight - 5;
        if (top < 0) { 
            top = coords.top + target.offsetHeight + 5;
        }

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    }

    function hideTooltip(event){
        const location = event.target.closest("button");
        console.log(location);
        if (!(location)){
            tooltip.remove();
        }
    }
}