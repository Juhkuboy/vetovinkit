import React, { useState } from 'react';
import './styles.css';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="homepage">
            <h1>Welcome to Vetovinkit</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            <div className="results">
                {/* Display search results here */}
            </div>
        </div>
    );
};

export default HomePage;