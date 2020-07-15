import useSWR from 'swr';

const useHomePage = () => {
  const query = `
  {
    homePage {
      firstName
      lastName
      home {
        ...homeDetails
      }
      aboutMe {
        ...aboutMeDetails
      }
      meta {
        id
        name
        value
      }
      counter {
        id
        number
        description
      }
      ContactMe {
        title
        description
        address {
          addressLine1
          addressLine2
          city
          state
          country
          zipcode
          latitude
          longitude
        }
        phoneNumbers {
          phoneNumber
        }
        emails {
          email
        }
      }
      blog {
        title
        description
        blogs {
          Title
          description
          image {
            ...file
          }
          content
          categories {
            categoryName
            categoryDescription
          }
        }
      }
      dynamicFields {
        __typename
        ... on ComponentHomePageServices {
          title
          description
          servicesList {
            id
            icon
            title
            description
          }
        }
        ... on ComponentHomePageSkills {
          title
          description
          buttonText
          buttonLink
          skills {
            id
            name
            ratting
            link
          }
        }
        ... on ComponentHomePagePortfolio {
          title
          description
          projects {
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
        ... on ComponentHomePageTestimonial {
          title
          description
          testimonialList {
            name
            testimonial
            companyName
            avatar {
              ...file
            }
          }
        }
      }
    }
  }
  
  fragment homeDetails on ComponentHomePageHome {
    content
    buttonText
    buttonLink
    backgroundMedia {
      ...file
    }
  }
  
  fragment aboutMeDetails on ComponentHomePageAboutMe {
    content
    buttonText
    buttonLink
    profilePicture {
      ...file
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

export default useHomePage;
