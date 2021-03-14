const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        email: { type: DataTypes.STRING, allowNull: false },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        hash: { type: DataTypes.STRING, allowNull: false },
        balance: { type: DataTypes.DECIMAL(10,2), allowNull:false, defaultValue:100.00 },
    };

    const options = {
        defaultScope: {
            // exclude hash by default. Consider excluding balances?
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}