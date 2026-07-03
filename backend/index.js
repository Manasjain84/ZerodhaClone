const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json()); 


async function startServer() {
  try {
    await mongoose.connect(uri);
    console.log("✅ DB Connected successfully!");
    
    app.listen(PORT, () => {
      console.log(`🚀 App started on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    // Do not start server if DB fails
    process.exit(1);
  }
}


app.get("/addHoldings", async (req, res) => {
  let tempHoldings = [
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
   
    {
      name: "WIPRO",
      qty: 4,
      avg: 489.3,
      price: 577.75,
      net: "+18.08%",
      day: "+0.32%",
    },
  ];

  try {
   
    const holdingsToSave = tempHoldings.map(item => ({
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net, 
      day: item.day,
    }));

    await HoldingsModel.insertMany(holdingsToSave);
    res.send("✅ Holdings added successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding holdings: " + error.message);
  }
});

//------> Add Positions Route
app.get("/addPositions", async (req, res) => {
  let tempPositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  try {
    const positionsToSave = tempPositions.map(item => ({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,
    }));

    await PositionsModel.insertMany(positionsToSave);
    res.send("✅ Positions added successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding positions: " + error.message);
  }
});

//----------> Get Routes
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//----------> Post Route
app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.send("Order saved!");
  } catch (error) {
    res.status(500).send("Error saving order");
  }
});

// Start the server
startServer();   