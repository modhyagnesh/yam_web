import useSWR from 'swr';

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
  return useSWR([query]);
};

export default usePost;
