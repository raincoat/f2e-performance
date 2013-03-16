$(function(){
  var btn = $('.btn-animation')
    , topLeftSlide = $('.top-left-slide')
    , transition = $('.transition-slide')
  var topFn = function(){
    topLeftSlide.animate({
      'margin-left': '-2088px'
    }, 5000, 'linear', function(){
      topLeftSlide.css({'margin-left': '0'})
      btn.prop('disabled', false)
    })
  }
  btn.click(function(){
    btn.prop('disabled', true)
    topFn()
    transition.on('webkitTransitionEnd', function(){
      transition.css({
        '-webkit-transform': 'translate(0, 0)'
      , '-webkit-transition': 'none'
      })
    })
    transition.css({
      '-webkit-transform': 'translate(-2088px, 0)'
    , '-webkit-transition': '-webkit-transform 5s linear'
    })
  })
})
