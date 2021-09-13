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

    // this is for mobile header fix on scroll 
    var mobileHeader = $('#mobile_header');
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 130) {
            mobileHeader.addClass('fixed animated slideInDown');
        }
        else {
            mobileHeader.removeClass('fixed animated slideInDown');
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



    // scroll spy2 active 
    $('#scrollspy_nav2').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.1,
        filter: '',
        easing: 'linear',
        begin: function() {
            //I get fired when the animation is starting
            $('#mobile_sidebar_menu').toggleClass('show');
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
            
        }
    });


    // mobile sidebar toggle function
    $('.mobile_sidebar_toggle button').on('click',function(){
        $('#mobile_sidebar_menu').toggleClass('show');
    })

    $('.mobile_sidebar_close button').on('click',function(){
        $('#mobile_sidebar_menu').toggleClass('show');
    })

    $('.get_start_btn a').on('click',function(){
        $('#mobile_sidebar_menu').toggleClass('show');
    })


    

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



    // active type animation 
    var typed = new Typed("#typed", {
        stringsElement: '#typed-strings',
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 1000,
        loop: true,
        fadeOut: true,
        cursorChar: '|',
    });

    // active type animation 
    var typed = new Typed("#typed2", {
        stringsElement: '#typed-string2',
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 1000,
        loop: true,
        fadeOut: true,
        cursorChar: '|',
    });



















    
});