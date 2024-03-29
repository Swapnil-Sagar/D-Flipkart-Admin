const baseUrl =
  process.env.API || "https://d-flipkart-rest-server.herokuapp.com";
//const baseUrl = "http://localhost:2000";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};

// export const api = "http://localhost:2000/api/";
// export const generatePublicUrl = (fileName) => {
//   return `http://localhost:2000/public/${fileName}`;
// };
