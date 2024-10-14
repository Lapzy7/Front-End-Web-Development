// 4. Axios
export async function ambilDataUserAxios() {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    const users = response.data;
    users.data.forEach(function (user) {
      console.log(
        "First Name: " + user.first_name + ", Last Name: " + user.last_name
      );
    });
  } catch (error) {
    console.log(error);
  }
}
