import FeedbackPageService from "../service/FeedbackService.js";
import Feedback from "../model/Feedback.js";

$(document).ready(function () {

    $('#feeback_submit_btn').click(function () { 

        let user_name = $('#name').val();
        let user_email = $('#email').val();
        let rating_holder = document.getElementsByName("rating");
        let rating;
        for (let i = 0; i < rating_holder.length; i++) {
            if(rating_holder[i].checked){
                rating = rating_holder[i].value;
                break;
            }
        }

        let user_feedback = $('#feedback').val();
        let recommend_holder = document.getElementsByName("recommendation");
        let recommendation;
        if(recommend_holder[0].checked){
            recommendation = 'yes';
        }else if(recommend_holder[1].checked){
            recommendation = 'No';
        }

        let feed = new Feedback();
        feed.userName = user_name;
        feed.userEmail = user_email;
        feed.rating = rating;
        feed.userFeedback = user_feedback;
        feed.recommendation = recommendation;

        // console.log(feed);

        FeedbackPageService.postFeedbackDetails(feed)
            .then((response)=>{
                window.location.href = "../../HTML/index.html";
            })
            .catch((error)=>{
                console.log(error);

            })
        
        
    });
});
