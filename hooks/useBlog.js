import useSWR from 'swr';

const useBlog = (page) => {
  const query = `
  {
    blogs(start: ${page * 9}, limit: 9, sort: "created_at:desc") {
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
    totalcount: blogsCount
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

export default useBlog;
