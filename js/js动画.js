 //设置动画效果
 var div_donghua = document.querySelector('#donghua')
 var btn = document.querySelector('button')
 var btn500 = document.querySelector('.btn500')
 var btn800 = document.querySelector('.btn800')



 btn.addEventListener('click', function() {
     animation(div_donghua, 300, function() {
         div_donghua.style.background = 'red'
     })
 })
 btn500.addEventListener('click', function() { animation(div_donghua, 500) })
 btn800.addEventListener('click', function() { animation(div_donghua, 800) })


 var sliderbar = document.querySelector('.sliderbar')
 var con = document.querySelector('.con')
 sliderbar.addEventListener('mouseenter', function() {
     animation(con, -150, function() {
         sliderbar.children[0].innerHTML = '→'
     })
 })

 sliderbar.addEventListener('mouseleave', function() {
     animation(con, 0, function() {
         sliderbar.children[0].innerHTML = '←'
     })
 })