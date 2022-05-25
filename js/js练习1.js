/* var temp = 'aaa';
var apple1 = 'bbb';
var apple2 = 'ccc';
temp = apple1;
apple1 = apple2;
apple2 = temp;
console.log(apple1);
console.log(apple2);
元素交换 */


/* var num = 10; //数值型
num = 'pink'; //字符串型
console.log(num) */

/* var num1 = 010; //八进制
console.log(num1);
var num2 = 0x1f; //十六进制
console.log(num2); */

/* console.log(Number.MAX_VALUE); //数字型的最大值
console.log(Number.MIN_VALUE); //数字型的最小值
console.log(-Number.MAX_VALUE * 2); //也可以输出无穷大，加个-即为无穷小
console.log(Infinity); //数字型的无穷大，大于任何数
console.log(isNaN('不是数字')); //不是数字返回true
console.log('dddd'.length) //显示字符串的长度
var str = 'aaaa'
console.log(str.length); //这样也可以显示
console.log(typeof 10); //可以显示变量的类型这里显示number
var timer = null;
console.log(typeof timer) //这里显示的是object
var num3 = 10;
//console.log(num3.toString());
//console.log(String(num3));
console.log(num3 + ''); //拼接，隐式转换 */




/* var myname = prompt('请输入您的姓名');
var myage = prompt('请输入您的年龄');
var mysex = prompt('请输入您的性别');
alert('您的姓名是' + myname + '\n' + '您的年龄是' + myage + '\n' + '您的性别是' + mysex); */


// console.log(0.1 + 0.2); //浮点数运算结果会出问题0.300000000004


// var age = 10;
// console.log(age++ + 10); //返回的是20
// console.log(age); //返回11
// 后置递增是运算完再自增


// var e = 10;
// var f = e++ + ++e; //e++ 先返回原值10，然后e+1=11，再执行++e，此时e为11，再1+e=12，相加得22
// console.log(f);



// console.log(0 && 456);//两边都是数值，&&遇到假值则逻辑中断，直接返回，||遇到真值则逻辑中断，直接返回，表达式二不再执行运算



// var year = prompt('请输入年份')
// 判断闰年
/* if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    alert('该年是闰年');
} else {
    alert('该年不是闰年');
} */


// 判断成绩
/* var grade = prompt('请输入成绩');
if (grade >= 90) {
    alert('成绩为A');
} else if (grade >= 80) {
    alert('成绩为B');
} else if (grade >= 70) {
    alert('成绩为C');
} else if (grade >= 60) {
    alert('成绩为D');
} else {
    alert('成绩为E');
} */


//三元表达式
/* var age = 10;
var result = age > 5 ? '真' : '假';
console.log(result); */


//数字补零
/* var time = parseInt(prompt('请输入0-59的数字'));
var judge = time > +10 ? time : '0' + time;
console.log(judge) */

//switch
/* var shuiguo = prompt('请输入水果名称');
switch (shuiguo) {
    case '苹果':
        alert('苹果5毛一斤');
        break;
    case '香蕉':
        alert('香蕉6毛一斤');
        break;
    case '西瓜':
        alert('西瓜8毛一斤');
        break;
    default:
        alert('没有出售该水果');
        break;
} */

//for循环语句
/* var num = prompt('请输入执行的次数')
for (var i = 1; i <= num; i++) { console.log('这是执行的第' + i + '次') } */

//for循环求1+2+3+……100和
// var sum = 0;
// for (var i = 1; i <= 100; i++) {
//     sum = sum + i;
// }
// console.log(sum);

//求学生成绩的案例
/* var num = prompt('请输入学生人数');
var sum = 0;
var avg = 0;
for (var i = 1; i <= num; i++) {
    var grade = parseInt(prompt('请输入第' + i + '个学生的成绩'));
    sum = sum + grade;
}
avg = sum / num;
console.log(sum);
console.log(avg); */

