import axios from 'axios';

const fetchAutocompleteData = async (name) => {
  const { data } = await axios.get(
    'https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete',
    {
      params: { name },
    }
  );
  return data;
};

export default fetchAutocompleteData;
