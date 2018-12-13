//Import ORM
const orm = require("../config/orm.js")

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    createOne: function (columns, values, cb) {
        orm.createOne("burgers", columns, values, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColValues, condition, cb) {
        orm.updateOne("burgers", objColValues, condition, function (res) {
            cb(res);
        });
    },
    deleteOne: function (condition, cb) {
        orm.deleteOne("burgers", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;