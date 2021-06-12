---
title: "Vuex boshlang'ich kursi"
date: 2019-03-22
update: 2021-03-05
tags:
  - Kurs
  - VueJS
  - Vuex
author: Otabek Sadiridinov
---

## Vuex - Teran sho'ng'ish

![VueT Dark_870x220](https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/vuet-dark_870x220.png?sfvrsn=83bce1fb_3 "VueT Dark_870x220")

## Mundarija

[[toc]]

This article dives into Vuex, a Vue.js State Management Library. We'll look at the problems it was created to solve, the core concepts behind it, how to set it up, and, of course, use code examples at every step of the way.

Ushbu maqolada Vuexning ich-ichigacha teran sho'ng'ib boramiz. Biz u yordamida muammolarni hal qilish, uning asosiy tushunchalarini, uni qanday o'rnatishni ko'rib chiqamiz va, albatta, har qadamda kodlar bilan misollar keltirib boramiz.

Vuex - Vue.js ilovalaridagi ma'lumotlarni boshqarish uchun Vue jamoasi tomonidan tuzilgan ma'lumotlar boshqaruvi kutubxonasi. 
Bu dastur ishlatiladigan ma'lumotlarni boshqarish yani o'qish va yozishni oson bajarish uchun markazlashtirilgan
usulni taqdim etadi.

Nima uchun Vuex?
---------

Vue promotes breaking down views into components. These components are reusable Vue instances that accept data, methods, etc. The data is where the state of the view is housed, while the method is what allows us to manipulate this state based on the user interactions on the view.

Vue qarashlarni tarkibiy qismlarga ajratishni targ'ib qiladi. Ushbu komponentlar ma'lumotlar, usullar va hokazolarni
qabul qiladigan qayta ishlatilishi mumkin bo'lgan Vue misollari bo'lib, ma'lumotlar ko'rinishning holati joylashtirilgan
joyda joylashgan bo'lib, usul bu ko'rinishni foydalanuvchining o'zaro ta'siriga asoslangan holda boshqarishga imkon
beradi.

When a user clicks a button in a component, a method is being called which in turn performs an action on the said state while the said state updates the view about that change.

However, there are times when multiple components would need to share a state, or after a state is being modified in one component you need the the parent / child or sibling component to perform a followup action.

Depending on the position of this second component, you might decide to either use `props` or the `this.$parent` keyword to directly access the data or methods of the second component and perform the said action. But what if you have to do this for as many components as possible?

As the project gets bigger, you find yourself passing props about, and directly manipulating the DOM to access various components.

This approach becomes very tedious and also makes the code base hard to maintain or debug when you run into errors. This is were Vuex shines. It provides a global scope where you can put all states that would be shared among the various components.

It also gives our code more structure, makes debugging easy as we can use the DevTools to track errors that occur, and of course provides the reactivity that Vue brings to the table. Think of it as the windows in JavaScript --- every component has access to it.

Installing Vuex
---------------

To install Vuex into a project, run the code below.

```Bash
npm install vuex --save
```



This will install the latest version of Vuex into your project. Once this is done, we need to initialize Vuex into the Vue app by creating our store.js file with the code below;

```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
```



Now we can now proceed to creating a store. The store is essentially a reactive object that holds the application's state, getters, mutations and actions.

Understanding the Store
-----------------------

The store is essentially the centralized state, which has some core concepts that allow us achieve this centralization. These concepts include:

1.  State
2.  Getters
3.  Mutations
4.  Actions

### State

This is a single object that contains the entire data. This is similar to the `data` keyword in the single components structure, except that this state can be accessed from more than one component and, when this state gets updated, all components accessing it also receive this change. To create this object, we do the below:

```JavaScript
// import Vue
import Vue from 'vue';
// import Vuex
import Vuex from 'vuex';

// Install the Vuex plugin on vue
Vue.use(Vuex);

// create a Vuex store instance
export const store = new Vuex.Store({
    state: {
        cart: ''
    }
})
```



To access the Vuex state in our Vue components, we would have to first import the store into the component by creating a computed property that would return the said state, then render the said state to the view.

Now, let's import the store. There are two major ways of doing this:

