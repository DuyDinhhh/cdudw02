import React, { useEffect, useState } from 'react';
import Cart from './product/Cart';

const Page3 = (props) => {
    const [active, setActive] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const { product, category } = props;

    useEffect(() => {
        setTotalPage(Math.ceil(product.length / 4));
        setCurrentItems(product.slice(0, 4));
        setActive(1);
    }, [product]);

    const handleOnClick = (index) => {
        if (active === index || index < 1 || index > totalPage) {
            return;
        }

        const startIndex = (index - 1) * 4;
        const endIndex = index * 4;
        const newCurrentItems = product.slice(startIndex, endIndex);

        setCurrentItems(newCurrentItems);
        setActive(index);
    };

    const handleNextClick = () => {
        handleOnClick(active + 1);
    };

    const handlePreviousClick = () => {
        handleOnClick(active - 1);
    };

    return (
        <>
            <section className="padding-bottom">
                <header className="section-heading mb-4">
                    <h3 className="title-section">{!category ? "Tất cả" : category.name}</h3>
                </header>
                <div>
                    <div className="row">
                        {currentItems.map((item) => (
                            <Cart key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            </section>
            <div className="container mt-3 d-flex d-flex justify-content-center mb-5">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" onClick={handlePreviousClick}>
                            Previous
                        </a>
                    </li>
                    {Array.from({ length: totalPage }).map((_, index) => (
                        <li
                            key={index}
                            className={`page-item ${index + 1 === active ? 'active' : ''}`}
                            onClick={() => handleOnClick(index + 1)}
                        >
                            <a className="page-link">{index + 1}</a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a className="page-link" onClick={handleNextClick}>
                            Next
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Page3;
