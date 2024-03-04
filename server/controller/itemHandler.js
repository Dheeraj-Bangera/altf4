const Item = require('../model/Item');

async function addItem(req,res) {
  try {
    const itemData = req.body
    const newItem = await Item.create(itemData);
    if (!newItem){
        return res.send({
            message:"no entry"
        });
    }
    return res.send(newItem); // Return the created item
  } catch (error) {
    // Handle any errors
    console.error("Error adding item:", error);
    throw error;
  }
}
async function getItemsByVendor(req,res) {
    try {
      
      const items = await Item.find({ vendor: "65e5f0670e53426fd83306dc" });
      if(!items){
        return res.status(404).send({
            message:"no entry"
        });
      }
      return res.send(items);
    } catch (error) {
      // Handle any errors
      console.error("Error fetching items by vendor:", error);
      throw error;
    }
  }

module.exports = {addItem,getItemsByVendor};
