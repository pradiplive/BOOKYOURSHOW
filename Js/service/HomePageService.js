class HomePageService {
    static url = "http://localhost:3000/movies";

    // static async addHomeDetails(obj) {
    //     // Post api to insert record
    //     return await axios.post(this.url, obj);
    // }

    static async getHomeDetails()
    {
        // to fetch the data from url -- get url
        return await axios.get(this.url);
    }

    // static async deleteHome(id)
    // {
    //     return await axios.delete(`${this.url}/${id}`);
    // }

    // static async editHome(id){
    //     return await axios.get(`${this.url}/${id}`);
    // }
    // static async updateHome(obj,id){
    //     return await axios.put(`${this.url}/${id}`, obj);
    // }
    
}
export default HomePageService;