//打印五行五列的数
/* var row = parseInt(prompt('请你输入行数'));
var col = parseInt(prompt('请你输入列数'));
var str = '';
for (var i = 1; i <= row; i++) {
    for (var j = 1; j <= col; j++) {
        str = str + 1;
    }
    str = str + '\n';
}
console.log(str) */

//打印九九乘法表
/* var result = 0;
var str = ''
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        result = i * j;
        str = str + j + '*' + i + '=' + result + '\t';
    }
    str = str + '\n';
}
console.log(str); */

//求1-100中，除了能被7整除的数
/* var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0) { continue; }
    sum += i;
}
console.log(sum); */

/* var arr = [1, 2, 3, 4];
console.log(arr[3]); */ //索引标签从0开始，所以这里输出的是4

//遍历数组
/* var arr = ['red', 'blue', 'yellow']
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(arr.length); */

//求数组的平均值和总和，最大值
/* var arr = [1, 2, 3, 4, 5, 6];
var sum = 0;
var avg = 0;
var max = arr[0];
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
        max = arr[i]
    }
}
avg = sum / arr.length;
console.log(sum, avg, max) */

// 数组转换为分割字符串
/* var arr = ['red', 'green', 'yellow', 'blue'];
var str = '';
for (i = 0; i < arr.length; i++) {
    str = str + arr[i] + '|'
}
console.log(str) */

//修改length的长度来实现数组扩容
/* var arr = ['red', 'green', 'yellow', 'blue'];
// arr.length = 5; //原来的不动，加两个空值undefined
arr[5] = 'purple';
console.log(arr); */

//新建数组，存放1-10
/* var arr = [];
for (var i = 0; i <= 9; i++) {
    arr[i] = i + 1;
}
console.log(arr) */

//筛选数组
/* var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var arr1 = []; */
/* var count = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {

        arr1[count] = arr[i];
        count++;
    }
}
console.log(arr1) */
/* for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        arr1[arr1.length] = arr[i];
    }
}
console.log(arr1) */


//删除指定数组的元素
/* for (var i = 0; i < arr.length; i++) {

    if (arr[i] == 0) {
        continue;
    }
    arr1[arr1.length] = arr[i];
}
console.log(arr1) */

//翻转数组
/* var arr = ['red', 'green', 'yellow', 'blue'];
var newarr = []
for (var i = arr.length - 1; i >= 0; i--) {
    newarr[newarr.length] = arr[i]
}
console.log(newarr); */


//冒泡排序
/* var arr = [5, 4, 3, 2, 1];
var temp = 0;
for (var i = 0; i <= arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {

            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;

        }
    }
}
console.log(arr) */

//调用函数
/* function getsum(num1, num2) {
    var sum = 0;
    for (var i = num1; i <= num2; i++) {

        sum = sum + i;
    }
    return sum;
}
console.log(getsum(1, 100)); */

//利用函数求两数最大值；
// function max(num1, num2) {
/*  if (num1 > num2) {
     return num1;
 } else {
     return num2;
 } */
//三元表达式
//     return num1 > num2 ? num1 : num2
// }
// console.log(max(3, 4))

//求数组中的最大值；
/* function max(arr) {

    var maxarr = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxarr) {
            maxarr = arr[i];
        }
    }
    return maxarr;
}

console.log(max([1, 3, 4, 5, 10])) */


//返回多个值，用数组表示
/* function getResult(num1, num2) {

    return [num1 + num2, num1 - num2, num1 * num2, num1 / num2]
}

console.log(getResult(10, 5)) */

//利用函数求任意个数的最大值
/* function max() {

    var maxarr = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] > maxarr) {
            maxarr = arguments[i];
        }
    }
    return maxarr;
}

console.log(max(1, 2, 3, 3, 4, 5)) */

//函数封装冒泡排序
/* function sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(sort([4, 123, 31, 3, 123, 1])) */
//函数判断闰年
/* function isRunYear(year) {
    var flag = false;
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        flag = true;
    }
    return flag;
} */

