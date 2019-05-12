import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import PageTitle from "../PageTitle";
import NewsItem from "./NewsItem";

class News extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  renderNews = () => {
    const { events } = this.props;
    const { errorMessage } = this.props.errors;
    if (!errorMessage && events.length > 0) {
      return events.map(event => {
        return <NewsItem key={event.id} event={event} />;
      });
    } else if (!errorMessage && events.length === 0) {
      return (
        <div className="alert alert-secondary" role="alert">
          There is no events at the moment!
        </div>
      );
    } else {
      return (
        <div className="alert alert-warning" role="alert">
          <i
            style={{ fontSize: "2rem" }}
            className="fas fa-exclamation-triangle"
          />
          <br />
          {errorMessage}
        </div>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <PageTitle title="News" />
        <div className="card text-center bg-dark border-light mb-5">
          {this.renderNews()}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.externalApiReducer.events,
    errors: state.errorReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(News);
