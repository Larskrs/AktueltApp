import { useState, useEffect } from "react";
import axios from "axios";
import {WOOCOMMERCE_CONSUMER_KEY, WOOCOMMERCE_CONSUMER_SECRET} from '@env'

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const urlParams = new URLSearchParams(query).toString();
  const options = {
    method: "GET",
    url: `http://aktuelt.tv/api/v1/${endpoint}&page=${page}`,
    headers: {

    },
    params: {},
  };

  const fetchData = async (refetch) => {
    setIsLoading(true);

    try {
      
      if (refetch) { 
        setPage(1)
        const response = await axios.request(options);
        setData(response.data.data);
      } else {
        const response = await axios.request(options);
        console.log(data.length)
        setData(...data, response.data.data)
        console.log(data.length)
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.error(options.url)
      console.error(error)
      console.log({response})
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(true);
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData(true);
  };
  const loadMore = () => {
    setPage(page + 1)
    fetchData(false)
    console.log(data.length)
  }

  return { data, isLoading, error, refetch, loadMore };
};

export default useFetch;