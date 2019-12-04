/**
 * 实现一个双向链表 Double_linked
 * 
 * head 头部
 * Node 需要借助一个Node类  来实现这个链表  node中包含 element 和 一个指向下一个节点的指针 next,一个指向上一个node的prev
 * 
 * 包含以下方法:
 * 1, append 向链表尾部插入一个元素
 * 2, insert 向任意位置插入一个元素
 * 3, removeAt 移除任意位置上的一个元素
 * 4, indexOf 取得元素在链表中的位置
 * 5, remove 移除一个元素
 * 6. isEmpty 链表是不是为空
 * 7, size 链表的长度
 * 8, getHead 获取链表的头部  
 * 9, getTail 获取尾部 
 * 10, toString 重写toString方法
 * 11, print 打印链表  (和toString差不多)
 */


/**
 * 实现应Node类
 * element 节点元素
 * next 指向下一个节点的指针
 * prev 指向上一个节点的指针
 */

function Node(e) {
    this.element = e
    this.next = null
    this.prev = null
}

function Double_linked() {
    let length = 0
    let head = null
    let tail = null

    /**
     * append 向链表尾部插入一个元素
     */
    this.append = function (e) {
        var node = new Node(e)
        if (tail == null) { // 没尾就没头
            head = node
            tail = node
        } else {
            var current = tail
            current.next = node
            node.prev = tail
            tail = node
        }
        length++

    }

    /**
     * insert(index,e) 向任意位置插入一个元素
     * index 为要插入的位置
     * e 为要插入的元素
     */

    this.insert = function (index, e) {
        // 越界检查
        if (index >= 0 && index <= length) {
            var node = new Node(e)
            var current;
            if (index === 0) {
                current = head
                node.next = current
                current.prev = node
                head = node
            } else if (index === length) {
                current = tail
                current.next = node
                node.prev = current
                tail = node
            } else {
                if (length - index > index) { // 从头部开始 找到目标位置
                    var pos = 0
                    current = head
                    while (pos++ < index) {
                        current = current.next
                    }
                } else { // 从尾部开始  找到目标位置
                    var pos = length - 1
                    current = tail
                    while (pos-- > index) {
                        current = current.prev
                    }
                }
                var prev = current.prev
                prev.next = node
                current.prev = node
                node.prev = prev
                node.next = current
            }
            length++
            return true

        } else {
            return false
        }
    }

    /**
     * removeAt(index) 移除任意位置上的一个元素
     */

    this.removeAt = function (index) {
        // 越界检查
        if (index >= 0 && index < length) {
            var current;
            if (index === 0) {
                head = head.next
                head.prev = null
            } else if (index === length - 1) {
                tail = tail.prev
                tail.next = null
            } else {
                if (length - index > index) {
                    var pos = 0;
                    current = head
                    while (pos++ < index) {
                        current = current.next
                    }
                } else {
                    var pos = length - 1;
                    current = tail
                    while (pos-- > index) {
                        current = current.prev
                    }
                }
                var prev = current.prev
                var next = current.next
                prev.next = next
                next.prev = prev
            }
            length--
            return true
        } else {
            return false
        }
    }

    /**
     * indexOf(e) 取得元素在链表中的位置
     * e 元素
     */

    this.indexOf = function (e) {
        var current = head
        var pos = 0
        while (pos++ < length) {
            if (e === current.element) {
                return pos - 1
            }
            current = current.next
        }
        return -1
    }

    /**
     * remove(e) 移除一个元素
     * e 元素
     */

    this.remove = function (e) {
        var index = this.indexOf(e)
        if (index >= 0) {
            return this.removeAt(index)
        } else {
            return false
        }
    }

    /**
     * isEmpty 链表是不是为空
     */

    this.isEmpty = function () {
        return length === 0
    }

    /**
     * size 链表的长度
     */

    this.size = function () {
        return length
    }


    /**
     * getHead 获取链表的头部(可向下迭代的一个Node实例)
     * 
     */
    this.getHead = function () {
        return head
    }

    /**
     * getTail 获取尾部
     */

    this.getHead = function () {
        return tail
    }

    /**
     * toString 重写toString方法
     */

    this.toString = function () {
        var str = ""
        var current = head
        while (current) {
            str += current.element + (current.next ? "," : "")
            current = current.next
        }
        return str
    }

    /**
     * print 打印
     */

    this.print = function () {
        console.log(this.toString())
    }


}

var doul = new Double_linked()
doul.append(1)
doul.append(2)
doul.append(3)
doul.append(4)