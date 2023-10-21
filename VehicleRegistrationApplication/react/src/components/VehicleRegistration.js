import React, { useState } from 'react';

function VehicleRegistration() {
  const [plate, setPlate] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  const handleRegistration = () => {
    // Araç kayıt işlemleri burada yapılır
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Plaka"
        value={plate}
        onChange={(e) => setPlate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Marka"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <button onClick={handleRegistration}>Araç Ekle</button>
    </div>
  );
}

export default VehicleRegistration;
