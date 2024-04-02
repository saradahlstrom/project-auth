// src/components/AuthenticatedContent.js
import React, { useState, useEffect } from 'react';

const AuthenticatedContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/api/authenticated-content', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setContent(data.content);
      } else {
        setContent('You are not authorized to view this content.');
      }
    };

    fetchContent();
  }, []);

  return <div>{content}</div>;
};

export default AuthenticatedContent;
