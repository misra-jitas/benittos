// src/HomeBanner2.tsx
import React from 'react';
import {useContent} from '@croct/plug-react';

export function HomeBanner2() {
  const content = useContent('home-banner2', {
    // Omit this property if you want your component to suspend
    initial: null,
   // It is a good practice to define a fallback to make your
   // application resilient to external errors.
    fallback: {
      title: ',not imitate.',
      
    },
  });

  if (content === null) {
    // Render a loading state
    return (<div>Loading...</div>);
  }

  return (
     <div id="hero-banner">
      <h1>{content.title}</h1>
   
    </div>
  );
}