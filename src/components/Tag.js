import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [tag, setTag] = useState("naruto");
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <p className="title mt">Random {tag} Gif</p>
      <img width="500" src={gif} alt="Random Gif" />
      <input
        className="form__input mt"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button className="Button mt" onClick={handleClick}>
        Cari {tag}
      </button>
    </div>
  );
};

export default Random;
