import "../style/index.scss";
import * as bootstrap from 'bootstrap';
import $ from 'jquery';

import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import sass from '../assets/sass.png'
import bootstrap5 from '../assets/bootstrap.png'
import js from '../assets/js.png'
import webpack from '../assets/webpack.png'
import vite from '../assets/vite.png'


//import 'slick-carousel';
import * as functions from "./functions.js"

functions.burgerClick();

let technologiesBtn = document.querySelectorAll('.my_technologies__btn ');
let hash = ''
technologiesBtn.forEach(item => item.addEventListener('click', function(){
    let whichIcon = item.classList[item.classList.length-1]
    switch(whichIcon){
        case 'react' :
            document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${react}' alt="${whichIcon}_icon" class="flying_icon">`)
            break;
        case 'html' :
            document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${html}' alt="${whichIcon}_icon" class="flying_icon">`)
            break;
        case 'css' :
            Math.random() <= 0.5 
            ? document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${css}' alt="${whichIcon}_icon" class="flying_icon">`) 
            : document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${sass}' alt="${whichIcon}_icon" class="flying_icon">`)
            break;
        case 'bootstrap5' : 
            document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${bootstrap5}' alt="${whichIcon}_icon" class="flying_icon">`)
            break
        case 'js' :
            document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${js}' alt="${whichIcon}_icon" class="flying_icon">`)
            break
        case 'webpack' :
            document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${webpack}' alt="${whichIcon}_icon" class="flying_icon">`)
            break
        case 'vite' :
            document.querySelector('.projects').insertAdjacentHTML('beforeend', `<img src='${vite}' alt="${whichIcon}_icon" class="flying_icon">`)
            break
    }
    
    // for(let i = 0; i < 10; i++){
    //     hash += String.fromCharCode(Math.floor(Math.random()*10)+97);
    //     hash += Math.floor(Math.random()*10);
    // }
    let flyingIcons = document.querySelectorAll('.flying_icon') 
    let ImgSize = Math.random();
    //flyingIcons[flyingIcons.length-1].classList.add(hash) 
    flyingIcons[flyingIcons.length-1].style.transform = `scale(${ImgSize},${ImgSize})`
    flyingIcons[flyingIcons.length-1].style.left = `${Math.random()*100}%`
    
    console.log(hash)
    //hash = ''
}))


