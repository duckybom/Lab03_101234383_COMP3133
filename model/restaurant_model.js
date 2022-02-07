const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema(
    {
        address:{     
            building: {
                type: String,
                 required: [true, "Please enter the address building!!"],
                 trim: true,
            },
            street: {
                type: String,
                 required: [true, "Please enter the street name!!"],
                 trim: true,
                 lowercase: true
            },
            zipcode: {
                type: String,
                 required: [true, "Please enter the zipcode!!"],
                 trim: true
            }
        },
        city: {
            type: String,
             required: [true, "Please enter the city!!"],
             lowercase: true,
             trim: true,
        },
        cuisine: {
            type: String,
             required: [true, "Please enter the cuisine!!"],
             trim: true,
        },
        name: {
            type: String,
             required: [true, "Please enter the name!!"],
             lowercase: true,
             trim: true,
        },
        restaurant_id: {
            type: String,
            required: [true, "Please enter the restaurant id!!"],
            unique: [true, "restaurant id must be unique!!"],
            lowercase: true,
            trim: true,
            validate(value) {
                if (isNaN(value)) {
                    throw new Error("Restaurant id should be a number!!")
                }
            }
        }
    }, 
    
    {collection: 'Restaurants'} 
)

const Restaurants = mongoose.model("Restaurants", RestaurantSchema)
module.exports = Restaurants