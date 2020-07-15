import useSWR from 'swr';

import fetch from '@lib/fetch';

const usePost = (id) => {
  const query = `
  {
    blog(id: ${Number(id || 0)}) {
      id
      Title
      description
      image {
        ...file
      }
      created_at
      content
      categories {
        categoryName
        categoryDescription
      }
    }
  }
  
  fragment file on UploadFile {
    name
    caption
    formats
    url
  }  
  `;
  return useSWR([query], fetch);
};

export default usePost;
