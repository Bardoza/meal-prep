const globalOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

const http = async (url, options = {}) => {
  const response = await fetch(`api/${url}`, {
    ...globalOptions,
    ...options,
  });
  if (response.ok) {
    return response.json();
  }
  const jsonError = await response.json();
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

export const deleteRequest = (url, payload) => {
  const options = {
    method: "delete",
    body: JSON.stringify(payload),
  };
  return http(url, options);
};
