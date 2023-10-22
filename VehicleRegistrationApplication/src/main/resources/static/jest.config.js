module.exports = {
    // Diğer Jest ayarları
    transform: {
        // Jest'e dönüştürülmesi gereken dosyaların eşleşme desenlerini tanımlayabilirsiniz.
        "^.+\\.js$": "babel-jest",
        "node_modules/@sinonjs/commons/lib/global.test.js": "babel-jest", // Örnek bir dosya
    },

};
