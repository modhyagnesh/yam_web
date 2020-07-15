import useSWR from 'swr';

const usePortfolio = (page) => {
  const query = `
  {
    projects(start: ${page * 9}, limit: 9, sort: "created_at:desc") {
      id
      projectName
      Description
      link
      category
      role
      video {
        ...file
      }
      coverImage {
        ...file
      }
    }
    totalcount: projectsCount   
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

export default usePortfolio;
