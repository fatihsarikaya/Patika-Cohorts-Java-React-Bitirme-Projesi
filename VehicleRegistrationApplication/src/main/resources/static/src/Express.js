const express = require('react-app/src/Express');
const app = express();

// Örnek bir veri dizisi (veritabanı yerine kullanılan basit bir dizi)
const carsData = [
  { id: 1, plate: 'ABC123', brand: 'Toyota', model: 'Corolla' },
  { id: 2, plate: 'XYZ456', brand: 'Honda', model: 'Civic' },
  { id: 3, plate: '123DEF', brand: 'Ford', model: 'Focus' },
];

// GET isteği için '/api/cars' yolunu işle
app.get('/api/cars', (req, res) => {
  // Örnek verileri yanıt olarak gönder
  res.json(carsData);
});

// Uygulamayı belirlediğiniz bir portta çalıştırın
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
