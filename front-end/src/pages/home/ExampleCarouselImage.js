import React from 'react';

const ExampleCarouselImage = ({ text }) => {
    return (
        <img
            className="d-block w-100"
            src={`https://placekitten.com/800/400?text=${text}`} // Example image source, you can replace it with your own image URLs
            alt={text}
        />
    );
};

export default ExampleCarouselImage;