1.  Manually importing the store in every component you are about to use the Vuex state, like so:

    ```HTML
    <template>
        <main>
            <h1>Cart Content</h1>
            <p>{{cartValue}}</p>
        </main>
    </template>

    <script>
    // Import Vuex Store into Component
    import store from 'store.js';
    export default {
        computed: {
            cartValue() {
                // Return Vuex state from store
                return store.state.cart;
            }
        }
    }
    </script>

    ```

    

2.  Doing a global inject of the Vuex store into the Vue Instance, which automatically gives us the access to reference the store from all the Vue components in the app using the `this.$store` syntax:

    ```JavaScript
    import Vue from 'vue';
    import store from './store.js';

    new Vue({
        // Adding the Vuex store to the Vue instance
        store,
    }).$mount('#app');

    ```

    

    ```HTML
    <template>
        <main>
            <h1>Cart Content</h1>
            <p>{{cartValue}}</p>
        </main>
    </template>

    <script>
    export default {
        computed: {
            cartValue() {
                // Accessing the Vuex state
                return this.$store.state.cart;
            }
        }
    }
    </script>

    ```

    

### Getters

Getters are pretty much computed properties for the Vuex store. They allow us to generate a new state based on the current state --- for example, calculating how many items we have in the cart.

It also helps with reduction in duplication of code where ideally more than one component needs this data and we would ordinarily have to do our manipulating in each component. With getters we can do it once and reference anywhere.

To create a getter, we do the below:

```JavaScript
// import Vue
import Vue from 'vue';
// import Vuex
import Vuex from 'vuex';

// Install the Vuex plugin on vue
Vue.use(Vuex);

// create a Vuex store instance
export const store = new Vuex.Store({
    state: {
        cart: ["bread", "rice", "beans", "turkey"]
    },

    getters: {
        // Fetch the total number of items in the cart
        totalNumberOfCartItems: state => {
            return state.cart.length;
        },
    },
})

```



Next, we access the getter from our Vue component by doing below:

```HTML
<template>
    <main>
        <h1>Cart Content</h1>
        <p>Total Number of Items: {{totalNumberOfCartItems}}</p>
    </main>
</template>

<script>
export default {
    computed: {
        totalNumberOfCartItems() {
            // Accessing the Vuex state
            return this.$store.getters.totalNumberOfCartItems;
        }
    }
}
</script>

```



Now, whenever an item gets added to the cart, the total number of items in the cart gets updated automatically.

### Mutations

Mutations are the only way in which we can update our Vuex state. They perform one task and one task only: to set a state. It is a function that takes two arguments, the state and a payload, where the payload is not necessarily required.

The payload is simply the data that would be used to update the state. Mutations are synchronous, and as such we can't perform asynchronous task in them.

Now, let's add a mutation to our code:

```JavaScript
// import Vue
import Vue from 'vue';
// import Vuex
import Vuex from 'vuex';

// Install the Vuex plugin on vue
Vue.use(Vuex);

// create a Vuex store instance
export const store = new Vuex.Store({
    state: {
        cart: ["bread", "rice", "beans", "turkey"]
    },

    getters: {
        // Fetch the total number of items in the cart
        totalNumberOfCartItems: state => {
            return state.cart.length;
        },
    },

    mutations: {
        // Add item to cart
        addItemToCart (state, payload) {
            state.cart.push(payload);
        },
    },
})

```



Next, we need to update the state from our Vue component, and, to do that, we would need to commit the mutation.

```HTML
<template>
    <main>
        <h1>Cart Content</h1>
        <p>Total Number of Items: {{totalNumberOfCartItems}}</p>
        <form @submit.prevent="addItemToCart">
            <input type="text" v-model="item" required>
            <button type="submit">Add to cart</button>
        </form>
    </main>
</template>

<script>
export default {
    data() {
        return {
            item: ''
        }
    },
    computed: {
        totalNumberOfCartItems() {
            // Accessing the Vuex state
            return this.$store.getters.totalNumberOfCartItems;
        }
    },
    methods: {
        addItemToCart() {
            // Check that the input field isn't empty
            if(this.item !== '') {
                // commiting the additemtocart mutation with the payload
                this.$store.commit('addItemToCart', this.item)
            }
        }
    }
}
</script>
```



Now anytime a user enters a value into the input and clicks on the submit button, the item gets added to cart and the total number of items in the cart gets updated on the view.

### Actions

