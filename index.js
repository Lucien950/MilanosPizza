Vue.component('food-card', {
    template: "#food-card-template",
    props: ['imageURL', 'title', 'price', 'description']
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
        ]
    }
})