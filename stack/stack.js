/**
 * 定义一个栈,实现如下功能
 * 1,push(e) 入栈
 * 2,pop()出栈
 * 3,peek()查看栈顶元素
 * 4,isEmpty()栈是否为空
 * 5,clear()清空栈
 * 6,size()返回栈的元素个数
 * 7,print() 打印栈
 */
let Stack = (function () { // 工厂函数,形成一个闭包
    const container = new WeakMap()
    class Stack {
        constructor() {
            container.set(this, [])
        }

        /**
         * 入栈push(e)
         */
        push(element) {
            let arr = container.get(this)
            arr.push(element)
        }

        /**
         * 出栈 pop()
         */
        pop() {
            let arr = container.get(this)
            return arr.pop()
        }

        /**
         * peek()查看栈顶元素
         */
        peek() {
            let arr = container.get(this)
            return arr[arr.length - 1]
        }

        /**
         * isEmpty 栈是否为空
         */
        isEmpty() {
            let arr = container.get(this)
            return arr.length == 0
        }

        /**
         * clear()清空栈
         */
        clear() {
            let arr = container.get(this)
            arr = []
        }

        /**
         * size
         */
        size() {
            let arr = container.get(this)
            return arr.length
        }

        /**
         * print()
         */
        print() {
            let arr = container.get(this)
            // return arr
            console.log(arr.toString())
        }

        get length() { // 定义一个get函数 直接拿长度
            let arr = container.get(this)
            return arr.length
        }
    }
    return Stack
})()

/**
 * 下面我们来实现一下栈的应用
 * 
 *  */

/**
 * 1,实现一个10进制转2进制的函数
 */

function decimal2Binary(decNumber) {
    var stack = new Stack();
    while (decNumber > 0) {
        stack.push(Math.floor(decNumber % 2))
        decNumber = Math.floor(decNumber / 2)
    }
    var binary = ""
    while (!stack.isEmpty()) {
        binary += stack.pop().toString()
    }
    return binary
}

/**
 * 处理运算公式     "9+(5-2*2)*3+8/2" 和 "(1+2)*(3+5)"
 */

/**
 * 后缀（ 逆波兰） 表达式
 * 逆波兰表示法（ RPN）， 是一种由波兰数学家Jan Łukasiewicz 1920 年引入的数学表达式， 
 * 在RPN中， 所有操作符置于操作数的后面， 因此也被称为后缀表达式（ Postfix Notation）。 
 * 后缀表达式不需要括号来标识操作符的优先级。
 * 普通运算式转为逆波兰表达式 如下:
 * A+B  => AB+
 * A*B => AB*
 * (A+B)*C => AB+C*
 * A+B*C+D => ABC*+D+
 * (A+B)*(C+D) => AB+CD+*
 */

function calculate(formaul) {
    //step1,先将公式转化为波特兰表达式 注意 + - * / ( ) 的优先级
    var stack = new Stack()
    var dalfma = formaul.replace(/\+|-|\*|\/|\(|\)/g, function (sign) {
        return "@" + sign + "@"
    })
    var formaulArr = dalfma.split("@").filter(e => e != "")
    var bt = [] // 存储波特兰表达式的数组
    out: for (var i = 0; i < formaulArr.length; i++) {
        var s = formaulArr[i]
        if (!isNaN(s)) {
            bt.push(s)
            continue
        }
        var top = stack.peek()
        if (!top) {
            stack.push(s)
            continue
        }
        if (s == "(") {
            stack.push(s)
        } else if (s == '+' || s == "-") {
            if (top == '+' || top == "-") {
                bt.push(stack.pop())
            } else if (top == '*' || top == "/") {
                do {
                    bt.push(stack.pop())
                    top = stack.peek()
                } while (top == '*' || top == "/")
                if (top == '+' || top == "-") {
                    bt.push(stack.pop())
                }
            }
            stack.push(s)
        } else if (s == "*" || s == "/") {
            if (top == '*' || top == "/") {
                bt.push(stack.pop())
            }
            stack.push(s)
        } else if (s == ")") {
            var popValue = stack.pop()
            if (!popValue) {
                console.log("公式错误");
                break out;
            }
            do {
                bt.push(popValue)
                popValue = stack.pop()
                if (!popValue) {
                    console.log("公式错误");
                    break out;
                }
            } while (popValue != "(")
        } else {
            console.log("公式错误");
            break out;
        }
    }
    while (!stack.isEmpty()) {
        var popValue = stack.pop()
        if (popValue == "(" || popValue == ")") {
            console.log("公式错误");
            break;
        } else {
            bt.push(popValue)
        }
    }
    // step2,进行计算
    var value = 0
    console.log(bt)
    var arr = null
    bt.forEach(function (s) {

        switch (s) {
            case "+": {
                value = stack.pop() + stack.pop()
                stack.push(value)
                break;
            }
            case "-": {
                var dv = stack.pop()
                value = stack.pop() - dv
                stack.push(value)
                break;
            }
            case "*": {
                value = stack.pop() * stack.pop()
                stack.push(value)
                break;
            }
            case "/": {
                var dv = stack.pop()
                value = stack.pop() / dv
                stack.push(value)
                break;
            }
            default: { 
                stack.push(Number(s))
            }
        }

    })
    return value
}
console.log(calculate("9+(5-1)*3+8/2"))