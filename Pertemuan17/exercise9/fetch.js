// 2. Fetch
export function ambilDataUserFetch() {
  fetch("https://reqres.in/api/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      users.data.forEach(function (user) {
        console.log(
          "First Name: " + user.first_name + ", Last Name: " + user.last_name
        );
      });
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
}
