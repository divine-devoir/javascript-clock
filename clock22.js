

  // $("#hours").text()
  setInterval(function(){
    var dateTime = new Date();
    var minutesTwoDigitsWithLeadingZero = ("0" + dateTime.getMinutes()).substr(-2);
    $("#milliseconds").text(dateTime.getMilliseconds());
    $("#seconds").text(dateTime.getSeconds());
    $("#minutes").text(minutesTwoDigitsWithLeadingZero);
    $("#hours").text(dateTime.getHours());
  },100)



  var class_colors = ["#CCFFFF","#99FFCC","#66FFCC","#33FFCC","#00FFCC"];
  var index = 0;

  setInterval(
  	function () {
  	document.body.style.backgroundColor = (class_colors[index]);

  		if(index === class_colors.length -1){
  			index = 0;
  		}
  		else{
  			index++;
  		}
  	}
  , 300000);


  var class_colors2 = ["#66FFCC","#33FFCC","#00FFCC","#CCFFFF","#99FFCC"];

  setInterval(
  	function () {
  	document.body.style.color = (class_colors2[index]);

  		if(index === class_colors2.length -1){
  			index = 0;
  		}
  		else{
  			index++;
  		}
  	}
  , 3600000);
