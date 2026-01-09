const accordionMenus = document.querySelectorAll(".list-item");
accordionMenus.forEach((accordionMenu) => {
    accordionMenu.addEventListener("click", () => { 
        const content = accordionMenu.querySelector(".list-content");
        content.classList.toggle("active");
        if (content.classList.contains("active")) {
            content.style.height = content.scrollHeight + "px";
        } else {
            content.style.height = "0px";
        }     
    });
});