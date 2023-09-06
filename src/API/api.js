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

    async createComment(user, text, profilePictureUrl, productId){
        
        const comment = await fetch(this.url + `review`, {
            method: 'POST',
            body: JSON.stringify({user, text, profilePictureUrl, productId}),
        }).then(res => res.json())

        return comment
    }
    
}
export default new API()
