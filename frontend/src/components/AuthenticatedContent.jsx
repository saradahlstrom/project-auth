import React, { useEffect, useState } from 'react';
import { fetchAuthenticatedContent } from './api.js';

const AuthenticatedContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await fetchAuthenticatedContent();
        setContent(data.message);
      } catch (error) {
        alert('Could not fetch content: ' + error.response.data.message);
      }
    };
    getContent();
  }, []);

  return <div className="mt-10 text-center">
      <div className="inline-block text-lg font-medium py-4 px-6 bg-blue-100 text-blue-700 rounded">
          {content || "Loading..."}
      </div>
  </div>;
};

export default AuthenticatedContent;
