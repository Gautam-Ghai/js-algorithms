// Set is an array with no duplicates

class Set {
    constructor(){
      this.collection = [];
    }

  //checks if the set contains a particular element
  has(element) { 
    return this.collection.indexOf(element) !== -1
  }

  //return the values of a set
  values() {
    return this.collection;
  }

  //adds a new element in the set
  add(element) {
    if(!this.has(element)) {
      this.collection.push(element)
      return true;
    }
    return false;
  }

  //removes an element from the set
  remove(element) {
    if(this.has(element)) {
      const index = this.collection.indexOf(element)
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  //returns the size of the set
  size() {
    return this.collection.length
  }

  //returns a new set with all the unique elements
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

  //returns a new set with all the common elements
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

  //returns a new set with all the elements not present in the second set
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

  //checks if the second set is a subset of the first
  subset(otherSet) {
    var firstSet = values();
    return firstSet.every(function(e) {
      return otherSet.has(e)
    })
  }
  
}
