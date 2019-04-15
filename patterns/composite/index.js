class Node{
    constructor(name, children = null, weight = null){
        this.name = name;
        this.weight = weight || {
            local: 0,
            global: 0
        };

        if(this.constructor != 'Alternative') this.children = children;
    }

    addChildren(node){
        this.children.push(node);
    }

}


class DecisionMaker extends Node{
    constructor(name, children = null, weight = null){
        super(name, children, weight);
    }
}

class Criterion extends Node{
    constructor(name, children = null, weight = null){
        super(name, children, weight);
    }
}

class Alternative extends Node{
    constructor(name, weight = null){
        super(name,null, weight);
    }

    addChildren(node){
        console.log('Adding children to an Alternative is prohibited');
        return;
    }
}
