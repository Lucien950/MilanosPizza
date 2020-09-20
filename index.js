Vue.component('food-card', {
    template: "#food-card-template",
    props: ['imageURL', 'title', 'price', 'description']
})
Vue.component('footer-col', {
    template: "#footer-col-template"
})
Vue.component('social-icon', {
    template: "#social-icon-template",
    props: ['idClass', 'url']
})

mainApp = new Vue({
    el: "#app",
    data: {
        foodItems: [
            {
                imageURL: './images/slice.png',
                title: 'Pizza',
                price: '40.99',
                description: 'Some delicious pizza to eat'
            },
            {
                imageURL: './images/slice.png',
                title: 'Other Food',
                price: '32.42',
                description: 'This is also very good'
            },
        ],

        socialItems:[
            {
                idClass:"fa-twitter-square",
                url:"https://twitter.com/milanopizza1"
            },
            {
                idClass:"fa-facebook-square",
                url:"https://www.facebook.com/MilanoPizzeriaBarrhaven/"
            },
            {
                idClass:"fa-instagram-square",
                url:"https://www.instagram.com/milanopizza1/"
            },
            {
                idClass:"fa-google-plus-square",
                url:"https://plus.google.com/113931051887402511809"
            },
            {
                idClass:"fa-yelp",
                url:"https://www.yelp.ca/biz/milano-pizzeria-nepean"
            },
        ]
    }
})


function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}