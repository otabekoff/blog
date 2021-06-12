---
title: 'Get screen size in Javascript ⬌ ⬍'
date: 2020-04-01
update: 2020-04-02
tags:
  - Screen size
  - Javascript
  - Function
author: Otabek Sadiridinov
---

## Table of contents

[[toc]]

![Im](https://avatars.githubusercontent.com/u/60849894?s=100)
## Get screen size in Javascript

Let's first create an HTML element to display the screen size for a test.

```html
<div id="screen"></div>
```
And then, let's don't get out of the ship and see what function gets screen sizes for us.
In Javascript we have `window` object. There is `innerWidth` and `innerHeight` variables.
We just create a function which calls itself and change the window size when the browser loads page or when the window will be resized.

```js
(function() {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;
    let myHeight = window.innerHeight;
    // your size calculation code here
    document.getElementById("screen").innerHTML = myWidth + "x" + myHeight;
  };
})();
```
## T.I.P

>We can get also get an elements width and height dynamically. To do this we can specify the element instead of the `window` object. Like following:
```js
let myWidth = document.getElementById('elementId').innerWidth;
let myHeight = document.getElementById('elementId').innerHeight;
:::
