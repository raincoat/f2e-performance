$(function(){
  console.time('splite-text-to-span')
  console.profile('splite-text-to-span')
  var pureText = $('.pure-text')
    , str = $.trim(pureText.html())
    , wrap = $('<div>')
    , i = 0
    , l = str.length;

  while (i < l) {
    wrap.append($(document.createElement('span'), {
      text: str.charAt(i)
    }))
    i++
  }

  var spanText = $('<p>', {
    'class': 'span-text'
  })
  spanText.html(wrap.html())
  pureText.after(spanText)
  console.timeEnd('splite-text-to-span')
  console.profileEnd('splite-text-to-span')
})

$(function(){
  var noteWord = $('.word-note')
  var note = $('<div>', {
    'class': 'note'
  })
  $('body').append(note)
  var offset = noteWord.position()
  offset.top -= 5
  offset.left += 3
  note.css(offset)
})
