
export const baseUrl = "https://jsonplaceholder.typicode.com/users";

export const getUsers = (setUsers) => {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setUsers(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
