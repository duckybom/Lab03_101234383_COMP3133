const express = require("express");
const restaurantModel = require("../model/restaurant_model");
const app = express();


app.get('/restaurants', async (req, res) => {
  const restaurants = await restaurantModel.find({});
  try {
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/restaurants/cuisine/:cuisine', async (req,res)=>{
    const cuisine = req.params.cuisine
    const restaurants = await restaurantModel.find({cuisine: cuisine});

    try {
        if(restaurants.length != 0){
          res.send(restaurants);
        }else{
          res.send(JSON.stringify({status:false, message: "No data found"}))
        }
    } catch (err) {
    res.status(500).send(err);
    }
});

app.get('/restaurants/:cuisine/:city', async(req,res)=>{
    const cuisine = req.params.cuisine
    const city = req.params.city

    const restaurants = await restaurantModel.find({cuisine: cuisine}).where("city").ne(city).select("cuisine name city").sort({'name': 'asc'});    
    try {
        res.send(restaurants);
      } catch (err) {
        res.status(500).send(err);
      }
})

module.exports = app