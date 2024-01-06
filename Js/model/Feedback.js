class Feedback{
    // getter and Setter
    set userName(n){
        this._userName = n;
    }
    set userEmail(n){
        this._userEmail = n;
    }
    set rating(n){
        this._rating = n;
    }
    set userFeedback(n){
        this._userFeedback = n;
    }
    set recommendation(n){
        this._recommendation = n;
    }


    // -------------------------
    get userName(){
        return this._userName;
    }
    get userEmail(){
        return this._userEmail;
    }
    get rating(){
        return this._rating;
    }
    get userFeedback(){
        return this._userFeedback;
    }
    get recommendation(){
        return this._recommendation;
    }


}

export default Feedback;