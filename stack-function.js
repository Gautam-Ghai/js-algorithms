var Stack = function () {
  this.count = 0;
  this.data = {}

  this.push = function (x){
    this.data[this.count] = x
    this.count ++;
  }

  this.pop = function () {
    if(this.count === 0) return undefined

    this.count --;
    var result = this.data[this.count]
    delete this.data[this.count]

    return result
  }

  this.size = function() {
    return this.count
  }

  this.peek = function() {
    return this.data[this.size - 1]
  }
}

var myStack = new Stack();

myStack.push('test-1')
myStack.push('test-2')
myStack.push('test-3')
console.log(myStack.pop())
console.log(myStack.size())
