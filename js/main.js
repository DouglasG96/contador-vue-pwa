const app = new Vue({
    el: '#app',
    data() {
        return {
            title: "Contador App - vue",
            count: 0
        }
    },
    methods: {
        modCount(instruction = "add", limit = 1){
            if(instruction === "dis") this.count -= limit
            else this.count += limit
        },
    }
})