Actions are similar to mutations, but instead of mutating the state they commit mutations. They are asynchronous and, as such, allow us to perform asynchronous tasks; when these tasks are completed, we proceed to commit a mutation, which in turn updates the state.

To showcase actions, we would proceed to submit the cart items to an API.

```JavaScript
// import Vue
import Vue from 'vue';
// import Vuex
import Vuex from 'vuex';

// Install the Vuex plugin on vue
Vue.use(Vuex);

// create a Vuex store instance
export const store = new Vuex.Store({
    state: {
        cart: ["bread", "rice", "beans", "turkey"]
    },

    getters: {
        // Fetch the total number of items in the cart
        totalNumberOfCartItems: state => {
            return state.cart.length;
        },
    },

    mutations: {
        // Add item to cart
        addItemToCart (state, payload) {
            state.cart.push(payload);
        },
        // Clear items in the cart
        emtpyCart (state) {
            state.cart = [];
        }
    },

    actions: {
        checkout({commit}, requestObject) {
            // API Call to submit the items in the cart
            Vue.http.post('submit', requestObject).then((response) => {
                // log success
                console.log(response);
                // Clear Cart by mutating the state
                commit('emptyCart');
            }).catch((error) => {
                // log error
                console.log(error);
            }
        }
    }
})

```



Looking at the code above, we created an action named `checkout` that accepts two things:

1.  `commit`: which allows us to call the commit method inside our actions
2.  `requestObject`: which allows us to pass data into action

Moving into the action, we made an asynchronous call to an API, and then passed the `requestObject` to the API. On success, we logged the response and then proceeded to clear the cart state, but first we had to create an `emptyCart` mutation, whose singular task is to empty the cart state.

Now that we have seen how to create actions, we proceed to triggering that action. To trigger an action, Vuex provides us with a `dispatch` command.

`this.$store.dispatch('actionName', payload);`

Let's add an action into our code and dispatch it from the view:

```HTML
<template>
    <main>
        <h1>Cart Content</h1>
        <p>Total Number of Items: {{totalNumberOfCartItems}}</p>
        <form @submit.prevent="addItemToCart">
            <input type="text" v-model="item" required>
            <button type="submit">Add to cart</button>
        </form>

        <button type="button" @click="checkout">Checkout</button>
    </main>
</template>

<script>
export default {
    data() {
        return {
            item: ''
        }
    },
    computed: {
        totalNumberOfCartItems() {
            // Accessing the Vuex state
            return this.$store.getters.totalNumberOfCartItems;
        }
    },
    methods: {
        addItemToCart() {
            // Check that the input field isn't empty
            if(this.item !== '') {
                // commiting the additemtocart mutation with the payload
                this.$store.commit('addItemToCart', this.item)
            }
        },

        checkout() {
            // Make sure cart is not empty
            if(this.totalNumberOfCartItems > 0 ) {
                // create request
                let requestPayload = { cart: this.$store.state.cart };
                // Dispatch the action
                this.$store.dispatch('checkout', requestPayload);
            }
            else {
                alert('Cart is empty');
            }
        }
    }
}
</script>

```



Based on the code above, we created a checkout button in the view, and created a checkout method that checks if the cart is not empty before trying to dispatch the action that submits the items.

This works, but something is missing. You might wonder what that is? We have been able to dispatch an action, but we don't know if this action was successful or not.

Did the API call fail? Did it pass? How can I get this information so I can notify the user? Actions can handle Promises and can also return a Promise.

Modifying our example code to return a Promise:

```JavaScript
// import Vue
import Vue from 'vue';
// import Vuex
import Vuex from 'vuex';

// Install the Vuex plugin on vue
Vue.use(Vuex);

// create a Vuex store instance
export const store = new Vuex.Store({
    state: {
        cart: ["bread", "rice", "beans", "turkey"]
    },

    getters: {
        // Fetch the total number of items in the cart
        totalNumberOfCartItems: state => {
            return state.cart.length;
        },
    },

    mutations: {
        // Add item to cart
        addItemToCart (state, payload) {
            state.cart.push(payload);
        },
        // Clear items in the cart
        emtpyCart (state) {
            state.cart = [];
        }
    },

    actions: {
        checkout({commit}, requestObject) {
            return new Promise((resolve, reject) => {

                // API Call to submit the items in the cart
                Vue.http.post('submit', requestObject).then((response) => {
                    // log success
                    console.log(response);
                    // Clear Cart by mutating the state
                    commit('emptyCart');
                    // return success
                    resolve(response);
                }).catch((error) => {
                    // log error
                    console.log(error);
                    // return error
                    reject(error);
                }
            })
        }
    }
})

```



