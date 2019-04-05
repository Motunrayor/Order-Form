Vue.filter('currency', function (value) {
    return '$' + value.toFixed();
});

var demo = new Vue({
    el: '#body',
    data: {

        services: [
            {
                name: 'Web Development',
                price: 300,
                active:true
            },
            {
                name: 'Design',
                price: 400,
                active:!true
            },
            {
                name: 'Integration',
                price: 250,
                active:!true
            },
            {
                name: 'Training',
                price: 220,
                active:!true
            }
        ]
    },

    methods: {
        toggleActive: function(s){
            s.active = !s.active;
        },
        total: function(){

            var total = 0;

            this.services.forEach(function(s){
                if (s.active){
                    total+= s.price;
                }
            });

           return total;
        }
    }
});

