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

export async function connect() {
    const dbConfig = {
        host: 'localhost', // Your database host
        user: 'admin', // Your database username
        password: '1234', // Your database password
        database: 'vehicle_registration', // Your database name
    };

    const connection = mysql.createConnection(dbConfig);

    // Establish the database connection
    connection.connect((err) => {
        if (err) {
            console.error('Database connection failed:', err);
            throw err; // You may want to handle the error more gracefully in your application
        } else {
            console.log('Database connected successfully');
        }
    });

    // Return the database connection for use in your application
    return connection;
}

