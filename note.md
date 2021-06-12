---
title: 'Ajoyib VuePress blog shablon👍'
date: 2020-04-01
update: 2020-04-02
tags:
  - vue
  - vuepress
  - vuepress-theme
  - blog
  - blog-theme
author: Otabek Sadiridinov
---

## TOC

[[toc]]

## List

* foo
* bar
    * indentation
        * nesting indentation
    * indentation
* buz

<!-- more -->

## Quote

> quote
>
> > nesting quote
>
> quote
> > > inner qutoes

## Strikethrough

~~Mistaken text.~~

## Syntax highlighting

```js
console.log('Hello, World');
```

## Tables

| First Header  | Second Header |
| --- | --- |
| Content Cell  | Content Cell |
| Content Cell  | Content Cell |

## Images

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge9x5zmkxaj32bc0rsmyp.jpg)

Some vertically long images will be shown as compact automatically :+1:

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gee81rcg9hj30jc0zck3a.jpg)

## Custom containers

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
```

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

## Emojis

You can use emojis like `:+1:` :+1:

## Headings

### h3

#### h4

##### h5

###### h6

## About Markdown see also

* [Markdown Extensions | VuePress](https://vuepress.vuejs.org/guide/markdown.html)
* [Markdown](http://daringfireball.net/projects/markdown/syntax)

## Other features

* List hot tags automatically
* List recent posts automatically
* Scroll-spy TOC
* SEO ready (perfect `<title>` and `<meta>` tags)
* Mobile friendly<br><br>![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gecog579w8j30u01szn1c.jpg)

## Source of this page

[here](https://github.com/ttskch/vuepress-theme-blog-vuetify/blob/master/example/blog/_posts/post1.md) you can see.

# vuepress-theme-blog-vuetify

[![](https://img.shields.io/npm/v/vuepress-theme-blog-vuetify?style=flat-square)](https://www.npmjs.com/package/vuepress-theme-blog-vuetify)
[![](https://img.shields.io/npm/dm/vuepress-theme-blog-vuetify?style=flat-square)](https://www.npmjs.com/package/vuepress-theme-blog-vuetify)

![](https://user-images.githubusercontent.com/4360663/80946098-43781280-8e28-11ea-8e50-667344f9f959.png)

💥The world's most simple, beautiful and customizable 2 columns [VuePress](https://vuepress.vuejs.org/) blog theme built with [Vuetify](https://vuetifyjs.com).

It has following features.

* List hot tags automatically
* List recent posts automatically
* Scroll-spy TOC
* SEO ready (perfect `<title>` and `<meta>` tags)
* Mobile friendly
* Customizable styles using scss (not stylus)
* Ability of inserting your own content into the layout of the theme

## Live demo

👉 <https://vuepress-theme-blog-vuetify.ttskch.com/>

## Installation

```bash
$ yarn add --dev vuepress-theme-blog-vuetify

# or
$ npm install -D vuepress-theme-blog-vuetify
```

## Usage

```js
// .vuepress/config.js
module.exports = {
  theme: 'blog-vuetify',
  themeConfig: {
    // ...
  }
}
```

### Configurations

You can see the valid options and default values [here](https://github.com/ttskch/vuepress-theme-blog-vuetify/blob/master/index.js#L14) 👍

### Customizing styles

You can customize styles flexibly by overwrite [scss variables](https://github.com/ttskch/vuepress-theme-blog-vuetify/blob/master/styles/_variables.scss).

In order to overwrite them, you have to just place `.vuepress/styles/variables.scss` which re-defines some variables [like this](https://github.com/ttskch/vuepress-theme-blog-vuetify/blob/master/example/blog/.vuepress/styles/variables.scss) 👍 

### Inserting your own content into the layout of the theme

You can insert your own content like as following.

**1. Create Vue component**

For example, create `.vuepress/components/AfterPage.vue` like following.

```vue
<template>
  <div id="after-page">
    <p>Some content for after page content of each page</p>
  </div>
</template>
```

**2. Create `enhanceApp.js` and register your component to Vue app**

```js
import AfterPage from './components/AfterPage'

// @see https://vuepress.vuejs.org/theme/writing-a-theme.html#app-level-enhancements
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('MyAfterPage', AfterPage)
}
```

**3. Notify the name of your component to the theme**

```js
themeConfig: {
  components: {
    afterPage: 'MyAfterPage'
  }
}
```

That's it 😃

Default (empty) components for valid hook points are [them](https://github.com/ttskch/vuepress-theme-blog-vuetify/tree/master/components/extensions).