//函数调用函数
/* var year = prompt('请输入年份');

function isRunYear(year) {
    var flag = false;
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        flag = true;
    }
    return flag;
}

function backDay(year) {
    if (isRunYear(year) == true) {
        alert('有29天')
    } else {
        alert('有28天')
    }
}
backDay(year); */

//预解析案例
/* 案例1
var num = 10;
fun();

function fun() {
    console.log(num);
    var num = 20;
}

该情况等于
var num;

function fun() {
    var num;
    console.log(num); //此时输出结果为undefined
    num = 20;
}
num = 10;
fun();

案例2
var num2 = 10;

function fn() {
    console.log(num2);
    var num2 = 20;
    console.log(num2);
}
fn();

该情况等于

var num2;

function fn() {
    var num2;
    console.log(num2); //就近原则输出undefined
    num2 = 20;
    console.log(num2); //输出20；
}
num2 = 10;
fn(); */

//对象 函数构造对象
/* function Star(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sing = function(song) {
        console.log(song)
    }

}
var ldh = new Star('刘德华', 18, '男');
var zxy = new Star('张学友', 18, '男');
ldh.sing('冰雨');
console.log(ldh.name);
console.log(zxy['sex']); */


//遍历对象
/* var obj = {
    uname: '罗经',
    age: 18,
    sex: '男'
}
for (var key in obj) {
    console.log(key) //输出的是属性名
    console.log(obj[key]) //输出属性值
} */

//对象案例
//案例一
/* function Computer(color, weight, type) {
    this.color = color;
    this.weight = weight;
    this.type = type;
    this.fun = function(using) {
        console.log(using)
    }

}
var huashuo = new Computer('黑色', '10kg', '天选');
huashuo.fun('打游戏');
for (k in huashuo) {
    console.log(k);
    console.log(huashuo[k]);
}
//案例二

function Btn(width, height, bgcolor) {
    this.width = width;
    this.height = height;
    this.background_color = bgcolor;
    this.click = function(event) {
        console.log(event);
    }
}
var smallbtn = new Btn('200px', '300px', 'red')
smallbtn.click('ssss');
for (k in smallbtn) {
    console.log(smallbtn[k]);
} */

/* function fanzhuan() {
    var newarr = [];
    for (var i = arguments.length - 1; i >= 0; i--) {
        newarr[newarr.length] = arguments[i];
    }
    return newarr;
}

console.log(fanzhuan(1, 3, 3, 4, 4, 5)) */

//调用内置对象
/* var max = Math.max(1, 4);
console.log(max);
console.log(Math.PI);

var myMath = {
    PI: 3.14,
    MAX: function() {
        var max = arguments[0];
        for (var i = 1; i <= arguments.length - 1; i++) {
            if (arguments[i] > max) {
                max = arguments[i]
            }
        }
        return max
    },
    MIN: function() {
        var min = arguments[0];
        for (var i = i; i <= arguments.length - 1; i++) {
            if (arguments[i] < min) {
                min = arguments[i]
            }
        }
        return min
    }
}
console.log(myMath.PI)
console.log(myMath.MAX(1, 9, 123, 1, 32), myMath.MIN(1, 9, 32, 31, 2))

function getRandom(min, max) {
    return Math.floor(Math.random * (max - min + 1) + min)
} */


//猜数字游戏
/* var num = Math.floor(Math.random() * 10 + 1);
var flag = false;
while (flag == false) {
    var num2 = prompt('请输入数字')
    if (num2 == num) {
        flag = true;
        alert('恭喜你猜对了')
    } else if (num2 > num) {
        alert('数字大了')
    } else if (num2 < num) {
        alert('数字小了')
    }
} */

//date()
/* var date = new Date();
var day = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
console.log(date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日' + day[date.getDay()]);

function shijian() {
    var time = new Date();
    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;




    return h + ':' + m + ':' + s;
}
console.log(shijian()) */

