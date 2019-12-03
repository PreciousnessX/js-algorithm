/**
 * 下面有js来实现一个链表结构的数据类型 LinkedList
 * head 头部
 * Node 需要借助一个Node类  来实现这个链表  node中包含 element 和 一个指向下一个节点的指针 next
 * 
 * 包含以下方法:
 * 1, append 向链表尾部插入一个元素
 * 2, insert 向任意位置插入一个元素
 * 3, removeAt 移除任意位置上的一个元素
 * 4, indexOf 取得元素在链表中的位置
 * 5, remove 移除一个元素
 * 6. isEmpty 链表是不是为空
 * 7, size 链表的长度
 * 8, getHead 获取链表的头部  (可向下迭代的一个Node实例)
 * 9, toString 重写toString方法
 * 10, print 打印链表  (和toString差不多)
 * 
 */


 /**
  * 实现应Node类
  * element 节点元素
  * next 指向下一个节点的指针
  */

function Node(e) { 
    this.element = e
    this.next = null
}

function LinkedList() {
    // 私有变量 记录链表头部 和链表的长度
    let head = null
    let length = 0

    // 下面依次实现链表的一些方法

    /**
     * append(e)
     * 向链表尾部插入一个元素
     * e 为要插入的数据
     */

    this.append = function (e) { 
        let node = new Node(e)
        if (head == null) {
            head = node
        } else { 
            let current = head
            while (current.next) { 
                current = current.next
            }
            current.next = node
        }
        length++
    }

    /**
     * insert(index,e)
     * 向链表中的任意位置插入一个元素
     * index 为要插入的位置
     * e 为要插入的元素 
     */

    this.insert = function (index, e) {
        // 检查越界值
        if (index >= 0 && index <= length) {
            var current = head,prev,node = new Node(e);
            var pos = 0
            if (index === 0) {
                node.next = current
                head = node
            } else { 
                while (pos++ < index) { 
                    prev = current
                    current = current.next
                }
                prev.next = node
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
     * index 要移除的元素的位置 以 0 开始 
     */

    this.removeAt = function (index) { 
        // 检查越界值
        if (index >= 0 && index <= length) {
            var current = head, pos = 0,prev;
            if (index === 0) {
                head = current.next
            } else { 
                while (pos++ < index) { 
                    prev = current
                    current = current.next
                }
                prev.next = current.next
            }
            length--
            return current.element
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
        while (pos++<length) { 
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
     * toString 重写toString方法
     */

    this.toString = function () { 
        var str = ""
        var current = head
        while (current) { 
            str += current.element + current.next ? "," : "" 
            current = current.next
        }
    }

    /**
     * print 打印
     */

    this.print = function () { 
        console.log(this.toString())
    }
}

