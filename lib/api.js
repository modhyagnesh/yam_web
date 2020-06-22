const fetchAPI = async (query, variables) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();
    if (json.errors) {
      //   console.error(json.errors);
      throw new Error('Failed to fetch API');
    }

    return json.data;
  } catch (error) {
    throw new Error(error);
  }
};

// eslint-disable-next-line import/prefer-default-export
export const getHomePage = async () => {
  const data = fetchAPI(`
  {
    homePage {
      firstName,
      lastName,
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
    }
  }
  
  fragment homeDetails on ComponentHomePageHome {
    content,
    buttonText,
    buttonLink,
    backgroundMedia {
      ...file
    }
  }
  
  fragment aboutMeDetails on ComponentHomePageAboutMe {
    content,
    buttonText,
    buttonLink,
    profilePicture {
      ...file
    }
  }
  
  fragment file on UploadFile {
    name,
    caption,
    formats,
    url
  }
    `);
  return data;
};
