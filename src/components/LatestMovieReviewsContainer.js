import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
+ `api-key=${NYT_API_KEY}`;

<<<<<<< HEAD
class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(reviews => this.setState({ reviews }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
      <h2>Latest Movie Reviews:</h2>
      <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}


export default LatestMovieReviewsContainer;
=======
            const Movie = ({ title, img_url }) => (
              <div className="movie">
                <img src={ img_url } />
                <h3>{ title }</h3>
              </div>
            )


            const LatestReviews = ({ reviews }) => (
              <div className="latest-movie-reviews">
                { reviews.map(review => <Review title={review.title} img_url={review.image_url} />) }
              </div>
            )

            class LatestMovieReviewsContainer extends React.Component {
              constructor() {
                super()

                this.state = {
                  reviews: []
                };
              }

              componentDidMount() {
                fetch('URL')
                  .then(response => response.json())
                  .then(books => this.setState({ reviews }))
              }

              render() {
                return <LatestMovieReviews reviews={this.state.reviews} />
              }
            }
>>>>>>> 6fde9d9ada3f4052b436a0e15899cca019ecaea6
