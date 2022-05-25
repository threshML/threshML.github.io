// 1.创建类class
/* class Star {
    //3.构造函数创建属性
    constructor(uname, age) {
            this.uname = uname //这里的this指向的就是实例化的对象
            this.age = age
        }
        //5.类里面的方法不需要写function，并且多个函数方法之间不用，相隔
    sing(song) {
        console.log(this.uname + song)
    }
}

// 2.利用类创建对象
let ldh = new Star('刘德华', '18')
console.log(ldh)
ldh.sing('冰雨')



//类的继承
class Father {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    money() {
        console.log('100')
    }
    sum() {
        console.log(this.x + this.y)
    }
    say() {
        return '我是爸爸' //可以被super调用
    }
}
//extends为继承的写法，子类 extends 父类
class Son extends Father {
    constructor(x, y) {
        super(x, y) //调用了父类中的构造函数//super必须在子类this之前
        this.x = x;
        this.y = y;
    }
    say() {
        console.log(super.say() + '的儿子') //调用了父类里面的普通函数
    }
    subtract() {
        console.log(this.x - this.y)
    }
}
let son = new Son(6, 6) //创建子类
son.money() //可以之间继承父类里的方法
son.sum()
son.subtract()
son.say() */

//对象 函数构造对象
function Star(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    // this.sing = function(song) {
    //     console.log(song)
    // }

}
//一般公共方法用对象的原型prototype创建
// Star.prototype.sing = function() {
//     console.log('我会唱歌')
// }

// Star.prototype.movie = function() {
//     console.log('我会演电影')
// }

// 也可以用对象的形式来创建
Star.prototype = {
    constructor: Star, //重新指回star构造函数
    sing: function() { console.log('我会唱歌') },
    movie: function() {
        console.log('我会演电影')
    }
}
var ldh = new Star('刘德华', 18, '男');
var zxy = new Star('张学友', 18, '男');
ldh.sing('冰雨'); //如果对象本身有sing属性先调用本身的方法，如果没有就调用原型的方法
console.log(ldh.__proto__.constructor); //原型的constructor会返回构造函数本身
// 很多情况我们需要手动的利用constructor这个属性指回原来的构造
console.log(zxy['sex']);



console.log(Array.prototype)


//tap对象
// 1.该对象具有切换功能
// 2.该对象具有添加功能
// 3.该对象具有删除功能
// 4.该对象具有修改功能
// var that;
class Tab {
    constructor(id) {
            //获取元素
            // that = this
            this.main = document.querySelector(id)
                // this.lis = this.main.querySelectorAll('li')
                // this.sections = this.main.querySelectorAll('section')
            this.add = this.main.querySelector('.tabadd')
            this.ul = this.main.querySelector('.firstnav ul:first-child')
            this.fsection = this.main.querySelector('.tabscon')

            this.init()
        }
        //每次添加要更新li和sections
    updataNode() {
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.glyphicon-remove')
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child')
    }

    init() {
        //更新数据源
        this.updataNode()
            // 初始化操作，让相关元素绑定事件
        this.add.onclick = this.addTab.bind(this.add, this)
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this)
            this.remove[i].onclick = this.removeTab.bind(this.remove[i], this)
            this.spans[i].ondblclick = this.editTab
            this.sections[i].ondblclick = this.editTab

        }
    }

    // 1.切换功能 
    toggleTab(that) {
            that.clearClass()
            this.className = 'liactive'
            that.sections[this.index].className = 'conactive'
        }
        // 遍历并且清除li和sections样式
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }

    // 2.添加功能 
    addTab(that) {
        that.clearClass()
            // 1.创建li元素和section元素
        var li = `<li><span>新选项卡</span><span class="glyphicon glyphicon-remove"></span></li>`
        var section = ` <section class="conactive">测试${Math.random().toFixed(2)}</section>`
            // 2.添加到对应的父元素
        that.ul.insertAdjacentHTML('beforeend', li)
        that.fsection.insertAdjacentHTML('beforeend', section)
        that.init()
    }

    // 3.删除功能 
    removeTab(that, e) {
        e.stopPropagation() //阻止冒泡，防止触发li的切换事件
        var index = this.parentNode.index //等于该图标的父节点li的index
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (document.querySelector('.liactive')) return //如果删除的是选中状态的li，原来的选中状态保持不变
        index--
        that.lis[index] && that.lis[index].click() //让上一个li执行点击操作
            // &&需要&&前符合条件后一步的click才会执行
    }

    // 4.修改功能 
    editTab() {
        var str = this.innerHTML
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = `<input type="text"/>`
        var input = this.children[0]
        input.value = str
        input.select()
        input.onblur = function() {
            this.parentNode.innerHTML = this.value
        }
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                this.blur()
            }
        }
    }





}
var tab = new Tab('#tab');