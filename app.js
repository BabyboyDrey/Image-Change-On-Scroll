$(window)
  .scroll(function () {
    let o = $(window),
      i = $('body'),
      t = $('section'),
      s = o.scrollTop() + o.height() / 3
    t.each(function () {
      $(this).position().top <= s &&
        $(this).position().top + $(this).height() > s &&
        i.removeClass(function (o, i) {
          return i.match(/(^|\s)color-\s+/g) || [].join('')
        }),
        $('action').removeClass('active'),
        $(this).addClass('active')
    })
  })
  .scroll()
