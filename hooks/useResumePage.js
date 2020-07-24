import useSWR from 'swr';

const useResumePage = () => {
  const query = `
  {
    resumePage {
      backgroundMedia {
        ...file
      }
      content
      buttonText
      buttonLink
      resume {
        ...file
      }
    }
    skills {
      id
      name
      ratting
      logo {
        ...file
      }
      link
    }
    certifications {
      id
      name
      issuingOrganization {
        name
      }
      issueDate
      expirationDate
      neverExpire
    }
    workExperiences(sort: "startDate:desc") {
      id
      Title
      employmentType
      location
      currentlyWorking
      startDate
      endDate
      description
      company {
        name
        link
      }
    }
    achievements {
      id
      text
    }
    educationDetails(sort: "startDate:desc") {
      id
      degree
      studyField
      startDate
      endDate
      grade
      description
      link
      logo {
        ...file
      }
      school
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

export default useResumePage;
