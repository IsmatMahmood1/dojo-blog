import { useState, useEffect } from "react";

export function useFetch (url) {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
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
                setIsPending(false);
                setError(error.message);
            })
        }, [url])

        return { data, isPending, error }

}