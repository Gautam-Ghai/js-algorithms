class Stack {
  constructor(){
    this.count = 0;
    this.data = {}
  }

  push(x) {
    this.data[this.count] = x
    this.count ++;
  }

  pop() {
    if(this.count === 0) return undefined

    this.count --;
    var result = this.data[this.count]
    delete this.data[this.count]

    return result
  }

  size() {
    return this.count
  }

  peek() {
    return this.data[this.size - 1]
  }
}

var myStack = new Stack();

myStack.push('test-1')
myStack.push('test-2')
myStack.push('test-3')
console.log(myStack.pop())
console.log(myStack.size())
