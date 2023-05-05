import React, { useEffect, useState } from "react";
import './ArtworksList.css';

function ArtworksList() {
  const [artworks, setArtworks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data.data);
      });
  }, []);
  const handleAddToFavorites = (artwork) => {
    setFavorites([...favorites, artwork]);
  };
  const handleRemoveFromFavorites = (artwork) => {
    setFavorites(
      favorites.filter((favArtwork) => favArtwork.id !== artwork.id)
    );
  };
  const isArtworkInFavorites = (artwork) => {
    return favorites.some((favArtwork) => favArtwork.id === artwork.id);
  };
  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };
  const renderArtwork = (artwork) => {
    return (
      <div key={artwork.id}  className="artwork-card" >
        {artwork.image_id && (
          <img
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.title}
            className="artwork-thumbnail"
           
          />
        )}
        <h2 className="artwork-title"  >
          {artwork.title}
        </h2>
        {artwork.artist_title && (
          <p  className="artwork-artist" >
            {artwork.artist_title}
          </p>
        )}
        {artwork.date_display && (
          <p  className="artwork-date"     >
            {artwork.date_display}
          </p>
        )}
        {isArtworkInFavorites(artwork) ? (
          <button className="remove-favourites-button" onClick={() => handleRemoveFromFavorites(artwork)}     >
            Remove from favorites
          </button>
        ) : (
          <button className="add-favourites-button"  onClick={() => handleAddToFavorites(artwork)}  >
            &#9733; Add to favorites
          </button>
        )}
      </div>
    );
  };
  const renderArtworks = () => {
    const artworksToRender = showFavorites ? favorites : artworks;
    return artworksToRender.map((artwork) => renderArtwork(artwork));
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {showFavorites ? "Favorites" : "Artworks"}
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={toggleFavorites}
          style={{ margin: "10px", backgroundColor: "yellow", color: "black" }}
        >
          {" "}
          &#9733;
          {showFavorites ? "Back to Display of Artworks" : "Show Favorites"}
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {renderArtworks()}
      </div>
    </div>
  );
}
export default ArtworksList;
