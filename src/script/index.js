import "../style/index.scss"
import * as bootstrap from 'bootstrap'
import * as fontawesome from '../icons/fontawesome-free-6.2.1-web/scss/fontawesome.scss'
import $ from 'jquery';


//import 'slick-carousel';
import * as functions from "./functions.js"

//functions.burgerClick();


document.querySelector('.html_front').style.width = document.querySelector('.html_front').dataset.html;
document.querySelector('.scss_front').style.width = document.querySelector('.scss_front').dataset.scss; 
document.querySelector('.javascript_front').style.width = document.querySelector('.javascript_front').dataset.js; 
document.querySelector('.webpack_front').style.width = document.querySelector('.webpack_front').dataset.webpack; 