Now, we can use the value returned to update the user on the state of things in the view as follows:

```HTML
<template>
    <main>
        <h1>Cart Content</h1>
        <p>Total Number of Items: {{totalNumberOfCartItems}}</p>
        <form @submit.prevent="addItemToCart">
            <input type="text" v-model="item" required>
            <button type="submit">Add to cart</button>
        </form>

        <button type="button" @click="checkout">Checkout</button>
    </main>
</template>

<script>
export default {
    data() {
        return {
            item: ''
        }
    },
    computed: {
        totalNumberOfCartItems() {
            // Accessing the Vuex state
            return this.$store.getters.totalNumberOfCartItems;
        }
    },
    methods: {
        addItemToCart() {
            // Check that the input field isn't empty
            if(this.item !== '') {
                // commiting the additemtocart mutation with the payload
                this.$store.commit('addItemToCart', this.item)
            }
        },

        checkout() {
            // Make sure cart is not empty
            if(this.totalNumberOfCartItems > 0 ) {
                // create request
                let requestPayload = { cart: this.$store.state.cart };
                // Dispatch the action
                this.$store.dispatch('checkout', requestPayload).then((response) => {
                    // Alert Response from API
                    alert(response);
                }).catch((error) => {
                    // Alert Error from API
                    alert(error);
                });
            }
            else {
                alert('Cart is empty');
            }
        }
    }
}
</script>

```



Actions also allow you to dispatch multiple actions (i.e. an action can dispatch one or more other actions). All you have to do is pass `dispatch` as an argument and you would be able to dispatch other actions inside your action.

```JavaScript
checkout({ dispatch, commit }, requestObject) {
    // dispatch an action
    dispatch('actionName');

    // dispatch another action
    dispatch('actionName2', request);
};

```



Adding Structure to the Store
-----------------------------

Right now, we have all our state, getters, mutations, and actions all in one file, the store.js file. Depending on how large our code base gets, this file can tend to become very big, and it just makes sense for us to split this into separate files.

```
store/
--| store.js
--| state.js
--| getters.js
--| mutations.js
--| actions.js

```

Now, our store looks like this:

```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

```



Modules
-------

Vuex also provides us with modules, where we can further structure or break down our store into modules of smaller stores. Each module will have its own state, getters, mutations, and actions.

This works by grouping related states, getters, mutations, and actions into a module. It is mostly useful when we have a large-scale app and the store is bloated with lots of code.

Refactoring our store into a module, we will create a file called *cart.js* and proceed to break out all our states, mutations, and actions in our store relating to the cart like below:

```JavaScript
// import Vue
import Vue from 'vue';

export default {
    state: {
        cart: ["bread", "rice", "beans", "turkey"]
    },

    getters: {
        // Fetch the total number of items in the cart
        totalNumberOfCartItems: state => {
            return state.cart.length;
        },
    },

    mutations: {
        // Add item to cart
        addItemToCart (state, payload) {
            state.cart.push(payload);
        },
        // Clear items in the cart
        emtpyCart (state) {
            state.cart = [];
        }
    },

    actions: {
        checkout({commit}, requestObject) {
            return new Promise((resolve, reject) => {

                // API Call to submit the items in the cart
                Vue.http.post('submit', requestObject).then((response) => {
                    // log success
                    console.log(response);
                    // Clear Cart by mutating the state
                    commit('emptyCart');
                    // return success
                    resolve(response);
                }).catch((error) => {
                    // log error
                    console.log(error);
                    // return error
                    reject(error);
                }
            })
        }
    }
}

```



Next, we import and register it to our main store.

```
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
      cart
  }
})

```

JavaScript

Finally, our code structure would look like this:

```
store/
--| store.js
--| state.js
--| getters.js
--| mutations.js
--| actions.js
--| modules/
    --| cart.js

```

### Summary

Vuex creates a store, which consists of states, getters, mutations and actions. To update or change a state, you have to commit a mutation.

To perform an asynchronous task, you need an action. Actions are dispatched, which on success commit a mutation which mutates a state, thus updating the view.