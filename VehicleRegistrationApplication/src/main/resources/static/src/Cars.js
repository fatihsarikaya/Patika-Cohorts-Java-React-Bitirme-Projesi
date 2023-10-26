import React, { useState, useEffect } from 'react';

function Cars() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/cars') // Sunucu adresini kullanın // fetch('http://localhost:8080/api/cars')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setCars(data);
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
                {cars.map((car) => (
                    <li key={car.id}>
                        <strong>Plate:</strong> {car.plate}, <strong>Brand:</strong> {car.brand}, <strong>Model:</strong> {car.model}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cars;
