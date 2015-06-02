/*
Fill in your own code where you see "your code here".
You can insert new lines at those locations, but you
will not need to edit the lines above and below them.
*/

//-----------------------------------------
// Queues

function Queue() {
  // your code here
  var queue = [];
}

Queue.prototype.add = function(item) {
  // your code here
  if (typeof(queue) === 'undefined') {
      queue = [];   
  }                            
  queue.push(item);
  return this; // for chaining, do not edit
};

Queue.prototype.remove = function() {
  return queue.shift();
};

//-----------------------------------------
// Stacks

function Stack() {
  // your code here
  var stack = [];
}

Stack.prototype.add = function(item) {
  if (typeof(stack) === 'undefined') {
      stack = [];   
  }                            

  stack.push(item);
  return this; // for chaining, do not edit
};

Stack.prototype.remove = function() {
  return stack.pop();
};

//-----------------------------------------
// Linked lists

function LinkedList () {
  this.head = this.tail = null;
}

function ListNode (item, prev, next) {
  this.item = item;
  this.next = next || null;
  this.prev = prev || null;
}

LinkedList.prototype.addToTail = function(item) {

  var node = new ListNode(item);

  if (!this.tail) {
    this.head = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
  }

  this.tail = node;

  return this; // for chaining, do not edit
};

LinkedList.prototype.removeFromTail = function() {
  
  if (!this.tail) {
    return
  }

  if (this.tail) {
    if (this.tail.prev) {
      this.tail.prev.next = null
    }
  }
  
  var temp = this.tail;
  this.tail = this.head;
  this.head = null

  return temp.item;
};

LinkedList.prototype.forEach = function(iterator) {
  // your code here
};

//-----------------------------------------
// Hash tables

function _hash (key) {
  var hashedKey = 0;
  for (var i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
}

function HashNode (key, value) {
  this.key = key;
  this.value = value;
}

function Hash () {
  this.buckets = Array(20);
  // your code here
}

Hash.prototype.set = function(key, value) {
  // your code here
  return this; // for chaining, do not edit
};

Hash.prototype.get = function(key) {
  // your code here
};
