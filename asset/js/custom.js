$(document).ready(function() {

    // this is for header fix on scroll 
    var headerDIV = $('#header_top');
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 130) {
            headerDIV.addClass('fixed animated slideInDown');
        }
        else {
            headerDIV.removeClass('fixed animated slideInDown');
        }
    });


    // scroll spy active 
    $('#scrollspy_nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.1,
        filter: '',
        easing: 'linear',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });


    // wow js content slide active 
    new WOW().init();



    
    
    // tab slide effect functions 
    const tab = document.getElementById('current_opening_tab');
    function onTabClick(evt) {
        setLineStyle(evt.target)
    }

    function setLineStyle(tab) {
        let line = document.querySelector('.tab_active_slide')
        line.style.left = tab.offsetLeft + "px";
        line.style.width = tab.clientWidth + "px";
    }

    window.onload = function() {
        const tabs = document.querySelectorAll('#current_opening_tab .nav-item')
        tabs.forEach((tab, index) => {
          tab.onclick = onTabClick;
          
          if(index == 0) setLineStyle(tab);
        })
    }























    
});