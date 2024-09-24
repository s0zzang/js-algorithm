class Node {
  constructor(url, next = null, prev = null) {
    this.url = url;
    this.next = next;
    this.prev = prev;
  }
}

class BrowserHistory {
  constructor(home) {
    this.head = new Node(home);
    this.current = new Node(home);
  }

  visit(url) {
    const newNode = new Node(url, null, this.current);
    this.current.next = newNode;
    this.current = newNode;
  }

  back(steps) {
    for (let i = 0; i < steps; i++) {
      if (this.current.prev === null) return this.current.url;
      this.current = this.current.prev;
    }
    return this.current.url;
  }

  forward(steps) {
    for (let i = 0; i < steps; i++) {
      if (this.current.next === null) return this.current.url;
      this.current = this.current.next;
    }
    return this.current.url;
  }

  printHistory() {
    let node = this.current;
    const history = [];
    while (node !== null) {
      history.push(node.url);
      node = node.prev;
    }
    console.log(history.join(" <- "));
  }
}

const browser = new BrowserHistory("home");
browser.visit("1");
browser.visit("2");
browser.visit("3");
browser.visit("4");
browser.visit("5");
browser.visit("6");
browser.visit("7");
browser.back(1);
browser.visit("a");
browser.visit("b");
browser.back(3);
browser.forward(1);
browser.forward(2);

browser.printHistory();
