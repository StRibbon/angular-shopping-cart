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
  return function (input){
    return input/100;
  };
});