//倒计时
/* function countDown(time) {
    var nowTime = +new Date();
    var inputTime = +new Date(time);
    var times = (inputTime - nowTime) / 1000;
    var d = parseInt(times / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    var h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    var s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    console.log(d + '天' + h + '小时' + m + '分钟' + s + '秒')
}
countDown('2021-9-1 10:00:00'); */

//筛选数组案例
/* var arr = [1500, 1200, 2000, 2100, 1800];
var newarr = [];
for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] <= 2000) {
        newarr.push(arr[i]);
    }
}
console.log(newarr);
var resarr = arr.reverse(); //翻转数组
var sortarr = arr.sort(function(a, b) { return a - b }); //冒泡排序 */

//数组去重(重要案例)
/* var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b']

function unique(arr) {
    var newArr = [];
    for (var i = 0; i <= arr.length - 1; i++) {

        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(unique(arr)) */

//返回字符位置

// var str = "avcdefgadaszaasdd";
/* var index = str.indexOf('d');
var count = 0;
while (index !== -1) {
    console.log(index)
    count++;
    index = str.indexOf('d', index + 1) //从找过的之后开始继续找
}
console.log(count) */


//统计出现次数最多的字符
/* var o = {};
for (var i = 0; i < str.length; i++) {
    var chars = str.charAt(i);
    if (o[chars]) { //o[chars]说明o这个对象中已经有这个属性了，属性值要++
        o[chars]++;
    } else {
        o[chars] = 1; //在查找第一次的时候0={}为空值
    }

}
var max = 0;
var ch = '';
for (var k in o) {

    if (o[k] > max) {
        max = o[k];
        ch = k;
    }
}
console.log(o);
console.log(max);
console.log('出现次数最多的是' + ch) */

//

//分时段问候
var time = new Date();
var hour = time.getHours();
var wenhou = document.getElementById('wenhou')

if (hour < 12) {
    wenhou.innerHTML = '早上好';


} else if (hour == 12) {
    wenhou.innerHTML = '中午好';

} else if (hour > 12 && hour < 18) {
    wenhou.innerHTML = '下午好';

} else {
    wenhou.innerHTML = '晚上好';

}

//选图片为body背景
var imgs = document.querySelector('.baidu').querySelectorAll('img');
for (i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function() {
        for (j = 0; j < imgs.length; j++) {
            imgs[j].style.border = '';
        }
        this.style.border = '2px solid white';
        document.body.style.background = 'url(' + this.src + ') no-repeat'
        document.body.style.backgroundSize = '100% '
    }

}

//表格经过
var trs = document.querySelector('tbody').querySelectorAll('tr')
for (i = 0; i < trs.length; i++) {
    trs[i].onmouseover = function() {
        this.className = 'bg'
    }
    trs[i].onmouseout = function() {
        this.className = ''
    }
}

//表格全选
var checkbox_th = document.getElementById('allchecked');
var checkbox_tb = document.querySelector('tbody').querySelectorAll('input');

// checkbox_th.onclick = function() { //onclick才是个事件，checked是个状态
//     for (var i = 0; i < checkbox_tb.length; i++) {
//         checkbox_tb[i].checked = this.checked
//     }
// }

// for (var i = 0; i < checkbox_tb.length; i++) {
//     checkbox_tb[i].onclick = function() {
//         var flag = true;
//         for (var j = 0; j < checkbox_tb.length; j++) {
//             if (!checkbox_tb[j].checked) {
//                 flag = false;
//                 break;
//             }
//         }
//         checkbox_th.checked = flag
//     }
// }
//jq写法
$(function() {
    // 全选框选中全选
    $('#allchecked').change(function() {
        $('tbody input').prop('checked', $('#allchecked').prop('checked'))
            // console.log($('tbody input:checked').length)
    })

    // 小复选框选全部选中，全选框选中
    $('tbody input').change(function() {
        if ($('tbody input:checked').length === $('tbody input').length) {

            $('#allchecked').prop('checked', true);
        } else {
            $('#allchecked').prop('checked', false);
        }
    })

})


