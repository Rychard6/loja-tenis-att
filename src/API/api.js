import axios from "axios";

class API {
  url = "http://localhost:3001/";

  api = axios.create({
    baseURL: this.url,
  });

  async getProducts(type) {
    const products = await fetch(
      this.url + `product${type ? `?type=${type}` : ""}`
    ).then((res) => res.json());
    return products;
  }

  async getProduct(id) {
    const products = await fetch(this.url + `product/${id}`).then((res) =>
      res.json()
    );
    return products;
  }

  async createComment(user, text, profilePictureUrl, productId) {
    console.log(user, text, profilePictureUrl, productId);
    const comment = await this.api
      .post("review", { user, text, profilePictureUrl, productId })
      .then((res) => res.data)
      .catch((err) => console.log(err));

    console.log(comment);
    return comment;
  }
  
  // tentativa exclusão
  async deleteComment(user, text, profilePictureUrl, productId) {
    console.log(user, text, profilePictureUrl, productId);
    const comment = await this.api
      .delete("review", { user, text, profilePictureUrl, productId })
      .then((res) => res.data)
      .catch((err) => console.log(err));

    console.log(comment);
    return comment;
  }

  
}
export default new API();
