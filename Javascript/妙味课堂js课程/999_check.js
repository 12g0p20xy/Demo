// https://www.w3cmm.com/about

(function() {
    function object(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }

    function inheritPrototype(subType, superType) {
        var prototype = object(superType.prototype);
        prototype.constructor = subType;
        subType.prototype = prototype;
    }

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayName = function() {
        console.log(this.name);
    };
    Person.prototype.sayAge = function() {
        console.log(this.age);
    };

    function subPerson(options) {
        Person.call(this, options.name, options.age);
        this.age = options.age;
        this.weiboAddress = options.weiboAddress;
        this.mailAddress = options.mailAddress;
    }

    inheritPrototype(subPerson, Person);

    subPerson.prototype.sayAge = function() {
        console.log(this.age);
    }
    var me = new subPerson({
        "name": "\u674e\u91d1\u6807",
        "mailAddress": "moc.qq#8567950821".split("").reverse().join("").replace("#", "@")
    });
})();