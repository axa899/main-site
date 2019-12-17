TweenMax.set('svg', {
  visibility:'visible'
})

var tl = new TimelineMax({repeat:-1});
tl.to('#gradPattern', 5, {
  attr:{
    x:400
  },
  ease:Linear.easeNone
})
