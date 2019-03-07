import { useState } from 'react';
import qs from 'querystring';

function useForm(opts) {
  const [body, setBody] = useState(opts.initialBody);
  const [responseBody, setResponseBody] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(opts.url + '?' + qs.stringify(body), {
      method: opts.method || 'POST'
    });

    const json = await response.json();

    setResponseBody(json);
    setLoading(false);

    if (typeof opts.onSuccess === 'function') {
      opts.onSuccess(json);
    }
  }

  return { body, setBody, submit, loading, responseBody };
}

export default useForm;
