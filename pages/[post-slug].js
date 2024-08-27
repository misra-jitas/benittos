// pages/[post-slug].js
import React from 'react';
import BlogPost from '../components/elements/BlogPost'; // Import your BlogPost component
import { useRouter } from 'next/router'; // Import the useRouter from next/router

const Post = () => {
  // Get the postSlug from the URL using useRouter or any other method
  const { query } = useRouter();
  const postSlug = query['post-slug'];

  return <BlogPost postSlug={postSlug} />;
};

export default Post;
