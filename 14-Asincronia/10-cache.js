async function GetTodos() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
GetTodos();

