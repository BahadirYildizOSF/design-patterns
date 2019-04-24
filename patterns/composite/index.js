class TreeNode{
    constructor(name, value){
        this.name = name;
        this.value = value;
    }

    render(){
        console.log(`${this.name} : ${this.value}`);
    }
}

class Tree extends TreeNode{
    constructor(name, value, children){
        super(name, value);
        this.children = children;
    }

    renderChildren(){
        this.children.forEach((child) => child.render());
    }

    render(){
        console.log(`${this.name} : ${this.value}`);
        this.renderChildren();
    }
}

var tree = new Tree('Militia', '60 Food', [
    new Tree('Man-at-Arms', '80 Food, 20 gold', [ 
        new TreeNode('Long Swordsman', '80 Food, 30 Gold'),
        new TreeNode('Light Cavalry', '100 Food, 20 Gold')
    ]),
    new Tree('Crossbowman', '60 Food, 30 Wood', [
        new TreeNode('Arbalest', '60 Food, 40 Gold'),
        new TreeNode('Skirmisher', '50 Food, 40 Wood')
    ])
]);

tree.render();