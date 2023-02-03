import "../style/index.scss";
import * as bootstrap from 'bootstrap';
import $ from 'jquery';

//import 'slick-carousel';
import * as functions from "./functions.js"

functions.burgerClick();


document.querySelector('.html_front').style.width = document.querySelector('.html_front').dataset.html;
document.querySelector('.scss_front').style.width = document.querySelector('.scss_front').dataset.scss; 
document.querySelector('.javascript_front').style.width = document.querySelector('.javascript_front').dataset.js; 
document.querySelector('.webpack_front').style.width = document.querySelector('.webpack_front').dataset.webpack; 

if(innerWidth <= 991){
    document.querySelector('.about_me__experienced_web_dev').style.paddingTop = document.querySelector('.about_me__how_started ').clientHeight*0.7+'px';
}
