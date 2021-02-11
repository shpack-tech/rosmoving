$(document).ready(function(){
    var mp = 1;
    $('#question1').click(function(){
        if ($('#where').val() === '' || $('#from').val() === ''){
            if ($('#where').val() === ''){
                $('#where').css({
                    'background' : 'rgba(236, 36, 36, 0.4)'
                })
            } else {
                $('#where').css({
                    'background' : '#f6f6f6'
                })
            }
            if ($('#from').val() === ''){
                $('#from').css({
                    'background' : 'rgba(236, 36, 36, 0.4)'
                })
            } else {
                $('#from').css({
                    'background' : '#f6f6f6'
                })
            }
        } else {
            $('#where, #from').css({
                'background' : '#f6f6f6'
            })
            $('.questions').css({
                'transform' : 'translateX('+ -950*mp +'px)'
            })
            mp++;
        }
    })
    $('#question2').click(function(){
        if ($('#volume').val() === '' || $('#weight').val() === ''){
            if ($('#volume').val() === ''){
                $('#volume').css({
                    'background' : 'rgba(236, 36, 36, 0.4)'
                })
            } else {
                $('#volume').css({
                    'background' : '#f6f6f6'
                })
            }
            if ($('#weight').val() === ''){
                $('#weight').css({
                    'background' : 'rgba(236, 36, 36, 0.4)'
                })
            } else {
                $('#weight').css({
                    'background' : '#f6f6f6'
                })
            }
        } else {
            $('#weight, #volume').css({
                'background' : '#f6f6f6'
            })
            $('.questions').css({
                'transform' : 'translateX('+ -950*mp +'px)'
            })
            mp++;
        }
    })
    $('#question3').click(function(){
        if ($('#name').val() === '' || $('#mphone').val() === ''){
            if ($('#name').val() === ''){
                $('#name').css({
                    'background' : 'rgba(236, 36, 36, 0.4)'
                })
            } else {
                $('#name').css({
                    'background' : '#f6f6f6'
                })
            }
            if ($('#mphone').val() === ''){
                $('#mphone').css({
                    'background' : 'rgba(236, 36, 36, 0.4)'
                })
            } else {
                $('#mphone').css({
                    'background' : '#f6f6f6'
                })
            }
        } else {
            $('#mphone, #name').css({
                'background' : '#f6f6f6'
            })
            $('.questions').css({
                'transform' : 'translateX('+ -950*mp +'px)'
            })
            mp++;
        }
    })
    $('.fb-review').click(function(e){
        $('.fb-review').removeClass('fb-review-acrive');
        $(e.target).addClass('fb-review-acrive');
        if ($($('.fb-review')[0]).hasClass('fb-review-acrive')){
            $('.video-rev').hide();
            $('.rev-slider').show();
        } else if ($($('.fb-review')[1]).hasClass('fb-review-acrive')){
            $('.rev-slider').hide();
            $('.video-rev').show();
            
        }
    })
    $(document).on("click","a", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });


    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 63,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next-made',
          prevEl: '.swiper-button-prev-made',

          
        },
      });
      const vid = new Swiper('.video-rev', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next-vid',
          prevEl: '.swiper-button-prev-vid'
        },
      });

      $('.swiper-button-prev-made').mousedown(function(){
        $('.swiper-button-prev-made').css({
            'border-bottom': '2px solid rgb(175, 174, 175)',
            'border-left': '2px solid rgb(175, 174, 175)'
        })
      })
      $('.swiper-button-next-made').mousedown(function(){
        $('.swiper-button-next-made').css({
            'border-bottom': '2px solid rgb(175, 174, 175)',
            'border-right': '2px solid rgb(175, 174, 175)'
        })
      })
      $('.swiper-button-prev-made').mouseup(function(){
        $('.swiper-button-prev-made').css({
            'border': 'none'
        })
      })
      $('.swiper-button-next-made').mouseup(function(){
        $('.swiper-button-next-made').css({
            'border': 'none'
        })
      })
//     $('.swiper-button-prev-made').mouseup($('.swiper-button-prev-made').css({
//       'border': 'none'
//     }))
//     $('.swiper-button-next-made ').mouseup($('.swiper-button-next-made ').css({
//       'border': 'none'
//   }))
    $('#call, #mphone').mask('+7 999 999 99 99')
    var player = new Playerjs({id:"player", file:"https://www.youtube.com/watch?v=CqKdqh6n_QU"});
});