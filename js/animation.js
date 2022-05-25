 // 简单动画函数封装了obj目标对象target目标位置
 //  给不同元素指定了不同的定时器
 function animation(obj, target, callback) {
     //清除之前的定时器，防止叠加定时器
     clearInterval(obj.timer)
     obj.timer = setInterval(function() {

         //设置步长值,缓动可以由（目标值-现在的位置）/10
         var step = (target - obj.offsetLeft) / 20
         step = step > 0 ? Math.ceil(step) : Math.floor(step)
         if (obj.offsetLeft == target) {
             //到达目标位置停止定时器
             clearInterval(obj.timer)

             //回调函数写在定时器结束里面
             if (callback) {
                 //调用函数
                 callback();
             }
         }
         //匀速动画：盒子当前位置 + 固定的值
         //缓动动画：盒子当前位置 + 变化的值（目标值-现在的位置）/10
         obj.style.left = obj.offsetLeft + step + 'px';
     }, 10)
 }