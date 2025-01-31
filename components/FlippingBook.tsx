"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./FlippingBook.css";

const images = [
  "/images/love1.jpg",
  "/images/love2.jpg",
  "/images/love3.jpg",
];

const FlippingBook = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNextPage = () => {
    setIsFlipping(true);
    setTimeout(() => {
      if (pageIndex < images.length) {
        setPageIndex(pageIndex + 1);
      } else {
        setPageIndex(0); // Restart after last page
      }
      setIsFlipping(false);
    }, 800); // Smooth transition timing
  };

  return (
    <div className="container">
      <div className="heading">So Pretty Meri Jaan <footer
          style={{
            position: "absolute",
            bottom: "10px",
            width: "100%",
            textAlign: "center",
            fontSize: "1rem",
            color: "#0055",
          }}
        >
          For Many More To Come
        </footer></div>
      <div className="book-container" onClick={handleNextPage}>
        <div className={`book ${isFlipping ? "flip" : ""}`}>
          {pageIndex === 0 ? (
            <div className="cover">
              <h2>To My Love ❤️</h2>
            </div>
          ) : pageIndex <= images.length ? (
            <Image
              src={images[pageIndex - 1]}
              alt={`Love Memory ${pageIndex}`}
              width={300}
              height={400}
              className="page-image"
            />
          ) : (
            <div className="last-page">
              <p>and many more to come ❤️</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlippingBook;
