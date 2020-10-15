//==============VUE!==============
Vue.component('food-card', {
    template: "#food-card-template",
    props: ['food-card-data'],
    methods: {
        open(menu) {
            this.$emit('open-emit-' + menu);
        },
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

Vue.component('commmunity-involvement-row', {
    template:"#commmunity-involvement-row-template",
    props: ['community-item']
})
Vue.component('event-row',{
    template:'#event-row-template',
    props:['event-row-data']
})
Vue.component('menu-modal', {
    template:'#menu-modal-template',
    props:['type'],
    methods: {
        close() {
            this.$emit('close-emit');
        },
    }
})
console.log("eat my ass");



// GET JSON FILE FOR VUE DATA
var vueData = "";
try{
    var request = new XMLHttpRequest();
    request.open("GET", "./JSON/vueData.json", false);
    request.send(null);
    vueData = JSON.parse(request.responseText);
}catch(err){
    vueData = {
        "foodItems": [
            {
                "imageURL": "./images/slice.png",
                "title": "Pizza",
                "price": "Price Varies",
                "description": "Some delicious pizza to eat",
                "menu": "pizza"
            },
            {
                "imageURL": "./images/poutine.png",
                "title": "Other Food",
                "price": "Price Varies",
                "description": "Other Quality Food",
                "menu": "menu"
            },
            {
                "imageURL": "./images/coke.png",
                "title": "Specials & Drinks",
                "price": "Price Varies",
                "description": "Discounts for everyone!",
                "menu": "specials"
            },
            {
                "imageURL": "./images/salad.png",
                "title": "Vegan Menu",
                "price": "Price Varies",
                "description": "For Vegan people",
                "menu": "vegan"
            }
        ],
        "communityRowItems": [
            {
                "left": false,
                "title": "Chefs for charity",
                "text": "12 chefs, 12 months, 12 charities. Our Chefs for Charity campaign is something invented right here in Milanos, and we are very proud of it. Each month we get a professional chef to create a pizza that we will feature on our menu, with the proceeds of those sales going to the charity of their choice!",
                "imageUrl": "https://www.milanopizza.ca/images/12chefsforcharitylogo.png",
                "imageAlt": "Chefs for Charity Logo",
                "buttonLink": "https://www.milanopizza.ca/about.php"
            },
            {
                "left": true,
                "title": "Bruyère foundation",
                "text": "For the past few years we at Milanos have been working closely with the Bruyere Foundation, holding many fundraisers and helping them hands on in their Bruyere care program. The Bruyere Foundation works closely with local hospitals, and its goal is to provide high quality hospital, residential, and community services.",
                "imageUrl": "https://www.obj.ca/sites/default/files/styles/article_main/public/2018-12/Untitled%20design_0.jpg?itok=Dv3MGX4t",
                "imageAlt": "Bruyère foundation Logo",
                "buttonLink": "https://www.bruyere.org/en/about-bruyere"
            },
            {
                "left": false,
                "title": "OPIN concept",
                "text": "We also cooperate with OPIN Concept, as we have made multiple donations to them and have catered many events to support them free of charge. They are an Ottawa based business that helps other local businesses like ourselves, build greater online presences through web management and development.",
                "imageUrl": "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/7666/logo.png",
                "imageAlt": "OPIN Logo",
                "buttonLink": "https://opin.ca/"
            },
            {
                "left": true,
                "title": "Ottawa humane society",
                "text": "The Ottawa Humane Society is one of Ottawa’s leading charities and works tirelessly to protect Ottawa's animals. They provide medical treatment, shelter, and care for over 8,000 homeless animals each year. Here at Milanos we support their cause, and have made multiple donations and held multiple fundraisers to help them achieve their goals.",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Ottawa_Humane_Society_logo.SVG/1200px-Ottawa_Humane_Society_logo.SVG.png",
                "imageAlt": "Ottawa Humane Society Logo",
                "buttonLink": "https://ottawahumane.ca/?gclid=CjwKCAjwzvX7BRAeEiwAsXExo29hLzDqlIL_mLOexi3AJluktrNu2by63lnxdHJAazqn0J8S2MqIyhoC3T4QAvD_BwE"
            }
        ],
        "eventRowItems": [
            {
                "title": "Bruyère Care",
                "imageURL": "https://instagram.fxds1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/94318433_103012071350840_7990187114904016552_n.jpg?_nc_ht=instagram.fxds1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=xJHaGOtCy_EAX-IxuRo&_nc_tp=25&oh=0f7ea11f490bba6a9a6b4fc59c5e2584&oe=5FAD4FC6",
                "imageAlt": "Instagram image from Bryuere",
                "text": "We have partnered with our close friends at the Bruyere foundation to create the Bruyere Care program. We deliver free pizzas to hospitals, all across the city and help make sure patients and employees don’t have to work on an empty stomach. During this pandemic we have continued this program, socially distanced of course, and have fed over 1,100 of our frontline workers!",
                "buttonLink": "https://www.bruyere.org/en/about-bruyere",
                "buttonText": "Bruyere About"
            },
            {
                "title": "Free pizza initiative",
                "imageURL": "https://instagram.fxds1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/102978883_608967826640555_8682708812607332093_n.jpg?_nc_ht=instagram.fxds1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=G-NFBbMy0aYAX-ZJvOL&_nc_tp=15&oh=1da57844369bbdd6602e1c607f19fa8e&oe=5FAF6E66",
                "imageAlt": "Collage by Milanos Pizza Instagram",
                "text": "During these hard times we think it's important for local businesses to show hospitality, as we’re all in this together. At Milanos, we created our free pizza initiative, where we would donate free pizzas across the city to various local businesses. So far we’ve donated to places like Casselman Tirecraft, Dollarama, McDonalds, and many more!",
                "buttonLink": "https://www.milanopizza.ca/about.php",
                "buttonText": "Milano's Pizza About"
            },
            {
                "title": "Ottawa Flood Relief",
                "imageURL": "https://instagram.fxds1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/69320658_146018010073460_9170538334389040640_n.jpg?_nc_ht=instagram.fxds1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=_A891uSCVZQAX8qnzTl&_nc_tp=24&oh=caff254c15314d25d74692baf004b295&oe=5FAEECF8",
                "imageAlt": "Soliders in Collage delivering Milano's Pizza",
                "text": "Because of the Ottawa flood, we thought it would be nice to help our brothers and sisters at the Canadian Armed Forces, who graciously sent over troops to help with flood relief. We served over 100 troops, and made sure they were eating good after a hard day's work! We salute our military and will always do anything to help!",
                "buttonLink": "https://ottawacitizen.com/news/local-news/canadian-military-has-2000-personnel-dealing-with-floods-but-provinces-determine-priorities",
                "buttonText": "Flood Relief Ottawa Citizen"
            }
        ],
        "socialItems": [
            {
                "idClass": "fa-twitter-square",
                "url": "https://twitter.com/milanopizza1"
            },
            {
                "idClass": "fa-facebook-square",
                "url": "https://www.facebook.com/MilanoPizzeriaBarrhaven/"
            },
            {
                "idClass": "fa-instagram-square",
                "url": "https://www.instagram.com/milanopizza1/"
            },
            {
                "idClass": "fa-google-plus-square",
                "url": "https://plus.google.com/113931051887402511809"
            },
            {
                "idClass": "fa-yelp",
                "url": "https://www.yelp.ca/biz/milano-pizzeria-nepean"
            }
        ],
        "review1": [
            {
                "stars": 5,
                "imageURL": "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e4/ca/default-avatar-2020-51.jpg",
                "review": "I had their combo deal which came to $7.10. It included pop, chips and a slice of pizza itself. You have the option of any pop, chips and pizza. Pop was also a bottle."
            },
            {
                "stars": 5,
                "imageURL": "https://media-cdn.tripadvisor.com/media/photo-o/06/cc/1b/ee/paranoid56.jpg",
                "review": "Nice small quaint pizza place. Super good good. Cheap too. So many choices and great selection of other items too"
            },
            {
                "stars": 5,
                "imageURL": "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f2/11/default-avatar-2020-23.jpg",
                "review": "This pizza was just amazingly good. The crust is perfect and the pizza loaded with toppings. Be sure to try it the next time you are in downtown Ottawa."
            },
            {
                "stars": 5,
                "imageURL": "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f0/48/default-avatar-2020-15.jpg",
                "review": "The Cheese Pizza is great, delivery time was great and the crust is thick and tasty. Would 100% recommend this place"
            }
        ],
        "review2": [
            {
                "stars": 5,
                "imageURL": "https://media-cdn.tripadvisor.com/media/photo-l/03/2f/d2/f5/roger-d.jpg",
                "review": "We ordered 3 large pizzas-each different and they were wonderful. One was the Milano, another was a meat lover and the 3rd was with no meat. Lots of cheese and great pizza dough"
            },
            {
                "stars": 5,
                "imageURL": "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e2/4a/default-avatar-2020-42.jpg",
                "review": "We were at the Byward Market and everything was very busy. We found this place away from the crowd to have a quiet lunch. The cheese pizza was awesome."
            },
            {
                "stars": 5,
                "imageURL": "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e2/11/default-avatar-2020-41.jpg",
                "review": "Husband eats there everytime he is at the Marriott and highly recommended this eatery. And I wasn't disappointed."
            },
            {
                "stars": 5,
                "imageURL": "https://media-cdn.tripadvisor.com/media/photo-f/02/b8/c8/b2/patate87.jpg",
                "review": "The staff were incredibly friendly and helpful. The walls were filled with newspaper articles on the variety of ways they give back to the community. Great community giving, great staff and great pizza! Highly recommend."
            }
        ],
        "aboutUsImages": [
            {
                "imageURL": "https://instagram.fxds1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/54222600_1533211076812252_2115384670345611409_n.jpg?_nc_ht=instagram.fxds1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=LVMKrZ4-GzEAX_4oAOn&_nc_tp=24&oh=ccad80bb009b81668533389fba8efacd&oe=5FAA269B",
                "alt": "Pizza"
            },
            {
                "imageURL": "https://instagram.fxds1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/70940806_2465821843639217_1649144948781735506_n.jpg?_nc_ht=instagram.fxds1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=XdXEZI0BnX4AX99qSpK&_nc_tp=24&oh=2876ae3afa6013249373ee7b2b888990&oe=5FACFBD2",
                "alt": "Pizza"
            },
            {
                "imageURL": "https://instagram.fxds1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/70477896_998779567135423_8791341459700276704_n.jpg?_nc_ht=instagram.fxds1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4TlSudhSc1IAX8NspFv&_nc_tp=24&oh=d5e3e6fd4ef092d456e5482ca79d9839&oe=5FAD26C5",
                "alt": "Fried Cheese"
            }
        ],
        "menuModalOpen": false,
        "menuModalType": ""
    }
}

if(!vueData){
    
}

mainApp = new Vue({
    el: "#app",
    data: vueData,
    methods:{
        showModal(menu) {
            this.menuModalType=menu;
            this.menuModalOpen = true;
            stopScroll();
        },
        closeModal() {
            this.menuModalOpen = false;
            startScroll();
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
// const reviewBoxData = [
// {
//     "style": "top-left",
//         "top": "0rem",
//             "left": "10rem"
// },
// {
//     "style": "top-left",
//         "top": "17rem",
//             "left": "0rem"
// },
// {
//     "style": "top-left",
//         "top": "34rem",
//             "left": "10rem"
// },
// {
//     "style": "top-right",
//         "top": "0rem",
//             "right": "10rem"
// },
// {
//     "style": "top-right",
//         "top": "16rem",
//             "right": "0rem"
// },
// {
//     "style": "top-right",
//         "top": "34rem",
//             "right": "10rem"
// }
// ]
// const reviewBoxLocations = JSON.parse(reviewBoxData);
// const reviewBoxes = document.querySelectorAll(".circleReview")
// reviewBoxes.forEach((review, i) => {
//     if(reviewBoxLocations[i].style === 'top-left'){
//         review.style.top = reviewBoxLocations[i].top;
//         review.style.left = reviewBoxLocations[i].left;
//     } else if (reviewBoxLocations[i].style === 'top-right'){
//         review.style.top = reviewBoxLocations[i].top;
//         review.style.right = reviewBoxLocations[i].right;
//     }
// });


// PARALAX
// const imagery = document.querySelector("#flyingPizza");
// window.addEventListener("scroll",
//     ()=>{
//         imagery.style.top = ((scrollY/-3)+500)+"px";
//     },
//     {
//         capture: true,
//         passive: true
//     }
// );

// DONT SCROLL BUTTONS
function blurOrderButtons(){
    const buttons = document.querySelectorAll("#orderButton");
    buttons.forEach(button=>{
        button.blur();
    })
}
function stopScroll(){
    document.querySelector("body").classList.add("modalOpen")
}
function startScroll(){
    document.querySelector("body").classList.remove("modalOpen")
}

// //MODAL THINGS
// //PIZZA SIZE
// var selectedSize = 1;
// const sizeButtons = document.getElementById("sizeButtonRow").children
// function updateSize(newSize){
//     for(i = 1; i<=4; i++){
//         const button = sizeButtons[i-1]
//         if (i == newSize) {
//             button.classList.add("selectedSizeButton");
//         }
//         else {
//             button.classList.contains("selectedSizeButton") ? button.classList.remove("selectedSizeButton") : null;
//         }
//     }
// }
// updateSize(2);

// //PIZZA SELECTION
// var selectedItem = 1;
// const endCount = 3;
// function updateSelection(direction){
//     if(direction==="up"){
//         selectedItem !== 3 ? selectedItem++ : selectedItem = 1;
//     }else if(direction==="down"){
//         selectedItem !== 1 ? selectedItem-- : selectedItem = endCount;
//     }
// }

// EXPAND MODAL THING LATER