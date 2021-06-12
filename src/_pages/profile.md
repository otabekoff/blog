---
title: Profile
permalink: /profile
image: https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80
---

Hello, my name is Otabek. I am a full-stack frontend web-developer. Below, you can see more information about me.

#### I am not available for a work ATM.

- I am {{ Math.abs(new Date(Date.now() - new Date('September 15, 2001')).getUTCFullYear() - 1970) }} years old.
- I am from Uzbekistan, Namangan.
- It is GMT +5 time here.
- I can create web, mobile and desktop apps that run on all recent and old browsers, android & ios platforms, windows, linux and iMac operating systems.
-  I know
    - HTML
        - Pug
        - Haml
    - CSS
        - Bootstrap
        - Foundation
        - Bulma
        - Skeleton
        - ZeroUI(created by myself)
        - Pure.CSS
        - Groundwork
        - Cardinal
        - Powertocss
        - Mueller
        - Bootflat
        - Materialize
        - MDBootstrap
        - MDL
    - Javascript
        - VueJS(framework of JS)
            - Vuetify
            - Quasar
            - Buefy
            - UIKit(VUikit)
            - BootstrapVue
            - MDBootstrapVue
            - MDL & MDC
            - MaterialVue
            - CoreUI
            - Vuesax
            - iView
            - Vue Material Kit
            - PrimeVue(free &  pro)
            - ElementUI
            - KeenUI
            - MintUI
            - Vue + Tailwind / VueTailwind
            - Fish
            - Vux
            - AT-UI
            - VuePress
            - ViteJS
            - VitePress
            - Eagle
            - Onsen
            - Framework7
            - CubeUI
            - Vum
            - UI of VUE
            - NuxtJS
            - Gridsome
            - Ant design
            - Vue-UI-Framework
            - N3 components
            - Framevuerk
            - Vue-WeUI
            - Vue Comps
            - Vonic UI
            - Vant-lightweight
            - Weex
            - Muse UI
            - Semantic UI
            - Vueblu
        - React

*I can create projects using the above programming languages and frameworks and use them easily, so I can create what I want with them in soon period. And I use most of them in every day life. For instance, HTML, CSS, JS, VueJS, Quasar, Vuetify, Ionic, Bootstrap, BootstrapVue, Nuxt, Tailwind, Material design and etc...*

- I mostly love VueJS framework of JS
- I worked at [Gobazar.Uz - Ecommerce](https://gobazar.uz) by CompassX as a senior frontend developer for over one and half years and even now I am working there.
- I worked at Urmon-Auction and Urmon-Rental projects of State Committee on Forestry of the Republic of Uzbekistan as a frontend web-developer.
- I a member of DevPro(Senior Developers of Great Projects) Uzbekistan/Namangan programmers society.
- I created as many as helpful projects and websites. You can see them below. Many of them are open-source anddeployed using github, also source code is available there.

**You can contact with me using Uzbekistan mail: otabek-mirzo@umail.uz.**

# SOME OF THE PROJECTS I CODE!

<template>
  <v-row class="my-wrapper">
    <v-col
      v-for="p in portmages"
      :key="p.id"
      class="d-flex child-flex flex-column"
      cols="4"
    >
    <v-card outlined>
        <!-- :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" -->
        <img
        :src="'/' + p.img"
        aspect-ratio="1"
        class="grey lighten-2 my-img"
      >
      <v-card-title>{{p.title}}</v-card-title>
          <v-card-subtitle class="pb-0">
            {{p.link}}
            </v-card-subtitle>
        <v-card-text class="text--primary">
          <div>
          {{p.desc}}
          </div>
        </v-card-text>
    </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      portmages: [
        {
          id: 0,
          img: "p-gobazar.jpg",
          title: "Gobazar.uz",
          link: "https://gobazar.uz",
          desc: "Gobazar.uz - Ecommerce website",
        },
          {
            id: 1,
            img: "p-urmon-rental.jpg",
            title: "Urmon.Uz Rental system",
            link: "https://rental.urmon.uz",
            desc: "Rental.Urmon.Uz - Rental website",
          },
        {
          id: 2,
          img: "p-urmon-auction.jpg",
          title: "Auction by Urmon.Uz",
          link: "https://auction.urmon.uz",
          desc: "Auction.Urmon.Uz - Auction website",
        },
      ]
    }
  }
}
</script>