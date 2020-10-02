//==============VUE!==============
Vue.component('food-card', {
    template: "#food-card-template",
    props: ['image-url', 'title', 'price', 'description']
})
Vue.component('footer-col', {
    template: "#footer-col-template"
})
Vue.component('social-icon', {
    template: "#social-icon-template",
    props: ['idClass', 'url']
})
Vue.component('review-card', {
    template: "#review-card-template",
    props: ['stars', 'image-url', 'review']
})

// GET JSON FILE FOR VUE DATA
var request = new XMLHttpRequest();
request.open("GET", "../JSON/vueData.json", false);
request.send(null);
var vueData = JSON.parse(request.responseText);


mainApp = new Vue({
    el: "#app",
    data: vueData
})


// ==============A Function==============
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}


// ==============Driver Code==============

//For review boxes
const reviewBoxLocations=[
    {
        style:'top-left',
        top:'0rem',
        left:'10rem'
    },
    {
        style: 'top-left',
        top: '17rem',
        left: '0rem'
    },
    {
        style: 'top-left',
        top: '34rem',
        left: '10rem'
    },
    {
        style: 'top-right',
        top: '0rem',
        right: '10rem'
    },
    {
        style: 'top-right',
        top: '17rem',
        right: '0rem'
    },
    {
        style: 'top-right',
        top: '34rem',
        right: '10rem'
    },
]
const reviewBoxes = document.querySelectorAll(".reviewBox")
reviewBoxes.forEach((review, i) => {
    if(reviewBoxLocations[i].style === 'top-left'){
        review.style.top = reviewBoxLocations[i].top;
        review.style.left = reviewBoxLocations[i].left;
    } else if (reviewBoxLocations[i].style === 'top-right'){
        review.style.top = reviewBoxLocations[i].top;
        review.style.right = reviewBoxLocations[i].right;
    }else{
        console.log("OH Snap you fucked up")
    }
    
});

// PARALAX
const imagery = document.querySelector("#imagery");
window.addEventListener("scroll",
    ()=>{
        imagery.style.top = (scrollY/-3)+"px";
    },
    {
        capture: true,
        passive: true
    }
);