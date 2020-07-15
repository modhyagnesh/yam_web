import useSWR from 'swr';

const useContact = () => {
  const query = `
  {
    contactPage {
      title
      description
      backgroundMedia {
        ...file
      }
      content
      meta {
        id
        key
        value
      }
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

export default useContact;
