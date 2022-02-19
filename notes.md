# Notes  

## Vue-structure

```vue  

const app = Vue.createApp({

template:`
    <div>
        <!-- the Vue-template -->
        <!-- a mix of html- and vue-tags -->    
    </div>
        `,
data(){
    value: '',
    anotherValue: 2
    },
computed: {
    // methods without parameters.
    // sets values on variables when stuff changes
    // can be used in validation   
},

methods: {
    // methods that can be used in template  
    // takes parameters and can manipulate variables and do other stuff  
}

})

app.mount('#app')  // associates div-tag in index.html with the Vue-app  
```


## Input  

Input is html-tag for getting input from the user.
Can be different types.

### Type  

This is a html-attribute for specifying the input-type.
It can be:

Checkbox
radio
text

### V-bind  

Binds html-attribute to javascript expression.


### v-on  

This is triggered when user inputs something.  
Can be used to set the value of a variable from an input-field or similar.  


### Example  

How to set text value to a variable:  

```html
<input 
 type="text"           <!-- specifies the input type -->
 v-bind:value="value"  <!-- binds value-variable to the value of the input -->
 v-on:input="input"    <!-- Sets the value of the input --> 
/>
```

```html
<div>
    <input type="text" v-model="value">
    </input>
</div>

<button v-on:click="value = 'Hello World'">
    Reset
</button> 
```

### v-model  

Creates a two-way binding to a datamodel.
Can be used to replace v-bind and v-on in an input-field.




