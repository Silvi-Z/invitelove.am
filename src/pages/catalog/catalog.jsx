import React, { useState, useMemo } from 'react';
import styles from './catalog.module.css';

const CatalogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Բոլորը');
    const [sortBy, setSortBy] = useState('newest');
    const [itemsToShow, setItemsToShow] = useState(12);

    const catalogData = [
        { id: 1, title: 'Հարսանեկան', description: 'Complete wedding planning and coordination', price: 10000, category: 'Հարսանեկան', image: 'https://i.pinimg.com/736x/7c/d1/92/7cd1923e48be2e2f8b23dc03f37af23b.jpg' },
        { id: 2, title: 'Հարսանեկան', description: 'Custom floral designs for your special day', price: 14500, category: 'Հարսանեկան', image: 'https://i.pinimg.com/736x/48/88/d3/4888d32eab2f943653838db6981b378a.jpg' },
        { id: 3, title: 'Հարսանեկան', description: 'Gourmet meals for up to 200 guests', price: 13200, category: 'Հարսանեկան', image: 'https://i.pinimg.com/1200x/54/c8/df/54c8dfe10121a29a081bf80ed718f8e2.jpg' },
        { id: 4, title: 'Հարսանեկան', description: '8-hour photography coverage with album', price: 18000, category: 'Հարսանեկան', image: 'https://i.pinimg.com/736x/bc/a9/be/bca9be354512747842b46d7310301772.jpg' },
        { id: 5, title: 'Ծննդյան', description: 'Colorful balloon arrangements and backdrops', price: 13500, category: 'Ծննդյան', image: 'https://i.pinimg.com/1200x/59/f7/9c/59f79c86ec2e089bc748cf03d5caef0c.jpg' },
        { id: 6, title: 'Ծննդյան', description: 'Professional entertainers and activities', price: 16000, category: 'Ծննդյան', image: 'https://i.pinimg.com/1200x/93/eb/b0/93ebb0d932320a34e1560c20577e2716.jpg' },
        { id: 7, title: 'Ծննդյան', description: 'Personalized birthday cakes with custom designs', price: 12800, category: 'Ծննդյան', image: 'https://i.pinimg.com/736x/f8/88/e7/f888e7863f54b36ba9cfa8078c28c38d.jpg' },
        { id: 9, title: 'Այլ', description: 'Professional ambient and decorative lighting', price: 18900, category: 'Այլ', image: 'https://i.pinimg.com/736x/64/95/21/64952119bf8b0314dbe2a506ff84e1ec.jpg' },
        { id: 13, title: 'Հարսանեկան', description: 'Elegant ballroom with full amenities', price: 14500, category: 'Հարսանեկան', image: 'https://i.pinimg.com/1200x/86/32/a5/8632a5892924f0418ea6085957942060.jpg' },
    ];

    const filteredData = useMemo(() => {
        let filtered = selectedCategory === 'Բոլորը' 
            ? catalogData 
            : catalogData.filter(item => item.category === selectedCategory);

        return filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'newest':
                    return b.id - a.id;
                default:
                    return 0;
            }
        });
    }, [selectedCategory, sortBy]);

    const displayedItems = filteredData.slice(0, itemsToShow);
    const hasMore = itemsToShow < filteredData.length;

    return (
        <div className={styles.catalogContainer}>
            {/* <header className={styles.catalogHeader}>
                <h1>Our Event Services</h1>
                <p>Discover premium services for your special moments</p>
            </header> */}

            <div className={styles.catalogControls}>
                <div className={styles.filterSection}>
                    <div className={styles.filterButtons}>
                        {['Բոլորը', 'Հարսանեկան', 'Ծննդյան', 'Այլ'].map(category => (
                            <button
                                key={category}
                                className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setItemsToShow(12);
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.sortSection}>
                    <label htmlFor="sort-select">Սորտավորել ըստ՝</label>
                    <select
                        id="sort-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className={styles.sortSelect}
                    >
                        <option value="newest">Նոր</option>
                        <option value="price-low">ԳԻՆ՝ ցածրից բարձր</option>
                        <option value="price-high">ԳԻՆ՝ բարձրից ցածր</option>
                    </select>
                </div>
            </div>

            <div className={styles.catalogGrid}>
                {displayedItems.map(item => (
                    <div key={item.id} className={styles.catalogCard}>
                        <div className={styles.cardImageWrapper}>
                            <img src={item.image} alt={item.title} className={styles.cardImage} />
                            <div className={styles.categoryBadge}>{item.category}</div>
                        </div>
                        
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            {/* <p className={styles.cardDescription}>{item.description}</p> */}
                            
                            <div className={styles.cardFooter}>
                                <span className={styles.cardPrice}>{item.price} դրամ</span>
                                <div className={styles.cardButtons}>
                                    <button className={styles.btnView}>Տեսնել</button>
                                    <button className={styles.btnOrder}>Պատվիրել</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className={styles.loadMoreContainer}>
                    <button 
                        className={styles.loadMoreBtn}
                        onClick={() => setItemsToShow(prev => prev + 4)}
                    >
                        Ավելին
                    </button>
                </div>
            )}

            {filteredData.length === 0 && (
                <div className={styles.noResults}>
                    <p>Այս կատեգորիայում տարրեր չեն գտնվել:</p>
                </div>
            )}
        </div>
    );
};

export default CatalogPage;