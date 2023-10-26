import React, { useState, useEffect } from 'react';

function Cars() {
    // Verileri saklamak için bir state kullanın
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // MySQL verilerini çekmek için ağ isteği yapın
    useEffect(() => {
        fetch('/api/cars')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // setCars(data);
                // Gelen verinin bir dizi olduğundan emin olun
                if (Array.isArray(data)) {
                    setCars(data);
                } else {
                    throw new Error('Data is not an array');
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>Car List</h2>
            <ul>
                {cars.map((cars) => (
                    <li key={cars.id}>
                        <strong>Plate:</strong> {cars.plate}, <strong>Brand:</strong> {cars.brand}, <strong>Model:</strong> {cars.model}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cars;
