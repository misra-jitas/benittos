import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define a fallback image URL
const fallbackImageUrl = 'assets/imgs/page/homepage1/nubepeluche.png';

function VuelaBlog() {
  const [latestBlogPost, setLatestBlogPost] = useState(null);

  useEffect(() => {
    axios
      .get('https://unanube-blog-e193372c4dad.herokuapp.com/api/vuelas?populate=*')
      .then((response) => {
        const data = response.data.data;
        if (data && data.length > 0) {
          // Set the latest article in the state
          setLatestBlogPost(data[data.length - 1].attributes);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {latestBlogPost ? (
        <div>
          <h4>{latestBlogPost.Titulo}</h4>
          <img
            src={
              latestBlogPost.Fotos &&
              latestBlogPost.Fotos.data &&
              latestBlogPost.Fotos.data.length > 0
                ? `https://unanube-blog-e193372c4dad.herokuapp.com${latestBlogPost.Fotos.data[0].attributes.url}`
                : fallbackImageUrl
            }
            alt={
              latestBlogPost.Fotos &&
              latestBlogPost.Fotos.data &&
              latestBlogPost.Fotos.data.length > 0
                ? latestBlogPost.Fotos.data[0].attributes.name
                : 'Fallback Image Alt Text'
            }
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default VuelaBlog;
