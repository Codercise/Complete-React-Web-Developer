/*// Callback Example
function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Tokyo', function(err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

// Promise Example
function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(79);
      reject("City not found");
    }, 1000);
  });
}

getTempPromise("tokyo").then(function(temp) {
  console.log("success:", temp);
}, function(err) {
  console.log("error");
});*/

// Challenge Activity
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject("Error: not a number");
    }
  });
}

addPromise(3.14, 12).then(function(answer) {
  console.log(answer);
}, function(err) {
  console.log(err);
});