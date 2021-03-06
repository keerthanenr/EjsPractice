const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.get("/", function(req,res){

  var today  = new Date();
  var currentDay = today.getDay();
  var day = "";
  //var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  //if(currentDay == 6 || currentDay == 0){
  //day = days[currentDay];
  //}else{
  //  day = "Weekday";
  //}

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);
  res.render('list', {kindOfDay : day, newListItem: items});
})

app.post("/", function(req,res){
  var item = req.body.newItem;
  items.push(item)
  console.log(item);
  res.redirect("/");
})
app.listen(3000, function(){
  console.log("Server started on port 3000")
})
