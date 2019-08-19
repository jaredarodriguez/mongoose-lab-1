var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var destSchema = new Schema({
  destAirport: {
    type: String
  },
  arrives: {
    type: Date
  }
});

var flightSchema = new Schema(
  {
    airline: {
      type: String,
      required: true,
      enum: ["United", "Southwest", "Delta"]
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999
    },
    departs: {
      type: Date,
      default: function() {
        var redate = new Date();
        redate.setFullYear(redate.getFullYear() + 1);
        return redate.toLocaleDateString();
      }
    },
    depAirport: {
      type: String,
      required: true,
      enum: ["AUN", "DAL", "LAX", "SEA"]
    },
    destinations: [destSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Flight", flightSchema);
