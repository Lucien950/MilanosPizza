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

mainApp = new Vue({
    el: "#app",
    data: {
        foodItems: [
            {
                imageURL: './images/slice.png',
                title: 'Pizza',
                price: '$40.99',
                description: 'Some delicious pizza to eat'
            },
            {
                imageURL: './images/slice.png',
                title: 'Other Food',
                price: '$32.42',
                description: 'This is also very good'
            },
            {
                imageURL: './images/salad.png',
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
                'imageurl': "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
                'review': "This was a very ok pizza I really oked with it could do with more parmesean because I am a freak"
            },
            {
                'stars': 4,
                'imageurl': "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
                'review': "This was a very ok pizza I really oked with it could do with more parmesean because I am a freak"
            }
        ],
        aboutUsImages:[
            {
                'imageURL':'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                'alt':'tree'
            },
            {
                'imageURL': 'https://www.w3schools.com/w3css/img_lights.jpg',
                'alt': 'Lights'
            },
            {
                'imageURL': 'https://45jo5o2sxknq2fucgi3kwxpa-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/4-3-Aspect-Ratio-vs-185-235-1024x436.jpg',
                'alt': 'Sunny'
            }
        ]
    }
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
        top:'9rem',
        left:'5rem'
    },
    {
        style: 'top-right',
        top:'12rem',
        right:'6rem'
    }
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
window.addEventListener("scroll", ()=>{
    imagery.style.top = (scrollY/-3)+"px";
});