import useSWR from 'swr';

const useFooter = () => {
  const query = `
  {
    footer {
      socialLinks {
        id
        iconName
        link
        label
      }
      note
      copyrightText
    }
  }
  `;
  return useSWR([query]);
};

export default useFooter;
