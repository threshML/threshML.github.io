var myname = '警告';
// var age = 30;
// var email = '16866764597@qq.com'
// console.log(myname);
// console.log(age);
// console.log(email);
// var myname = prompt('请输入你的名字');
/* var sex;
console.log(sex);
不定义直接输出会出现undefined */




//js是动态语言，变量的类型是可以转变的

var timer = document.getElementById('time')
console.log(timer)
console.dir(timer)




//点击按钮弹出完成点击
var btn = document.getElementById('btn')
btn.onclick = function() { alert('完成点击') }




//点击显示当前时间



function shijian() {
    var time = new Date();
    var day = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var d = day[time.getDay()];


    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;

    return year + '年' + month + '月' + date + '日' + d + h + ':' + m + ':' + s;
}

var timer1 = document.getElementById('timer1');
var timer2 = document.getElementById('timer2');

timer1.onclick = function() {
        timer2.innerHTML = shijian()
    }
    //点击修改src属性
var src_change = document.getElementById('src_change')
var img = document.querySelector('#background')
var img_count = 1;
src_change.onclick = function() {
        if (img_count == 1) {
            img.src = '../img/backgroud_2.jpg';
            img_count = 2
        } else if (img_count == 2) {
            img.src = '../img/backgroud_1.jpg';
            img_count = 1
        }

    }
    //点击修改表单属性
var input_change = document.getElementById('input_change')
var input = document.getElementById('input')
input_change.onclick = function() {
        input.value = '被点击了'
        this.disabled = true;
    }
    //点击修改css样式
var style_change = document.getElementById('style_change')
var div = document.getElementById('style_div')
var style_count = 1;
style_change.onclick = function() {
    if (style_count == 1) {
        style_count = 0;
        div.className = 'div2'
    } else {
        style_count = 1;
        div.setAttribute('class', 'div1') //设置自定义属性值方法推荐
    }
}


//获取多个元素；
var btns = document.getElementsByClassName('btns')
for (var i = 0; i <= btns.length - 1; i++) {
    btns[i].onclick = function() {
        for (var j = 0; j <= btns.length - 1; j++) { //先将其他所有元素清除样式
            btns[j].style.backgroundColor = '';
            btns[j].style.color = ''
        }
        this.style.backgroundColor = 'red'; //给选中的元素设置样式
        this.style.color = 'white'

    }
}


//事件监听注册事件

var jianting_btn = document.querySelector('.jianting').querySelector('button');
jianting_btn.addEventListener('click', function() {
    alert('这是事件监听注册事件')
})
jianting_btn.addEventListener('click', function() {
    alert('事件监听注册事件不会覆盖上一个事件，只要触发都会执行')
})
jianting_btn.addEventListener('click', fn) //这里调用函数不加括号

function fn() {
    alert('移除最好使用非匿名函数来做');
    jianting_btn.removeEventListener('click', fn)
}


//按s直接进入搜索框；

var search = document.querySelector('#search');

document.addEventListener('keyup', function(e) {
    console.log(e.code)
    if (e.code == 'KeyS') {
        search.focus();
        search.value = '';
    }
})


//页面切换
var page = document.querySelectorAll('.page');
var page_btn = document.querySelectorAll('.page_btn');


for (var i = 0; i < page_btn.length; i++) {
    page_btn[i].setAttribute('index', i); //给每个list设置一个index自定义属性
    page_btn[i].onclick = function() {

        for (var i = 0; i < page_btn.length; i++) {
            page_btn[i].className = '';
            page[i].className = 'page_current2';
        } //排他性，将其他的list和con都设为空
        this.className = 'current';
        var index = this.getAttribute('index') //获取导航栏设置的index
            //显示内容模块
        page[index].className = 'page_current';

    }
}



//计时器

//settimeout单次调用

var ad = document.querySelector('#ad');
var timer_a = setTimeout(function() {
    ad.style.display = 'none'
}, 5000)


//停止计时器

var ad_stop = document.querySelector('#ad_stop')
ad_stop.addEventListener('click', function() {
    clearTimeout(timer_a)
})

//setinterval循环调用


// 短信验证
var ad_stop2 = document.querySelector('#ad_stop2')
var Times = 5;


ad_stop2.addEventListener('click', function() {
    ad_stop2.disabled = true;
    setInterval(timer_b);
    var timer_b = setInterval(function() {

        ad_stop2.innerHTML = '还剩下' + Times + "秒";
        if (Times > 0) {
            Times--;
        } else {
            clearInterval(timer_b);
            ad_stop2.disabled = false;
            ad_stop2.innerHTML = '发送'
            Times = 5; //下次点击需要重新从5开始倒数
        }
    }, 1000)
})

//setinterval循环调用


// function shijian() {
//     var time = new Date();
//     var day = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
//     var year = time.getFullYear();
//     var month = time.getMonth() + 1;
//     var date = time.getDate();
//     var d = day[time.getDay()];


//     var h = time.getHours();
//     h = h < 10 ? '0' + h : h;
//     var m = time.getMinutes();
//     m = m < 10 ? '0' + m : m;
//     var s = time.getSeconds();
//     s = s < 10 ? '0' + s : s;

//     return year + '年' + month + '月' + date + '日' + d + h + ':' + m + ':' + s;
// }
var timer_1 = document.querySelector('#timer_1');
timer_1.innerHTML = shijian();
setInterval(function() { timer_1.innerHTML = shijian(); }, 1000)


//location对象
var location_btn = document.querySelector('#location_btn');
location_btn.addEventListener('click', function() {
    location.href = ' http://127.0.0.1:5501/%E7%BB%83%E4%B9%A0/html/js%E7%BB%83%E4%B9%A0/js%E8%B7%B3%E8%BD%AC%E9%A1%B5%E9%9D%A2.html' //给location一个新的值可以跳转页面
})

//分时段问候
var time = new Date()
var hour = time.getHours()
var wenhou = document.getElementById('wenhou')
var uname_account = location.search.substr(1)
var arr_account = uname_account.split('=')

if (hour < 12) {
    wenhou.innerHTML = '早上好,' + arr_account[1]


} else if (hour == 12) {
    wenhou.innerHTML = '中午好,' + arr_account[1]

} else if (hour > 12 && hour < 18) {
    wenhou.innerHTML = '下午好,' + arr_account[1]

} else {
    wenhou.innerHTML = '晚上好,' + arr_account[1]

}

var slider = document.querySelector('.slider')
document.addEventListener('scroll', function() {
    if (window.pageYOffset >= 900) {
        slider.style.display = 'block'
    } else {
        slider.style.display = 'none'
    }
})

slider.addEventListener('click', function() {
    animation(window, 0)
})


function animation(obj, target, callback) {
    //清除之前的定时器，防止叠加定时器
    clearInterval(obj.timer)
    obj.timer = setInterval(function() {

        //设置步长值,缓动可以由（目标值-现在的位置）/10
        var step = (target - window.pageYOffset) / 20
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (window.pageYOffset == target) {
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
        window.scroll(0, window.pageYOffset + step)
    }, 10)
}


//数据存储
var ipt = document.querySelector('#ipt')
var set = document.querySelector('#set')
var get = document.querySelector('#get')
var remove = document.querySelector('#remove')
var del = document.querySelector('#del')


set.addEventListener('click', function() {
    var val = ipt.value;
    window.sessionStorage.setItem('uname', val)
})

get.addEventListener('click', function() {

    var getval = window.sessionStorage.getItem('uname')
    console.log(getval)
})


remove.addEventListener('click', function() {

    window.sessionStorage.removeItem('uname')

})


del.addEventListener('click', function() {

    window.sessionStorage.clear();

})