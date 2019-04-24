let instance;

class Cart{
    constructor(items){
        this.items = items;
        return instance || this;
    }

    addItem(item){
        this.items.push(item);
    }

    removeItem(item){
        this.items.splice(this.items.indexOf(item), 1);
    }
    
    showItems(){
        console.log(this.items);
        return this.items;
    }
}

instance = new Cart(['Apple', 'Banana']);
instance.showItems();
instance = new Cart(['Orange']);
instance.showItems();
instance.addItem('Orange');
instance.showItems();
