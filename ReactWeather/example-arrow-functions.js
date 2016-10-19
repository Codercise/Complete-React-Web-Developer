var names = ['Andrew', 'John', 'Geoff'];

names.forEach(function(name) {
  console.log('anon func', name);
});

names.forEach((name) => {
  console.log('arrow', name);
});

names.forEach((name) => console.log('no func', name));

var returnMe = (name) => name + '!';
console.log(returnMe('Nick'));

// Arrow functions take on their parents' this binding. Anon functions have their own

var person = {
  name: 'Nick',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}
person.greet();

// Challenge Area
function add(a, b) {
  return a + b;
}

console.log(add(1,3));
console.log(add(9,0));

var addStatement = (a,b) => {
  return a + b;
}
console.log(addStatement(1,3));
console.log(addStatement(9,0));

var addExpression = (a,b) => a + b;
console.log(addExpression(1,3));
console.log(addExpression(9,0));