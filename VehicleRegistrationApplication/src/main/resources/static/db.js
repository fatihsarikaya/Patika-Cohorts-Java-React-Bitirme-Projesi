const mysql = require('mysql2');

// MySQL bağlantı ayarları
const dbConfig = {
    host: 'localhost',
    user: 'admin', // MySQL kullanıcı adınız
    password: '1234', // MySQL şifreniz
    database: 'vehicle_registration', // Kullanmak istediğiniz veritabanı adını burada belirtin
};

const connection = mysql.createConnection(dbConfig);

// Veritabanı bağlantısı açma işlemi
connection.connect((err) => {
    if (err) {
        console.error('Veritabanına bağlanılamadı:', err);
    } else {
        console.log('Veritabanına başarıyla bağlandı.');
    }
});

// Veritabanı bağlantısı kapama işlemi (testlerin sonunda kullanılabilir)
const disconnect = () => {
    connection.end((err) => {
        if (err) {
            console.error('Veritabanı bağlantısı kapatılamadı:', err);
        } else {
            console.log('Veritabanı bağlantısı başarıyla kapatıldı.');
        }
    });
};

module.exports = { connection, disconnect };
