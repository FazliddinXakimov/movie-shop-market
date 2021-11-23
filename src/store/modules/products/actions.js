export default {
  async getProducts(context) {
    const response = await fetch(
      "https://movie-app-fd1b3-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
    );
    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok) {
      throw new Error("Failed Fetch Products" || responseData.error.message);
    }
    const result = [];
    for (let key in responseData) {
      result.push({
        id: key,
        name: responseData[key].name,
        genre: responseData[key].genre,
        price: responseData[key].price,
        year: responseData[key].year,
      });
      context.commit("getProducts", result);
    }
  },
  async handleDelete(context, payload) {
    await fetch(
      `https://movie-app-fd1b3-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${payload}.json`,
      {
        method: "DELETE",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      }
    );
    context.commit("handleDelete", payload);
  },
  async handleAdd(context, payload) {
    const response = await fetch(
      `https://movie-app-fd1b3-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json`,
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      }
    );
    const responseData = await response.json();
    context.commit("handleAdd", { id: responseData.name, ...payload });
  },

  handleSelectPage(context, payload) {
    context.commit("handleSelectPage", payload);
  },
};
