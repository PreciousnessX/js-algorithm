/**
 * 实现队列
 * 1,enqueue 入队
 * 2,dequeue 出队
 * 3,front 查看队首元素
 * 4,isEmpty 队列是否为空
 * 5,size 队列长度
 * 6,clear 清空队列
 * 7,打印队列
 */

var Queue = (function () { 
    let container = new WeakMap()
    class Queue { 
        constructor() { 
            container.set(this,[])
        }
        // 入队
        enqueue(e) { 
            var target = container.get(this)
            target.push(e)
        }
        // 出队
        dequeue() { 
            var target = container.get(this)
            return target.shift()
        }
        // front 查看队首元素
        front() { 
            var target = container.get(this)
            return target[0]
        }
        // 判断队列是不是为空
        isEmpty() { 
            var target = container.get(this)
            return target.length == 0
        }
        // 队的长度
        size() { 
            var target = container.get(this)
            return target.length
        }
        // 清空队列
        clear() { 
            container.set(this,[])
        }
        // 打印队列
        print() { 
            var target = container.get(this)
            console.log(target.toString())
        }
    }
    return Queue
})()


// 队列的应用
// 1,击鼓传花
/**
 * 
 * @param {Array} nameList 参与游戏者的姓名
 * @param {Number} num 传递多少次后 停止
 */
function hotPotato(nameList, num) { 
    var queue = new Queue()
    for (var i = 0; i < nameList.length; i++) { 
        queue.enqueue(nameList[i])
    }
    // 队首 即为花的位置
    while (queue.size()>1) { 
        for (var i = 0; i < num; i++) { 
            queue.enqueue(queue.dequeue())
        }
        console.log(queue.dequeue()+"被淘汰")
    }
    console.log(queue.dequeue()+"获胜")

}

/**
 * 既然我们在书中使用的是JavaScript， 何不探索一下这门语言本身？
 * 当我们在浏览器中打开新标签时， 就会创建一个任务队列。 这是因为每个标签都是单线程处 理所有的任务， 它被称为事件循环。 
 * 浏览器要负责多个任务， 如渲染HTML， 执行JavaScript代码， 处理用户交互（ 用户输入、 鼠标点击等）， 执行和处理异步请求。 
 * 如果想更多地了解事件循环， 可以访问https: //goo.gl/ayF840。 
 * 像JavaScript这样流行而强大的语言， 内部控制所使用的也是如此基础的数据结构， 真令人高兴。
 */