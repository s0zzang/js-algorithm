class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  insert_back(value) {
    const new_node = new Node(value);
    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = this.tail.next;
    }
    this.size++;
  }

  // exception1: if self.head is None
  // exception2: if idx < 0 or idx > self.size
  insert_at(idx, value) {
    const new_node = new Node(value);
    if (idx === 0) {
      new_node.next = this.head;
      this.head = new_node;
    } else {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      new_node.next = current.next;
      current.next = new_node;
    }
    this.size++;
  }

  // exception if idx < 0 || idx >= this.size
  get(idx) {
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.value;
  }

  // exception: if idx < 0 or idx >= self.size
  set(idx, value) {
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.value = value;
  }

  // exception1: if idx < 0 or idx >= self.size
  // exception2: size === 1 => size === 0 / tail problem
  remove_at(idx) {
    if (idx === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }
    this.size--;
  }

  remove_back() {
    const last_index = this.size - 1;
    let current = this.head;
    for (let i = 0; i < last_index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
    this.tail = current.next;
    this.size--;
  }

  print() {
    let current = this.head;
    while (current !== null) {
      process.stdout.write(String(current.value));
      current = current.next;
      if (current !== null) {
        process.stdout.write("->");
      }
    }
    console.log();
  }
}
