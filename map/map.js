/**
 * 造一个字典
 * Dictionnary
 * set(key, value)： 向字典中添加新元素。
 * delete(key)： 通过使用键值来从字典中移除键值对应的数据值。
 * has(key)： 如果某个键值存在于这个字典中， 则返回true， 反之则返回false。
 * get(key)： 通过键值查找特定的数值并返回。
 * clear()： 将这个字典中的所有元素全部删除。
 * size()： 返回字典所包含元素的数量。 与数组的length属性类似。
 * keys()： 将字典所包含的所有键名以数组形式返回。
 * values()： 将字典所包含的所有数值以数组形式返回。
 * 
 */

function Dictionnary() { 
    let items = {}

    // has(key)
    this.has = function (key) { 
        return key in items
    }

    // set(key,value)
    this.set = function (key, value) {
            items[key] = value
            return true
    }
    
    // delete
    this.delete = function (key) { 
        if (this.has(key)) {
            delete items[key]
            return true
        } else { 
            return false
        }
    }

    // get
    this.get = function (key) { 
        return items[key]?items[key]:undefined
    }

    // clear
    this.clear = function () { 
        items = {}
    }

    // size
    this.size = function () { 
        if (Object.keys) {
            return Object.keys(items).length
        } else { 
            var count = 0
            for (var key in items) { 
                if (items.hasOwnPrototy(key)) { 
                    count++
                }
            }
            return count
        }
    }

    //keys
    this.keys = function () { 
        if (Object.keys) {
            return Object.keys(items)
        } else { 
            var arr = []
            for (var key in items) { 
                arr.push(key)
            }
            return arr
        }
    }

    // values
    this.values = function () { 
        var arr = []
        for (var key in items) {
            arr.push(items[key])
        }
        return arr
    }

    // getItems
    this.getItems = function () { 
        return items
    }
}