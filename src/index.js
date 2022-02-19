import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
    template: `
    <button v-on:click="increment()">Increment</button>
    <p>{{ count }}</p>

     <input 
       type="checkbox"
       v-model="value"
       value="a"
     />
    
     <input 
       type="checkbox"
       v-model="value"
       value="b"
     />

     {{ value }}


    <div>
        <input type="text"  v-model="textinputvalue">
        </input>
    </div>
    
    <div class="blue">
        {{ textinputvalue }}  
    </div>

    <div>
        <button v-on:click="textinputvalue = ''">
            Reset
        </button>
    </div>

    <div class="red">
        {{ error }}
    </div>

    <div v-for="number in numbers" 
        v-bind:class="getClass(number)">

        <div> {{ number }} </div>
 
    </div>

        `,

    data() {
        return {
            count: 0,
            numbers: [1,2,3,4,5,6,7,8,9,10],
            value: ['a'],
            textinputvalue: ' '
        }
    },

    computed: {
       error(){
           if(this.value.length < 5){
                return 'Must be greater than 5.' 
            } else {
                return ''
            }
       },
        evenList(){
            return this.numbers.filter(num => this.isEven(num))
        }

    },

    methods: {
        increment(){
            this.count +=1
        },
        isEven(val){
            return val % 2 === 0
        },
        getClass(number){
            return this.isEven(number) ? 'blue' : 'red'
        }
    }

})

app.mount('#app')
