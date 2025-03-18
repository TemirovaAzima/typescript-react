import {useEffect, useState} from "react";
export type UseFetchReturnType={
    name: string,
}
export function useFetch(url:string) {
    const [data, setData] = useState<UseFetchReturnType[]|null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                if (result && result.length) {
                    setData(data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            })
    }, [url]);

    return {data, loading, error};
}