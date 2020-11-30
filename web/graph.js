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
        // this code is rather wetwet and could be improved
        if (typeof state.graph !== "undefined" && typeof state.graph.nodes !== "undefined") {
            this.nodes = state.graph.nodes;
            this.nodes = this.nodes.map(n => new Node(n[0], n[1]));
            for (let i = 0; i < state.graph.edges.length; i++) {
                const i1 = state.graph.edges[i][0];
                const i2 = state.graph.edges[i][1];
                this.nodes[i1].addNeighbor(this.nodes[i2]);
            }
        } else {
            this.nodes = [];
            for (let i = 0; i < 14; i++) {
                this.nodes.push(new Node(random(0, state.width), random(0, state.height)));
            }
            state.graph = {
                edges: [],
                nodes: [],
            };
            for (let i = 0; i < 20; i++) {
                const i1 = int(random() * this.nodes.length); 
                const i2 = int(random() * this.nodes.length); 
                this.nodes[i1].addNeighbor(this.nodes[i2]);
                state.graph.edges.push([i1, i2]);
            }
            state.graph.nodes = this.nodes.map(n => [n.x, n.y]);
        }
    }
    draw() {
        this.nodes.forEach(n => n.draw());
    }
}
