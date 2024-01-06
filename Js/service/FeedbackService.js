class FeedbackPageService {
    static url = "http://localhost:3001/feedback";
    
    static async postFeedbackDetails(obj)
    {
        return await axios.post(this.url, obj);
    }


    
}
export default FeedbackPageService;