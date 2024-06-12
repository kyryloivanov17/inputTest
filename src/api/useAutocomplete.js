import { useQuery } from 'react-query';
import fetchAutocompleteData from './api';

const useAutocomplete = (name) => {
  return useQuery(['autocomplete', name], () => fetchAutocompleteData(name), {
    enabled: !!name,
    retry: false,
    onError: (error) => {
      console.error('Failed to fetch autocomplete suggestions:', error);
    },
  });
};

export default useAutocomplete;
