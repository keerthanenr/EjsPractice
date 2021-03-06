const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');


app.get("/", function(req,res){

  var today  = new Date();
  var currentDay = today.getDay();
  var day = "";
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  //if(currentDay == 6 || currentDay == 0){
  day = days[currentDay];
  //}else{
  //  day = "Weekday";
  //}
  res.render('list', {kindOfDay : day});
})


app.listen(3000, function(){
  console.log("Server started on port 3000")
})
