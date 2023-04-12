//header 색상변경
let headerHeight = $('header').outerHeight();
$(window).on('scroll',function(){
    if($(window).scrollTop()>=headerHeight){
        $('.header').addClass('active');
    }else{
        $('.header').removeClass('active');
    }
});

// const body = document.getElementsByTagName('body')[0];
// body.classList.add('scrollLock');

//local icon sub-menu
const local_icon = $('.local-switcher-icon')
const switcher_drop = $('.switcher-drop')

local_icon.click(function(){
    switcher_drop.toggleClass('active')
})


//pop-up
const first_logo = $('.first-logo')
const header_popup = $('.header-popup')
const popup_logo = $('.popup-logo')
const popup_close_btn = $('.popup-close-btn')

first_logo.click(function(){
    header_popup.addClass('active')
})
// header_popup.mouseleave(function(){
//     header_popup.removeClass('active')
// })
popup_logo.click(function(){
    header_popup.removeClass('active')
})
popup_close_btn.click(function(){
    header_popup.removeClass('active')
})

$(function(){
    $('.first-logo').click(function(){
        $('html, body').addClass('hidden')
        $('components-card').hide();
        
    })
    $('.popup-logo').click(function(){
        $('html, body').removeClass('hidden')
        $('.components-card').hide();
    })
    $('.header-popup').click(function(){
        $('html, body').removeClass('hidden')
    })
})

$(function(){
    $('.footer-gotop').click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        },500)
    })
})
//tab menu
$(function(){
    const tabAnchor = $('.popup-submenu'),
          tabPanel = $('.components-card');
          cardBasic = $('.card-basic')
        //   console.log(tabAnchor);
        //   console.log(card-basic)
          console.log(tabPanel)
    //링크에 mouseenter 했을때 할일
    tabPanel.hide();
    tabAnchor.mouseenter(function(e){  
        tabPanel.show();
        tabPanel.find('a').hide();
        cardBasic.hide();       
       
        let target = $(this).find('a').attr('href');
        console.log($(target))
        $(target).fadeIn(200);

    })
    tabAnchor.mouseleave(function(e){  
        tabPanel.hide();
        cardBasic.fadeIn(400);
    })
    
    // tabAnchor.eq(0).trigger('mouseenter')
});