const express = require('express');
const router = express.Router();
const axios = require('axios');
const cors = require('cors')
const app=express();
app.use(cors())
const Order = require('../Model/OrderSchema');
const Buyer = require('../Model/BuyerSchema');


router.get('/total_customer/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const orders = await Order
        .find({ sellerId: id })
        .populate('product.productId')
        .exec();
  
      if (!orders || orders.length === 0) {
        console.log("No results found.");
        return res.status(404).json({ message: "No results found." });
      }
      let count=0;
      const uniqueBuyerIds = {};
      for (const order of orders) {
        if(!uniqueBuyerIds[order.buyerId]){
            uniqueBuyerIds[order.buyerId]=1;
            count++;
        }
      }
      console.log(count)
      res.json(orders);
    } catch (error) {
      console.error(`Error while fetching products: ${error}`);
      res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/daily_income/:id', async (req, res) => {
    try {
        const id = req.params.id;
      const orders = await Order
        .find({ sellerId: id })
        .populate('product.productId')
        .exec();
  
      if (!orders || orders.length === 0) {
        console.log("No results found.");
        return res.status(404).json({ message: "No results found." });
      }
      const totalPriceByDate = new Map();
  
      for (const order of orders) {
        const orderDate = new Date(order.date).toLocaleDateString();
        if (!totalPriceByDate.has(orderDate)) {
          totalPriceByDate.set(orderDate, 0);
        }
        totalPriceByDate.set(orderDate, totalPriceByDate.get(orderDate) + order.totalPrice);
      }
      const totalPriceByDateObject = {};
      for (const [date, totalPrice] of totalPriceByDate) {
        totalPriceByDateObject[date] = totalPrice;
      }
      const today = new Date().toLocaleDateString();
      let Today_Sell=0;
      if(!totalPriceByDateObject[today]){
        Today_Sell=0;
      }
      else {
        Today_Sell=totalPriceByDateObject[today];
      }
      console.log(Today_Sell)
      console.log("Total Price by Date:", totalPriceByDateObject);
  
      res.json(totalPriceByDateObject);
    } catch (error) {
      console.error(`Error while fetching products: ${error}`);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
 
  router.get('/monthly_income/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const orders = await Order
        .find({ sellerId: id })
        .populate('product.productId')
        .exec();
  
      if (!orders || orders.length === 0) {
        console.log("No results found.");
        return res.status(404).json({ message: "No results found." });
      }
  
      const totalPriceByMonth = new Map();
  
      for (const order of orders) {
        const orderDate = new Date(order.date);
        const yearMonth = orderDate.getFullYear() + '-' + (orderDate.getMonth() + 1);
  
        if (!totalPriceByMonth.has(yearMonth)) {
          totalPriceByMonth.set(yearMonth, 0);
        }
  
        totalPriceByMonth.set(yearMonth, totalPriceByMonth.get(yearMonth) + order.totalPrice);
      }
  
      const totalPriceByMonthObject = {};
      for (const [month, totalPrice] of totalPriceByMonth) {
        totalPriceByMonthObject[month] = totalPrice;
      }
  
      const currentYearMonth = new Date().toISOString().slice(0, 7);
      let monthlySell = 0;
  
      if (totalPriceByMonthObject[currentYearMonth]) {
        monthlySell = totalPriceByMonthObject[currentYearMonth];
      }
  
      console.log("Monthly Sell:", monthlySell);
      console.log("Total Price by Month:", totalPriceByMonthObject);
  
      res.json({ monthlySell, totalPriceByMonthObject });
    } catch (error) {
      console.error(`Error while fetching products: ${error}`);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

router.get('/yearly_income/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const orders = await Order
        .find({ sellerId: id })
        .populate('product.productId')
        .exec();
  
      if (!orders || orders.length === 0) {
        console.log("No results found.");
        return res.status(404).json({ message: "No results found." });
      }
  
      const totalPriceByYear = new Map();
  
      for (const order of orders) {
        const orderDate = new Date(order.date);
        const year = orderDate.getFullYear();
  
        if (!totalPriceByYear.has(year)) {
          totalPriceByYear.set(year, 0);
        }
  
        totalPriceByYear.set(year, totalPriceByYear.get(year) + order.totalPrice);
      }
  
      const totalPriceByYearObject = {};
      for (const [year, totalPrice] of totalPriceByYear) {
        totalPriceByYearObject[year] = totalPrice;
      }
  
      const currentYear = new Date().getFullYear();
      let yearlySell = 0;
  
      if (totalPriceByYearObject[currentYear]) {
        yearlySell = totalPriceByYearObject[currentYear];
      }
  
      console.log("Yearly Sell:", yearlySell);
      console.log("Total Price by Year:", totalPriceByYearObject);
  
      res.json({ yearlySell, totalPriceByYearObject });
    } catch (error) {
      console.error(`Error while fetching products: ${error}`);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
 
  router.get('/stat/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const orders = await Order
        .find({ sellerId: id })
        .populate('product.productId')
        .exec();
  
      if (!orders || orders.length === 0) {
        console.log("No results found.");
        return res.status(404).json({ message: "No results found." });
      }
  
      const totalCustomers = new Set(orders.map(order => order.buyerId)).size;
  
      const totalPriceByDate = new Map();
      const totalPriceByMonth = new Map();
      const totalPriceByYear = new Map();
  
      for (const order of orders) {
        const orderDate = new Date(order.date);
        const orderDay = new Date(order.date).toLocaleDateString();
        const yearMonth = orderDate.getFullYear() + '-' + (orderDate.getMonth() + 1);
        const year = orderDate.getFullYear();
  
        // Total Price by Date
        if (!totalPriceByDate.has(orderDay)) {
          totalPriceByDate.set(orderDay, 0);
        }
        totalPriceByDate.set(orderDay, totalPriceByDate.get(orderDay) + order.totalPrice);
  
        // Total Price by Month
        if (!totalPriceByMonth.has(yearMonth)) {
          totalPriceByMonth.set(yearMonth, 0);
        }
        totalPriceByMonth.set(yearMonth, totalPriceByMonth.get(yearMonth) + order.totalPrice);
  
        // Total Price by Year
        if (!totalPriceByYear.has(year)) {
          totalPriceByYear.set(year, 0);
        }
        totalPriceByYear.set(year, totalPriceByYear.get(year) + order.totalPrice);
      }
  
      const totalPriceByDateObject = Object.fromEntries(totalPriceByDate);
      const totalPriceByMonthObject = Object.fromEntries(totalPriceByMonth);
      const totalPriceByYearObject = Object.fromEntries(totalPriceByYear);
  
      const today = new Date().toLocaleDateString();
      const Yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString();
  
      const Today_Sell = totalPriceByDateObject[today] || 0;
      const Yesterday_Sell = totalPriceByDateObject[Yesterday] || 0;
  
      const currentYearMonth = new Date().toISOString().slice(0, 7);
      const lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().slice(0, 7);
  
      const monthlySell = totalPriceByMonthObject[currentYearMonth] || 0;
      const lastMonthSell = totalPriceByMonthObject[lastMonth] || 0;
  
      const currentYear = new Date().getFullYear();
      const lastYear = currentYear - 1;
  
      const yearlySell = totalPriceByYearObject[currentYear] || 0;
      const lastYearSell = totalPriceByYearObject[lastYear] || 0;
      const lastcus = 3;
      let lastDayCustomerPercentage = calculatePercentageChange(totalCustomers, lastcus, Today_Sell);
      let lastDayIncomePercentage = calculatePercentageChange(Yesterday_Sell, Yesterday_Sell, Today_Sell);
      let lastMonthIncomePercentage = calculatePercentageChange(lastMonthSell, lastMonthSell, monthlySell);
      let lastYearIncomePercentage = calculatePercentageChange(lastYearSell, lastYearSell, yearlySell);
      lastDayCustomerPercentage = lastDayCustomerPercentage? lastDayCustomerPercentage.toPrecision(4) : 0;
      lastDayIncomePercentage = lastDayIncomePercentage? lastDayIncomePercentage.toPrecision(4) : 0;
      lastMonthIncomePercentage = lastMonthIncomePercentage? lastMonthIncomePercentage.toPrecision(4) : 0;
      lastYearIncomePercentage = lastYearIncomePercentage? lastYearIncomePercentage.toPrecision(4) : 0;
      const result = {
        totalCustomers,
        dailyIncome: Today_Sell,
        monthlyIncome: monthlySell,
        yearlyIncome: yearlySell,
        DayPercentage:lastDayCustomerPercentage,
        DayIncomePercentage:lastDayIncomePercentage,
        LastMonthIncomePercentage:lastMonthIncomePercentage,
        LastYearIncomePErcentage:lastYearIncomePercentage,
        totalPriceByDate: totalPriceByDateObject,
        totalPriceByMonth: totalPriceByMonthObject,
        totalPriceByYear: totalPriceByYearObject,
        orders
      };
  
      res.json(result);
  
    } catch (error) {
      console.error(`Error while fetching products: ${error}`);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  // Function to calculate percentage change
  function calculatePercentageChange(previousValue, oldValue, newValue) {
    const change = newValue - oldValue;
    return (change / Math.abs(previousValue)) * 100;
  }


module.exports = router