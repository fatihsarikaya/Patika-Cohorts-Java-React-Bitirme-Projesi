const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080; // API'nin dinleyeceği portu belirtin

// Middleware: İstek gövdelerini analiz etmek için body-parser kullanma
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API rotalarını burada tanımlayabilirsiniz
app.get('/api/cars', (req, res) => {
    // Veritabanından araçları almak için gerekli kodu buraya ekleyin
    // Örneğin, veritabanından araçları çekmek için bir sorgu yapabilirsiniz
    const cars = [
        { id: 1, plate: 'ABC123', brand: 'Toyota', model: 'Corolla' },
        { id: 2, plate: 'XYZ789', brand: 'Honda', model: 'Civic' },
        // Diğer araçlar buraya eklenebilir
    ];

    res.json(cars);
});

// Daha fazla API rotası eklemek için aynı şekilde devam edebilirsiniz

app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    // Simulated sign-in logic (replace with your actual authentication logic)
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
        res.json({ success: true, message: 'Sign-in successful' });
    } else {
        res.status(401).json({ success: false, message: 'Sign-in failed' });
    }
});

// Sunucuyu dinlemeye başla
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor.`);
});
