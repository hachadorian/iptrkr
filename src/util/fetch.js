import { ipv4Exp, ipv6Exp, domainExp } from "./regex";

export const fetchData = async (search) => {
  let response = {};
  if (ipv4Exp.test(search) || ipv6Exp.test(search)) {
    response = await fetch(`${process.env.REACT_APP_API_URL}/ip`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "IP-Address": search,
      },
    });
  } else if (domainExp.test(search)) {
    response = await fetch(`${process.env.REACT_APP_API_URL}/domain`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Domain-Name": search,
      },
    });
  } else {
    return;
  }
  return await response.json();
};
