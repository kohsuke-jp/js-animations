const callback = function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("displayed");
        } else {
            entry.target.classList.remove("displayed");
        }
    });
};

const options = {
    threshold: 1
};

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(callback, options);
    
    document.querySelectorAll(".box").forEach((box) => {
        observer.observe(box);
    });
});