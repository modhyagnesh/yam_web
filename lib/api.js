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

export const getBanner = async () => {
  const data = fetchAPI(`
  {
    banner {
      banner_text,
      background_image {
        url
      },
      button_text,
      button_link
    }
  }
    `);
  return data;
};

export const getAbout = async () => {
  const data = fetchAPI(`
  {
    about {
      about_text,
      about_img {
        url
      },
      button_text,
      button_link
    }
  }
      `);
  return data;
};
