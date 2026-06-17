import { useState, useEffect, useCallback } from 'react';


interface UseFetchDataOptions {
  page: number;
  limit: number;
  search: string;
}

export function useFetchData<T>(url: string, options: UseFetchDataOptions) {
  const [data, setData] = useState<T[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams({
        _page: options.page.toString(),
        _limit: options.limit.toString(),
      });

      if (options.search) {
        queryParams.append('q', options.search);
      }

      const response = await fetch(`${url}?${queryParams.toString()}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const total = response.headers.get('x-total-count');
      const result = await response.json();

      setData(result);
      setTotalCount(total ? parseInt(total, 10) : 0);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [url, options.page, options.limit, options.search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300); // debounce fetching slightly when search changes

    return () => clearTimeout(timer);
  }, [fetchData]);

  return { data, totalCount, loading, error, refetch: fetchData };
}
