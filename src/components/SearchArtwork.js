import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import Search from "./Search";
import "./Search.css";

function SearchArtWorks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [IDs, setIDs] = useState([]);
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks/search?q=painting&limit=100")
      .then((data) => data.json())
      .then((artworks) =>
        setIDs(artworks.data.map((item) => item.id))
      )
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    IDs.forEach((id) => {
      fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
        .then((data) => data.json())
        .then((item) =>
          setItems((prevItem) => [...prevItem, item.data])
        )
        .catch((err) => console.log(err));
    });
  }, [IDs]);

  return (
    <div className="container">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="parent">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, i) => (
            <ImageCard
              key={i}
              item={item}
           />
          ))}
      </div>
     
    </div>
  );
}

export default SearchArtWorks;