// 购物车功能
$(function() {



    $('.add').click(function() {

        var n = $(this).siblings('.form-control').val()
        n++
        $(this).siblings('.form-control').val(n)
        var prize = $(this).parent().siblings('.prize').html()
        var sum = 0
        sum = n * prize
        $(this).parent().siblings('.count_sum').text(sum)


    })

    $('.cut').click(function() {

            var n = $(this).siblings('.form-control').val()
            n--
            if (n <= 0) {
                n = 0
            }
            $(this).siblings('.form-control').val(n)
            var sum = 0
            var prize = $(this).parent().siblings('.prize').html()
            sum = n * prize
            $(this).parent().siblings('.count_sum').text(sum)


        })
        // $('.form-control').change(function() {
        //     getSum()
        //     console.log('1')
        // })


    function getSum() {
        var count = 0
        $('.count_sum').each(function(i, domEle) {
            count += parseInt($(domEle).text())
            console.log(count)
        })
    }


    // $('.count').text(count)







})





//tab栏切换布局（重要）
var tab_list = document.querySelector('.tab_list').querySelectorAll('li');
var tab_con = document.querySelector('.tab_con').querySelectorAll('.item')
for (var i = 0; i < tab_list.length; i++) {
    tab_list[i].setAttribute('index', i); //给每个list设置一个index自定义属性
    tab_list[i].onclick = function() {

        for (var i = 0; i < tab_list.length; i++) {
            tab_list[i].className = '';
            tab_con[i].style.display = 'none'
        } //排他性，将其他的list和con都设为空
        this.className = 'current';
        var index = this.getAttribute('index') //获取导航栏设置的index
            //显示内容模块
        tab_con[index].style.display = 'block'
    }
}

//下拉菜单
// var nav = document.querySelector('.nav');
// var nav_lis = nav.children;
// //原生js
// for (var i = 0; i < nav_lis.length; i++) {

//     nav_lis[i].onmouseover = function() {
//         this.children[1].style.display = 'block'
//     }
//     nav_lis[i].onmouseout = function() {
//         this.children[1].style.display = 'none'
//     }
// }
//jq
$(function() {
    // $('.nav>li').mouseenter(function() {
    //     $(this).children('ul').slideDown(200)
    // })
    // $('.nav>li').mouseleave(function() {
    //     $(this).children('ul').slideUp(200)
    // })

    $('.nav>li').hover(function() {

        $(this).children('ul').stop().slideToggle(200)
    })

})

//留言发布
var fabu_btn = document.querySelector('.fabu_top').querySelector('button');
var fabu_content = document.querySelector('textarea');
var fabu_ul = document.querySelector('.bg-primary');

fabu_btn.onclick = function() {

    if (fabu_content.value == '') {
        alert('您没有输入内容');

    } else {
        // 创建元素
        var li = document.createElement('li');
        // 元素赋值
        li.innerHTML = fabu_content.value + "<a href='javascript:;'>删除</a>";
        // 添加元素
        fabu_ul.appendChild(li);
        var as = document.querySelector('.bg-primary').querySelectorAll('a');

        for (var i = 0; i < as.length; i++) {
            as[i].onclick = function() {
                fabu_ul.removeChild(this.parentNode)
            }
        }
    }

}

// 删除留言
var fabu_btn2 = document.querySelector('.fabu_bottom').querySelector('button');

fabu_btn2.onclick = function() {
    if (fabu_ul.children.length == 0) {
        this.disabled = true;
    } else if (fabu_ul.children.length != 0) {
        this.disabled = false;
        fabu_ul.removeChild(fabu_ul.children[0]);
    }

}

// 图片跟随鼠标
// var flow_img = document.querySelector('.flow_img');
// document.addEventListener('mousemove', function(e) {
//     var x = e.pageX;
//     var y = e.pageY;

//     flow_img.style.left = x - 10 + 'px';
//     flow_img.style.top = y - 10 + 'px';

// })