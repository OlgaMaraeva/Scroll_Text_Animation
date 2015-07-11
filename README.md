# Scroll_Text_Animation
Create animated h tags on window scroll with small jQuery plugin

DEMO http://luckyframe74.com/demo/Text_Animation_jQPlugin/

How to use:

just put this code in your js file.

$(document).ready(function () {
    $('.text0').textAnimation();
    $('.test1').textAnimation();
    $('.test2').textAnimation();
});

You can use your own class names. But Class for every h tag  must be unique.
Every animated h tag also has unique data attr. (See html file for details).
You can prevent h tag from animation on scroll by adding "antiscroll" class name.
With "antiscroll" class animation will start on load or document ready. 

Every animation starts when h tag will be inside top half of the screen. 

I am planning to add extra animation effects in the future. 

Enjoy!:)


