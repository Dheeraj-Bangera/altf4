const Order = require('./orderModel');
const OrderHistory = require('./orderHistoryModel');
const OrderList = require('./orderListModel');

async function placeOrder(orderData) {
  try {

    const lastOrder = await Order.findOne().sort({ order_no: -1 }).limit(1);


    const newOrderNo = lastOrder ? lastOrder.order_no + 1 : 1;


    orderData.order_no = newOrderNo;


    const newOrder = await Order.create(orderData);

    
    await OrderHistory.findOneAndUpdate(
      { user: orderData.user },
      { $push: { order: newOrder._id }, $inc: { amount: orderData.amount } },
      { upsert: true }
    );

    
    await OrderList.findOneAndUpdate(
      { vendor: orderData.vendor },
      { $push: { all_order: newOrder._id, order_left: newOrder._id } },
      { upsert: true }
    );

    return newOrder; 
  } catch (error) {

    console.error("Error placing order:", error);
    throw error;
  }
}

module.exports = {placeOrder};
