import useSWR from 'swr';

const useProject = (id) => {
  const query = `
  {
    project(id: ${Number(id || 0)}) {
      id
      projectName
      Description
      link
      category
      role
      video {
        ...file
      }
      images {
        ...file
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

export default useProject;
