class Book { 
    constructor(title, page, isbn) {
        this.title = title
        this.page = page
        this.isbn = isbn
    }
    printBn() { 
        console.log(this.isbn)
    }
}

class ItBook extends Book { 
    constructor(title, page, isbn, technology) { 
        super(title, page, isbn)
        this.technology = technology
    }
    printTechnology() { 
        console.log(this.technology)
    }
}

let book = new Book("普通书籍", "500", "未借出")

console.log(book.title)
book.printBn()

let itbook = new ItBook("学习js算法", "285", "已借出", "前端技术")

console.log(itbook.title)
itbook.printBn()
itbook.printTechnology()