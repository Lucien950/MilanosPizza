const anchors = document.querySelectorAll("#linkRow a");
const pages = document.querySelectorAll(".page");
console.log("anchors", anchors);
console.log("pages", pages);

const pageObserver = new IntersectionObserver(
    (entries, pageObserver)=>{
        entries.forEach(entry => {
            //console.log(entry.target.id, entry.isIntersecting ? "Is Entering" : "Is Leaving");
            const anchorNum = Array.from(pages).findIndex(page => page == entry.target);
            const pageNavAnchor = anchors[anchorNum];

            if(entry.isIntersecting){
                pageNavAnchor.classList.add("activeNav");
            } 
            else if (pageNavAnchor.classList.contains("activeNav")){
                pageNavAnchor.classList.remove("activeNav");
            }
        })
    },
    {
        rootMargin:"-50%"
    }
)
pages.forEach(page => {
    pageObserver.observe(page);
    console.log(page, "is being observed")
})


// HEADER
const header = document.querySelector("#backgroundImage");
const headerObserver = new IntersectionObserver(
    //MAIN FUNCTION
    function (entries, headerObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("navScrolled");
            } else {
                header.classList.remove("navScrolled");
            }
        })
    },
    // OPTIONS
    {
        root: null,
        threshhold: 0,
        rootMargin: "-49.2%"
    }
);

headerObserver.observe(document.querySelector("#mainText"));