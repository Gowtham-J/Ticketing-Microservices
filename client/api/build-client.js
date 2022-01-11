import axios from "axios";

const BuildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server
<<<<<<< HEAD
    // baseURL:
    //     "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
    // baseURL: "http://www.ticketing-microservice-app.xyz",

    return axios.create({
      baseURL: "http://www.ticketing-microservice-app.xyz",
=======
    // baseURL: "http://ticketing-microservice-app.xyz",
    // baseURL:
    //     "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",

    return axios.create({
      baseURL: "http://ticketing-microservice-app.xyz",
>>>>>>> 6b795b306db0cc10cafd9bf1e06283cf4b3f5063
      headers: req.headers,
      withCredentials: true,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: "/",
    });
  }
};

export default BuildClient;
