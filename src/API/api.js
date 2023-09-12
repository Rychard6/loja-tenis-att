import axios from "axios";

class API {
  url = process.env.REACT_APP_API_BASE_URL;

  api = axios.create({
    baseURL: this.url,
  });

  async getProducts(type) {
    const products = await this.api
      .get("product", { params: { type } })
      .then((res) => res.data)
      .catch((e) => console.log(e));

    return products;
  }

  async getProduct(id) {
    const products = await this.api
      .get(`product/${id}`)
      .then((res) => res.data);
    return products;
  }

  async createComment(user, text, profilePictureUrl, productId) {
    const comment = await this.api
      .post("review", { user, text, profilePictureUrl, productId })
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return comment
  }

  async deleteComment(id) {
    const comment = await this.api
      .delete(`review/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return comment;
  }
}
export default new API();
