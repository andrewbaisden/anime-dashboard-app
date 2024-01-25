import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useFetchSWR(url) {
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
}
