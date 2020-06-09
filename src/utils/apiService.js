const globalOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

const http = async (url, options = {}) => {
  const response = await fetch(url, {
    ...globalOptions,
    ...options,
  });
  if (response.ok) {
    return response.json();
  }
  const jsonError = await response.json();
  console.log(jsonError);
  throw new Error(jsonError.body);
};

export const get = (url) => http(url);

export const post = (url, payload) => {
  const options = {
    method: "post",
    body: JSON.stringify(payload),
  };
  return http(url, options);
};
