function countdown(num, callback) {
    if (num > 0) {
      setTimeout(function() {
        document.getElementById("result").innerHTML = num;
        callback(num - 1, callback);
      }, 1000);
    } else {
      callback();
    }
}
  
function displayMessage() {
    document.getElementById("result").innerHTML = 'HAPPY INDEPENDENCE DAY';
}
  
countdown(10, function(num, callback) {
    if (num > 0) {
      setTimeout(function() {
        document.getElementById("result").innerHTML = num;
        callback(num - 1, callback);
      }, 1000);
    } else {
      displayMessage();
    }
});
  