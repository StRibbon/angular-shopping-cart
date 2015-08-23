app.filter('instock', function(){
  return function(input) {
    if (input == true){
	  input = "Yes";
	} else {
	  input = "No";
	}
    return input;
  }
});

app.filter('decimal', function () {
  return function (input) {
    len = input.length - 2;
    nu = input.insert(len, ".");
    return nu;
  };
});
