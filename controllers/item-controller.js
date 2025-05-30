const Item = require("../module/item-module");

const addItem = async (data) => {
    try {
        await Item.create(data);
    } catch (error) {
        console.error("Error adding item:", error.message);
        throw new Error("Failed to add item");
    }
};

const deleteItem = async (id) => {
    try {
        await Item.deleteOne({_id:id});
    } catch (error) {
        console.error("Error deleting item:", error.message);
        throw new Error("Failed to delete item");
    }
};

const getAllItems = async () => {
    try {
        return await Item.find({});
    } catch (error) {
        console.error("Error fetching items:", error.message);
        throw new Error("Failed to fetch items");
    }
};

module.exports = {
    addItem,
    deleteItem,
    getAllItems,
};
