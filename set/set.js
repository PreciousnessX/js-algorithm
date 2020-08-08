/**
 * 创建一个set类
 *  类中的一些方法
 * add(value) 向集合中添加一个新的项
 * remove(value) 从集合中移除一个值
 * has(vlaue) 判断值 
 * clear() 移除集合中的所有项
 * size() 返回集合中包含的元素数量
 * values() 返回一个包含集合中所有值得数组
 */

// 集合构造函数
function Set() {
    let items = {}

    // has(value)
    this.has = function (value) {
        return items.hasOwnProperty(value) // 判读对象的自身 属性,而非继承而来
    }

    // add(value)
    this.addValue = function (value) {
        if (!this.has(value)) {
            items[value] = value
            return true
        } else {
            return false
        }
    }

    // remove(value)
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value]
            return true
        } else {
            return false
        }
    }

    // clear()
    this.clear = function () {
        items = {}
    }

    // size()
    this.size = function () {
        if (Object.keys) {
            return Object.keys(items).length
        } else {
            let count = 0;
            for (let key in items) {
                if (items.hasOwnProperty(key)) {
                    count++
                }
            }
            return count
        }
    }

    // values
    this.values = function () {
        var arr = []
        if (Object.keys) {
            var keys = Object.keys(items)
            for (let i = 0; i < keys.length; i++) {
                arr.push(items[keys[i]])
            }
        } else {
            let count = 0;
            for (let key in items) {
                if (items.hasOwnProperty(key)) {
                    arr.push(items[key])
                }
            }
        }
        return arr
    }

    //下面是针对集合的一些操作  主要是集合的交并补子
    // 求两个集合的并集
    this.union = function (otherSet) {
        let unionSet = new Set();
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.addValue(values[i])
        }

        let otherValues = otherSet.values()
        for (let i = 0; i < otherValues.length; i++) {
            unionSet.addValue(otherValues[i])
        }
        return unionSet
    }

    // 求交集
    this.intersection = function (otherSet) {
        var intersectionSet = new Set()
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.addValue(values[i])
            }
        }
        return intersectionSet
    }

    // 求差集
    this.difference = function (otherSet) {
        let differenceSet = new Set()
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.addValue(values[i])
            }
        }
        return differenceSet
    }

    // 判断是不是otherSet的子集
    this.subSet = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false
        } else { 
            let values = this.values()
             for (let i = 0; i < values.length; i++) {
                 if (!otherSet.has(values[i])) {
                    return false
                 }
            }
            return true
        }
     }

}