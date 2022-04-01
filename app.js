'use strict'
const switcher = document.querySelector('.btn');

        switcher.addEventListener('click',function(){
        console.log();
        document.body.classList.toggle('dark-theme')

        var className = document.body.className;
        if(className=="light-theme"){
            this.textContent ="Dark";
        }
        else{
            this.textContent="light";
        }
        console.log('current class name: '+ className);
    });
    