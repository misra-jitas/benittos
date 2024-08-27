import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from '../layout/Layout';

function BlogPost({ postSlug }) {
  const [blogPost, setBlogPost] = useState(null);
  const router = useRouter();

  useEffect(() => {
    axios
      .get('https://unanube-blog-e193372c4dad.herokuapp.com/api/vuelas?populate')
      .then((response) => {
        const data = response.data.data;
        const post = data.find((item) => item.attributes.slug.toLowerCase() === postSlug.toLowerCase());
        if (post) {
          setBlogPost(post.attributes);
        } else {
          router.push('/404'); // Redirect to 404 page if the post is not found
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [postSlug, router]);

  if (!blogPost) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <div>
        <h1>{blogPost.Titulo}</h1>
        <p>{blogPost.Cuerpo}</p>
        <p>Fecha: {blogPost.Fecha}</p>
      </div>
    </Layout>
  );
}

export default BlogPost;
