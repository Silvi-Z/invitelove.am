import React, { useState } from 'react';
import styles from './catalog.module.css';

export default function CatalogPage() {
    const [filters, setFilters] = useState({
        category: 'all',
        priceRange: 'all',
        search: '',
    });

    const products = [
        { id: 1, name: 'Elegant Invitation', category: 'invitations', price: 50 },
        { id: 2, name: 'Gold Banner', category: 'decorations', price: 30 },
        { id: 3, name: 'Venue Sign', category: 'signage', price: 75 },
        { id: 4, name: 'Table Card', category: 'cards', price: 20 },
        { id: 5, name: 'Floral Centerpiece', category: 'decorations', price: 45 },
        { id: 6, name: 'Menu Card', category: 'cards', price: 25 },
    ];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const filteredProducts = products.filter((product) => {
        const matchCategory = filters.category === 'all' || product.category === filters.category;
        const matchSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
        const matchPrice =
            filters.priceRange === 'all' ||
            (filters.priceRange === 'low' && product.price <= 30) ||
            (filters.priceRange === 'mid' && product.price > 30 && product.price <= 50) ||
            (filters.priceRange === 'high' && product.price > 50);

        return matchCategory && matchSearch && matchPrice;
    });

    return (
        <div className={styles.catalogContainer}>
            <h1>Wedding Catalog</h1>

            <div className={styles.filters}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search products..."
                    value={filters.search}
                    onChange={handleFilterChange}
                />

                <select name="category" value={filters.category} onChange={handleFilterChange}>
                    <option value="all">All Categories</option>
                    <option value="invitations">Invitations</option>
                    <option value="decorations">Decorations</option>
                    <option value="signage">Signage</option>
                    <option value="cards">Cards</option>
                </select>

                <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange}>
                    <option value="all">All Prices</option>
                    <option value="low">Under $30</option>
                    <option value="mid">$30 - $50</option>
                    <option value="high">Over $50</option>
                </select>
            </div>

            <div className={styles.productGrid}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className={styles.productCard}>
                            <h3 className={styles.title}>{product.name}</h3>
                            <p className={styles.category}>{product.category}</p>
                            <p className={styles.price}>${product.price}</p>
                            <button className={styles.button}>Add to Cart</button>
                        </div>
                    ))
                ) : (
                    <p className={styles.noResults} >No products found</p>
                )}
            </div>
        </div>
    );
}