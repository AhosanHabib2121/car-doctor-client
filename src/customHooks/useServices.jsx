import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useServices = (asc) => {
    const [services, setServices] = useState([]);
  const axiosSecure = useAxiosSecure();

    useEffect(() => {
      // fetch(`http://localhost:5000/services?sort=${asc?'asc':'desc'}`)
      //   .then((res) => res.json())
      //   .then((data) => setServices(data));
      
      axiosSecure(`/services?sort=${asc ? 'asc' : 'desc'}`)
      .then(res => setServices(res.data))
      
    }, [asc, axiosSecure]);

    return services;
};

export default useServices;