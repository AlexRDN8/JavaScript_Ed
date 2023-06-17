this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, поскольку в этом случае this ссылается на глобальный объект

// создаём новую функцию с this, привязанным к module


Function.prototype.bind2 = function(object){
    return () => {
        const s = Symbol();
        object[s] = this;
        const result = object[s]();
        delete object[s];
        return result;
    }
}
var boundGetX = getX.bind2(module);
console.log(boundGetX()); // 81