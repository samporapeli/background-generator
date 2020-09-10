class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.neighbors = [];
    }
    degree() {
        return this.neighbors.length;
    }
    addNeighbor(node) {
        if (this.neighbors.includes(node)) {
            return false;
        } else {
            this.neighbors.push(node);
            node.addNeighbor(this);
            return true;
        }
    }
    draw() {
        strokeWeight(1);
        circle(this.x, this.y, exp(this.degree()));
        for (let i = 0; i < this.neighbors.length; i++) {
            const neighbor = this.neighbors[i];
            strokeWeight(this.degree);
            line(this.x, this.y, neighbor.x, neighbor.y);
        }
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        for (let i = 0; i < 14; i++) {
            this.nodes.push(new Node(random(0, state.width), random(0, state.height)));
        }
        for (let i = 0; i < 20; i++) {
            const i1 = int(random() * this.nodes.length); 
            const i2 = int(random() * this.nodes.length); 
            this.nodes[i1].addNeighbor(this.nodes[i2]);
        }
    }
    draw() {
        this.nodes.forEach(n => n.draw());
    }
}
