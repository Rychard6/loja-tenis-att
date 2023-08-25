class API{
    url = "http://localhost:3001/";

    async getProducts(type){
        const products = await fetch(this.url + `product${type?`?type=${type}`:""}`)
            .then(res => res.json())
        return products
    }

    async getProduct(id){
    const products = await fetch(this.url + `product/${id}`)
        .then(res => res.json())
    return products
    }
    
}
export default new API()
