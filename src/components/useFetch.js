import { useState, useEffect } from "react";

export function useFetch (url) {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal:abortCont.signal})
            .then(response => {
                if (!response.ok) {
                    throw Error('could not fetch data')
                }
                return response.json();
            })
            .then((data) => {
                setIsPending(false);
                setData(data);
                setError(null);
            })
            .catch(error => {
                if (error.name === 'AbortError'){
                    console.log('fetch abort error')
                }
                setIsPending(false);
                setError(error.message);
            })
            return () => abortCont.abort();
        }, [url])

        return { data, isPending, error }

}