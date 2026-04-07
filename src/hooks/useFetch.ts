import { useState,useEffect } from "react";

interface FetchState<T>{
    data:T | null;
    loading:boolean;
    error:string | null;
}

export function useFetch<T>(url:string):FetchState<T>{
    const [data ,setData] = useState<T | null>(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
    let isMounted =true;

     async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");

        const json = (await res.json()) as T;

        if (isMounted) {
          setData(json);
        }
      } catch (err) {
        if (isMounted) {
          setError((err as Error).message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return {data,loading,error};

}