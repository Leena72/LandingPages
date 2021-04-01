function section1_animation() {
    $('#section1 .heading-1').addClass('animation-s1-h1')
    $('#section1 .heading-2, #section1 .flag ').addClass('animation-s1-h2')
    $('#section1 .content ,#section1 .line-img>img').addClass('animation-s1-content')
    $('#section1 .flag1').addClass('animation-s1-flag1')
    $('#section1 .flag2').addClass('animation-s1-flag2')

}

function section2_animation() {
    $('#section2 .heading-1,#section2 .content').addClass('animation-s2-h1')
    $('#section2 .heading-2,#section2 .line-img>img ').addClass('animation-s2-h2')
    $(' #section2 .navigate-desk,#section2 .navigate-mob').addClass('animation-s2-btn')
}

function section3_animation() {
    $('#section3 .frame-contentBody').addClass('animation-s3-framebody')
    $('#section3 .board, #section3 .web-board').addClass('animation-s3-board')
}

function section4_animation() {
    $('#section4 .timer-img').addClass('animation-s4-timer')
    $('#section4 .fr4-board, #section4 .fr4-webboard').addClass('animation-s4-board')
}
function section5_animation() {
    $('#section5 .answerBoxImg').addClass('animation-s5-answerBoxImg')
    $('#section5 .heading-1 , #section5 .navigate-btn').addClass('animation-s5-h1')
}

function section7_animation() {
    $('#section7 .timer-img').addClass('animation-s7-timer')
    $('#section7 .fr4-board, #section7 .web-board').addClass('animation-s7-board')
}

function section8_animation() {
    $('#section8 .answerBoxImg-fr8 img').addClass('animation-s8-answerBoxImg-fr8')
    $('#section8 .content ').addClass('animation-s8-content')
}

function section9_animation() {
    $('#section9 .answerBoxImg-fr9 img').addClass('animation-s9-answerBoxImg-fr9')
    $('#section9 .heading-1 ').addClass('animation-s9-h1')
    $('#section9 .navigate-btn ').addClass('animation-s9-btn')
}

function section10_animation() {
    $('#section10 .timer-img').addClass('animation-s10-timer')
    $('#section10 .fr4-board, #section10 .web-board').addClass('animation-s10-board')
}

function section11_animation() {
    $('#section11 .answerBoxImg-fr11 img').addClass('animation-s11-answerBoxImg-fr11')
    $('#section11 .content ').addClass('animation-s11-content')
}

function section12_animation() {
    $('#section12 .timer-img').addClass('animation-s12-timer')
    $('#section12 .fr4-board, #section12 .web-board').addClass('animation-s12-board')
}

function section13_animation() {
    $('#section13 .answerBoxImg-fr13 img').addClass('animation-s13-answerBoxImg-fr13')
    $('#section13 .content ').addClass('animation-s13-h1')
    $('#section13 .navigate-btn-fr13 ').addClass('animation-s13-btn')
}

function section14_animation() {

    // $('.custom-graph').slick({
    //     dots:true,
    //     arrows: false,
    //     infinte:false


    // });


    $('#section14 .fr14-heading').addClass('animation-s14-heading')
    $('#section14 .navigate-btn ').addClass('animation-s14-btn')
    $('#section14 .fr-14-content ').addClass('animation-s14-fr-14-content')
    $('#section14 .graph ').addClass('animation-s14-graph')

    setTimeout(function () {
        setTimeout(function () {
            setTimeout(function () {
                setTimeout(function () {
                    setTimeout(function () {
                        setTimeout(function () {
                            ll_move('prsec6')
                        }, 1000)
                        ll_move('prsec5')
                    }, 2000)
                    ll_move('prsec4')
                    $('.custom-graph').slick('slickGoTo', 1);
                }, 1000)

                ll_move('prsec3')
            }, 1000)

            ll_move('prsec2')
        }, 1000)

        ll_move('prsec1')
    }, 2000)


}

function section15_animation() {

    $('#section15 .fr14-heading').addClass('animation-s15-heading')
    $('#section15 .navigate-btn-fr15 ').addClass('animation-s15-btn')
    $('#section15 .fr-14-content ').addClass('animation-s15-fr-15-content')
    $('#section15 .graph ').addClass('animation-s15-graph')
    // $('.custom-graph-2').slick({
    //     dots:true,
    //     arrows: false,
    //     infinte:false


    // });
    setTimeout(function () {
        setTimeout(function () {
            setTimeout(function () {
                setTimeout(function () {

                    ll_move('prsec10')

                }, 1000)

                ll_move('prsec9')
                $('.custom-graph-2').slick('slickGoTo', 1);
            }, 2000)

            ll_move('prsec8')
        }, 1000)

        ll_move('prsec7')
    }, 1000)
}

function section16_animation() {
    $('#section16 .fr14-heading').addClass('animation-s16-heading')
    $('#section16 .navigate-btn ').addClass('animation-s16-btn')
    $('#section16 .Graph-83 ').addClass('animation-s16-Graph-83')
    $('#section16 .graph-fr16 img').addClass('animation-s16-graph-fr16')
}

function section17_animation() {
    $('#section17 .fr14-heading').addClass('animation-s17-heading')
    $('#section17 .navigate-btn-fr17').addClass('animation-s17-btn')
    $('#section17 .graph').addClass('animation-s17-graph')
}

function section18_animation() {
    $('#section18 .frame-content').addClass('animation-s18-frame-content')
    $('#section18 .button-section ').addClass('animation-s18-btn')
    $('#section18 .carousel ').addClass('animation-s18-carousel')

}