import axios from "axios";

const BuildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server
    // baseURL: "http://www.ticketing-microservice-app.xyz",
    // baseURL:
    //     "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",

    return axios.create({
      baseURL: "http://www.ticketing-microservice-app.xyz",
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
