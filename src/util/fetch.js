import { ipv4Exp, ipv6Exp, domainExp } from "./regex";

export const fetchData = async (search) => {
  let response = {};
  if (ipv4Exp.test(search) || ipv6Exp.test(search)) {
    response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_GEO_KEY}&ipAddress=${search}`
    );
  } else if (domainExp.test(search)) {
    response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_GEO_KEY}&ipAddress=&domain=${search}`
    );
  } else {
    return;
  }
  return await response.json();
};
