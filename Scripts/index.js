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
    props: ['stars', 'imageurl', 'review']
})

const bill = "../images/bill.jpg"

var vueData = {
    foodItems: [
        {
            imageURL: '../images/slice.png',
            title: 'Pizza',
            price: '$40.99',
            description: 'Some delicious pizza to eat'
        },
        {
            imageURL: '../images/slice.png',
            title: 'Other Food',
            price: '$32.42',
            description: 'This is also very good'
        },
        {
            imageURL: '../images/salad.png',
            title: 'Vegan Menu',
            price: 'Price Varies',
            description: 'For Vegan people'
        }
    ],
    socialItems: [
        {
            idClass: "fa-twitter-square",
            url: "https://twitter.com/milanopizza1"
        },
        {
            idClass: "fa-facebook-square",
            url: "https://www.facebook.com/MilanoPizzeriaBarrhaven/"
        },
        {
            idClass: "fa-instagram-square",
            url: "https://www.instagram.com/milanopizza1/"
        },
        {
            idClass: "fa-google-plus-square",
            url: "https://plus.google.com/113931051887402511809"
        },
        {
            idClass: "fa-yelp",
            url: "https://www.yelp.ca/biz/milano-pizzeria-nepean"
        },
    ],
    reviews: [
        {
            'stars': 5,
            'imageurl': bill,
            'review': "This was a very ok pizza I really oked with it could do with more parmesean because I am a freak"
        },
        {
            'stars': 4,
            'imageurl': bill,
            'review': "This was a very ok pizza I really oked with it could do with more parmesean because I am a freak"
        },
        {
            'stars': 5,
            'imageurl': bill,
            'review': "This was a very ok pizza I really oked with it could do with more parmesean because I am a freak"
        },
        {
            'stars': 5,
            'imageurl': bill,
            'review': "This was a very ok pizza I really oked with it could do with more parmesean because I am a freak"
        },
        {
            'stars': 5,
            'imageurl': bill,
            'review': "This was a very ok pizza I really oked with it could do with more parmesean because I am a freak"
        },
        {
            'stars': 5,
            'imageurl': bill,
            'review': "This was a very ok pizza I really oked with it could do with more parmesean because I am a freak"
        }
    ],
    aboutUsImages: [
        {
            'imageURL': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            'alt': 'tree'
        },
        {
            'imageURL': 'https://www.w3schools.com/w3css/img_lights.jpg',
            'alt': 'Lights'
        },
        {
            'imageURL': '../images/test image.jpg',
            'alt': 'Sunny'
        }
    ]
}

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