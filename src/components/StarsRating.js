import StarRatings from './react-star-ratings';
import {Component} from "react";

class Foo extends Component {
    changeRating( newRating, name ) {
        this.setState({
            rating: newRating
        });
    }

    render() {
        return (
            <StarRatings
                rating={this.state.rating}
                starRatedColor="blue"
                changeRating={this.changeRating}
                numberOfStars={6}
                name='rating'
            />
        );
    }
}

class Bar extends Component {
    render() {
        return (
            <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="15px"
            />
        );
    }
}

