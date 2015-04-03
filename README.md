# animate-on-scroll
Animate through an image sequence as you scroll a web page.


1) Copy repository

	git clone https://github.com/kevindurley/animate-on-scroll.git

2) Copy the js and css files into your project

	js/aniscroll.js
	css/aniscroll.css
	
3) Add references to the js and css files to your project

```html
  <link rel="stylesheet" href="css/aniscroll.css">
  <script src="js/aniscroll.js"></script>
```
  
4) Add the image sequence markup to your html within a container with class of 'aniScrollContainer'

```javascript
<div class="aniScrollContainer">
  <img src="images/armani-bag-1000-01-01.jpg"/>
  <img src="images/armani-bag-1000-01-12.jpg"/>
  <img src="images/armani-bag-1000-01-11.jpg"/>
  <img src="images/armani-bag-1000-01-10.jpg"/>
  <img src="images/armani-bag-1000-01-09.jpg"/>
  <img src="images/armani-bag-1000-01-08.jpg"/>
  <img src="images/armani-bag-1000-01-07.jpg"/>
  <img src="images/armani-bag-1000-01-06.jpg"/>
  <img src="images/armani-bag-1000-01-05.jpg"/>
  <img src="images/armani-bag-1000-01-04.jpg"/>
  <img src="images/armani-bag-1000-01-03.jpg"/>
  <img src="images/armani-bag-1000-01-02.jpg"/>
</div>
```

5) Initialise the aniScroll within your document ready

```javascript
$(document).ready(function () {

    $('.aniScrollContainer').aniScroll({});

});
```

6) Override the height of the image in your css - default 50px. Images within the container will be sized at 100% i.e. equal to teh height of the container.

```css
.myAniScrollContainer {
    height: 200px;
}
```
```html
<div class="aniScrollContainer myAniScrollContainer">
  <img src="images/armani-bag-1000-01-01.jpg"/>
  .
  .
  .
</div>
```
	
7) An option that can be passed to aniScroll during initialisation - 'percentageToBeVisible'. This option determines when the animation of the image sequence starts and stops. Default - 25. This means the sequence will start and stop animating when the specified percentage of the image is visible i.e. if set to 100, the image must be fully visible, if set to 50, the animation will start when the image is half showing.

```javascript
$(document).ready(function () {

    $('.aniScrollContainer').aniScroll({
      percentageToBeVisible: 50
    });

});
```



