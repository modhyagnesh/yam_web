import useSWR from 'swr';

import fetch from '@lib/fetch';

function useHomePage() {
  const API = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/home-page`;
  return useSWR(API, fetch);
}

export default useHomePage;
