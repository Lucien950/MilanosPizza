//==============VUE!==============
Vue.component('food-card', {
    template: "#food-card-template",
    props: ['food-card-data'],
    methods:{
        openOrderModalEmit(){
            this.$emit('open-order-modal');
        }
    }
})
Vue.component('footer-col', {
    template: "#footer-col-template"
})
Vue.component('social-icon', {
    template: "#social-icon-template",
    props: ['social-icon-data']
})
Vue.component('review-card', {
    template: "#review-card-template",
    props: ['review-card-data']
})
Vue.component('order-modal', {
    template: '#order-modal-template',
    methods: {
        close() {
            this.$emit('close');
        }
    }
})

// GET JSON FILE FOR VUE DATA
var request = new XMLHttpRequest();
request.open("GET", "./JSON/vueData.json", false);
request.send(null);
var vueData = JSON.parse(request.responseText);


mainApp = new Vue({
    el: "#app",
    data: vueData,
    methods: {
        showOrderModal() {
            this.orderModalVisible = true;
            document.querySelector('body').id = 'modalOpen';
        },
        closeOrderModal() {
            this.orderModalVisible = false;
            document.querySelector('body').id = '';
        }
    }
})


// ==============A Function==============
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}


// ==============Driver Code==============

//For review boxes
var requestReview = new XMLHttpRequest();
requestReview.open("GET", "./JSON/reviewBoxLocations.json", false);
requestReview.send(null);
const reviewBoxLocations = JSON.parse(requestReview.responseText);

const reviewBoxes = document.querySelectorAll(".reviewBox")
reviewBoxes.forEach((review, i) => {
    if(reviewBoxLocations[i].style === 'top-left'){
        review.style.top = reviewBoxLocations[i].top;
        review.style.left = reviewBoxLocations[i].left;
    } else if (reviewBoxLocations[i].style === 'top-right'){
        review.style.top = reviewBoxLocations[i].top;
        review.style.right = reviewBoxLocations[i].right;
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

// DONT SCROLL BUTTONS
const orderButtons = document.querySelectorAll('#orderButton');
orderButtons.forEach((button)=>{
    window.setTimeout(function () {
        button.focus({preventScroll:true});
    }, 0);
})


//MODAL THINGS
//PIZZA SIZE
var selectedSize = 1;
const sizeButtons = document.getElementById("sizeButtonRow").children
function updateSize(newSize){
    for(i = 1; i<=3; i++){
        const button = sizeButtons[i-1]
        if (i == newSize) {
            button.classList.add("selectedSizeButton");
        }
        else {
            button.classList.contains("selectedSizeButton") ? button.classList.remove("selectedSizeButton") : null;
        }
    }
}
updateSize(2);

//PIZZA SELECTION
var selectedItem = 1;
const endCount = 3;
function updateSelection(direction){
    if(direction==="up"){
        selectedItem !== 3 ? selectedItem++ : selectedItem = 1;
    }else if(direction==="down"){
        selectedItem !== 1 ? selectedItem-- : selectedItem = endCount;
    }
}