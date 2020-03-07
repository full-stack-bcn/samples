import fetch from "node-fetch";

const URL = path => `http://localhost:3000${path}`;

const get = async (url, cookie) => {
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cookie
    }
  });
  let status = response.status;
  let json = await response.json();
  return { json, status };
};

const post = async (url, payload, cookie) => {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      cookie
    }
  });
  const setCookie = response.headers.get("set-cookie");
  let cookieData;
  if (setCookie) {
    cookieData = setCookie.split(";")[0];
  }
  let status = response.status;
  let json = await response.json();
  return { json, cookie: cookieData, status };
};

(async () => {
  const credentials = {
    // name: "pauek",
    email: "pauek@example.com",
    password: "Qwerty123"
    // passwordConfirmation: "Qwerty123"
  };
  console.log(credentials.email);

  let { json: json1, status: status1, cookie } = await post(URL("/login"), credentials);
  console.log(`[${status1}]: ${json1.message} (cookie = ${cookie})`);

  let { json: json2, status: status2 } = await get(URL("/home"), cookie);
  console.log(`[${status2}]: ${JSON.stringify(json2)}`);
})();
