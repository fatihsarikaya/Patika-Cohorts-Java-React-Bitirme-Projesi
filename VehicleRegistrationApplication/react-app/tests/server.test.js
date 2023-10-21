const request = require('supertest');
const app = require('../server'); // Sunucu uygulamanızın ana dosyasının yoluyla değiştirin
const db = require('../db'); // Veritabanı bağlantısını yöneten dosyanın yoluyla değiştirin

describe('Server Tests', () => {
  beforeAll(async () => {
    // Test öncesinde veritabanına bağlantıyı aç
    await db.connect();
  });

  afterAll(async () => {
    // Test sonrasında veritabanı bağlantısını kapat
    await db.disconnect();
  });

  it('should fetch data from the database', async () => {
    const response = await request(app).get('/api/data'); // API yolunuzu değiştirin

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3); // Örnek bir beklenti, gerçek verilere göre ayarlayın
  });

  // Diğer testler buraya eklenebilir
});
