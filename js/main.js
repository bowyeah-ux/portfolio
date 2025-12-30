$(function(){
    // design CD 이미지 변경
    let cd = ['images/work_1.png', 'images/work_2.png', 'images/work_3.png', 'images/work_4.png', 'images/work_5.png']
    const defaultImg = 'images/designCD.png'
    let timer
    let codecd = ['images/coding_1.png', 'images/coding_2.png', 'images/coding_3.png', 'images/coding_4.png']
    const codingCD = 'images/publiCD.png'
    const pause = 'images/stopbutton.png'
    const play = 'images/playbutton.png'
    const Popco = 'images/priviaprocess.jpg'

   $('.designlist').click(function(){
    $('.designlist img').attr('src', play)
    $(this).find('img').attr('src', pause)
   

    clearTimeout(timer)

    let idx = $('.designlist').index(this)
    $('.designinfo > img').attr('src', cd[idx])
    $('.designinfo > img').removeClass('active')
    $('.design-inner .designinfo  > img').addClass('point')
    
    setTimeout(function(){
        $('.designinfo > img').addClass('active')
    }, 10)

    

   
    
    
    //--
})


$('.designlistwrap').mouseleave(function(){
    console.log('마우스 아웃! 8초 뒤 원래 이미지로 돌아갑니다.')

    timer = setTimeout(function(){
        let currentImg = $('.designinfo > img').attr('src')

        if(currentImg !== defaultImg){
            $('.designinfo > img').attr('src', defaultImg)
            $('.designlist img').attr('src', play)
            $('.design-inner .designinfo  > img').removeClass('point')

        }
       
    }, 8000)

    $('.designlistwrap').mouseenter(function(){
        clearTimeout(timer)
    })
})

   let timer2
   $('.codinglist').click(function(){
 $('.codinglist img').attr('src', play)
    $(this).find('img').attr('src', pause)
    $('.coding-inner .codinginfo  > img').addClass('point')

    clearTimeout(timer2)

    let idx2 = $('.codinglist').index(this)
    $('.codinginfo > img').attr('src', codecd[idx2])
    $('.codinginfo > img').removeClass('activee')

    setTimeout(function(){
        $('.codinginfo > img').addClass('activee')
    }, 10)

    
    
})

$('.codinglistwrap').mouseleave(function(){
    console.log('마우스 아웃! 8초 뒤 원래 이미지로 돌아갑니다')

    timer2 = setTimeout(function(){
        let codecurrentImg = $('.codinginfo > img').attr('src')

        if(codecurrentImg !== codingCD){
            $('.codinginfo > img').attr('src', codingCD)
            $('.codinglist img').attr('src', play)
            $('.coding-inner .codinginfo  > img').removeClass('point')
        }
        
    }, 8000)

    $('.codinglistwrap').mouseenter(function(){
        clearTimeout(timer2)
    })

})


$('.codinginfo > img').each(function(index, el2){
    $(el2).click(function(){
        let codecurrentImg = $(this).attr('src')
        let codingUrls = ['']

        if(codecurrentImg !== codingCD){
            let idx3 = codecd.indexOf(codecurrentImg)
            if(idx3 >= 0 && idx3 <=2){
                window.open(codingUrls[idx3], '_blank')
            }else if(idx3 === 3){
                $('.popup figure img').attr('src', Popco)
                $('.popup').addClass('pop')
                $('body').addClass('stopscroll')
                $('.popup a').addClass('gobtn')
            }
        }
    })
})

// .hero 끝날 때 헤더 나오기
let pageof = $('.track-inner').offset().top + $('.track-inner').outerHeight()
$(window).resize(function(){
    pageof = $('.track-inner').offset().top + $('.track-inner').outerHeight()
})

$(window).scroll(function(){
    let sc = $(window).scrollTop()

    if(sc >= pageof){
        $('header').addClass('menu')
    }else{
        $('header').removeClass('menu')
    }

    
    if($(window).scrollTop() >= 1000){
        $('.gotop').fadeIn()
    }else{
        $('.gotop').fadeOut()
    }
})
   
//고탑 누르면 맨 위로 올라가기
$('.gotop').click(function(e){
    e.preventDefault()
    $('html, body').animate({
        scrollTop :0
    }, 400)
})
   

//헤더 li 누르면 섹션으로 이동하기

$('header a').click(function(e){
    e.preventDefault()

    let target = $(this).attr('href')
    let targetPos = $(target).offset().top -160
    $('html, body').stop().animate({
        scrollTop: targetPos
    }, 500)

})

$('.listitem a').click(function(e){
    e.preventDefault()

    let targett = $(this).attr('href')
    let targetT = $(targett).offset().top -160
    $('html, body').stop().animate({
        scrollTop: targetT
    }, 500)
})

//list 클릭하면 popup뜨기

let popImage = ['images/banner1.png', 'images/banner2.png', 'images/banner3.jpg', 'images/catdetailpage.jpg', 'images/daeguredesign.jpg']

$('.designinfo > img').click(function(){
    let currentPop = $(this).attr('src')

    if(currentPop !== defaultImg){
        let popIdx = cd.indexOf(currentPop)
        $('.popup figure img').attr('src', popImage[popIdx])
        $('.popup').addClass('pop')
    }else{
        console.log('기본 이미지 상태입니다.')
    }
})



$('.designinfo > img').each(function(index, el){

    $(el).click(function(){
        let currentImg = $(this).attr('src')
        
        if(currentImg !== defaultImg){
            $('body').addClass('stopscroll')

        }
    })
    

})
$('.popup button').click(function(){
    $('.popup').removeClass('pop')
     $('body').removeClass('stopscroll')

})







//여기안에 다 써라
})