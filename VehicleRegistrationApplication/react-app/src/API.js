// Örnek API (Express kullanılarak)
const express = require('express');
const app = express();
const sequelize = require('sequelize'); // Sequelize ORM'ini kullanırken //const { Sequelize, DataTypes } = require("sequelize");

// Sequelize ile MySQL veritabanı bağlantısı
const db = new Sequelize('vehicle_registration', 'admin', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

// "Car" modeli
const Car = db.define('Car', {
    plate: Sequelize.STRING,
    brand: Sequelize.STRING,
    model: Sequelize.STRING
//    plate: DataTypes.STRING,
//    brand: DataTypes.STRING,
//    model: DataTypes.STRING
});

// API endpoint'i
app.get('/api/cars', async (req, res) => {
    try {
        const cars = await Car.findAll();
        res.json(cars);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Veriler alınamadı' });
    }
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});

//app.listen(8080, () => {
//    console.log('Server listening on port 8080');
//});
