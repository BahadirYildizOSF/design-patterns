var Developer = function () {
    this.position =  new DefaultPosition();

    this.work = function(){
        return this.position.work();
    };

    this.setPosition = function(position){
        this.position = position;
    };

    this.logHours = function(hour){
        return console.log([this.position.work(),'for',hour,'hours', '.'].join(' '));
    };
};

var DefaultPosition = function(){
    this.work = function(){
        return 'Playing Mortal Kombat';
    };
};

var BackEndDeveloper = function () {
    this.work = function(){
        return 'Doing Backend Stuff';
    };
};

var FrontEndDeveloper = function () {
    this.work = function(){
        return 'Doing Frontend Stuff';
    };
};

var SalesforceDeveloper = function () {
    this.work = function(){
        return 'Doing Salesforce Stuff';
    };
};

var dev = new Developer();
console.log(dev.work());
dev.setPosition(new SalesforceDeveloper());
console.log(dev.work());
dev.logHours(4);
dev.setPosition(new FrontEndDeveloper());
dev.logHours(6);
dev.setPosition(new BackEndDeveloper());
dev.logHours(6);