$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._ef_').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    })


    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        // 💫스와이퍼
        parallax: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',
        on: {
            slideChangeTransitionStart: function () {
                $('.main_visual .dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    });

    $('.main_visual .dots li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        mainSlide.slideTo(idx);
    })


    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });

    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });


    const ItmSlide = new Swiper('.itm_slide', {
        loop: true,
        slidesPerView: 3.5,
        spaceBetween: 10,
        speed: 900,
        slideActiveClass: 'on',
        // 필터효과
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.main_product .pro_btn a')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    });


    $('.main_product .pro_arrows .left').on('click', function () {
        ItmSlide.slidePrev();
    });

    $('.main_product .pro_arrows .right').on('click', function () {
        ItmSlide.slideNext();
    });




    $('.tab_link li').on('click', function (event) {
        event.preventDefault();
        let idx = ($(this).index()) //0,1,2

        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.tab_content .con').eq(idx).addClass('on')
            .siblings().removeClass('on');

        console.log(event, event.target, event.currentTarget, $(this), $(this).index())

    });




    //up
    $(function () {
        $('.to_top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500)
        });
    });

    // 비쥬얼에 가면 사라짐
    $(window).on('scroll', function () {
        // 변수에 스크롤한 양을 저장
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 300) {
            // 스크롤 내린만큼 오면 나타나기
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }
    });



})
