import { useState, useEffect } from 'react';

function useApi(opts) {
  const [data, setData] = useState(opts.initialData);
  const [loading, setLoading] = useState(false);

  async function doFetch() {
    setLoading(true);

    const response = await fetch(opts.url);
    const json = await response.json();

    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    doFetch();
  }, []);

  return [data, loading];
}

export default useApi;
