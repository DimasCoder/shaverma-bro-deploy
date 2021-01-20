import React, {Component} from 'react';
import ReviewForm from "../components/reviews/ReviewForm";
import PageTitle from "../components/PageTitle";

class ReviewFormPage extends Component {


    render() {
        return (
            <>
                <PageTitle title={"Залишити відгук"} />
                <ReviewForm/>
            </>
        );
    }
}
export default ReviewFormPage;