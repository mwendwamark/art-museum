import React, { useState, useEffect } from "react";
import './ArtCard.css';

function ArtCard({ artworkId }) {
    const [artwork, setArtwork] = useState(null);
  
    useEffect(() => {
      fetch(`https://api.artic.edu/api/v1/artworks/${artworkId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setArtwork(data.data);
        });
    }, [artworkId]);
  
    const handleClick = () => {
      // display the image on one side and artwork details on the other
    };
  
    return (
      <div
        className="art-card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f7f7f7",
          padding: "40px",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "9999",
        }}
      >
        {artwork ? (
          <div
            className="art-card-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "5px",
              padding: "20px",
              height: "80%",
              width: "80%",
            }}
            onClick={handleClick}
          >
            <div className="art-card-image-container" style={{ flex: "1" }}>
              <img
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                alt={artwork.title}
               
              />
            </div>
            <div className="art-card-details-container" style={{ flex: "1" }}>
              <label>Title</label>
              <h2 className="art-card-title">{artwork.title}</h2>
              <label>Artist</label>
              <p className="art-card-artist">{artwork.artist_display}</p>
              <label>Place of origin</label>
              <p className="art-card-origin">{artwork.place_of_origin}</p>
              <label>Credit Line</label>
              <p className="art-card-credit">{artwork.credit_line}</p>
              <label>Publication History</label>
              <p className="art-card-publication">{artwork.publication_history}</p>
              <label>Category</label>
              <p className="art-card-category">{artwork.category_titles}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  
  export default ArtCard;
