class Set {
    constructor(){
      this.collection = [];
    }

  has(element) { 
    return this.collection.indexOf(element) !== -1
  }

  values() {
    return this.collection;
  }

  add(element) {
    if(!this.has(element)) {
      this.collection.push(element)
      return true;
    }
    return false;
  }

  remove(element) {
    if(this.has(element)) {
      const index = this.collection.indexOf(element)
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length
  }

  union(otherSet) {
    var unionSet = new Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function(e){
      unionSet.add(e);
    });

    secondSet.forEach(function(e){
      unionSet.add(e);
    });

    return unionSet;
  }

  intersection(otherSet) {
    var intersectionSet = new Set();
    var firstSet = this.values();

    firstSet.forEach(function(e){
      if(otherSet.has(e)){
        intersectionSet.add(e)
      }
    });

    return intersectionSet;
  }

  difference(otherSet) {
    var differenceSet = new Set();
    var firstSet = this.values();

    firstSet.forEach(function(e){
      if(!otherSet.has(e)){
        differenceSet.add(e)
      }
    });

    return differenceSet;
  }

  subset(otherSet) {
    var firstSet = values();
    return firstSet.every(function(e) {
      return otherSet.has(e)
    })
  }
}
