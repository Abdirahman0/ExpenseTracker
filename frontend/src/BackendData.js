import React, { useState, useEffect } from "react";

function BackendData() {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/message")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                setMessage(data);
                setError(null);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError(error.message);
            });
    }, []);

    return (
        <div>
            <h2>Data from Backend:</h2>
            {error ? (
                <p style={{ color: "red" }}>Error: {error}</p>
            ) : (
                <p>{message}</p>
            )}
        </div>
    );
}

export default BackendData;
