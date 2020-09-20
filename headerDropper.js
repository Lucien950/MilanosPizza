const anchors = document.querySelectorAll("#linkRow a");
console.log(anchors);



// HEADER
const header = document.querySelector("nav");
const headerActivator = document.querySelector("#mainText");
const headerOptions = {
    root:null,
    threshhold:0,
    rootMargin:"-49.2%"
};
const headerObserver = new IntersectionObserver(function (entries, headerObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("navScrolled");
        } else {
            header.classList.remove("navScrolled");
        }
    })
}, headerOptions);
headerObserver.observe(headerActivator);