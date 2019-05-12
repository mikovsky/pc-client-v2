import React, { Component } from "react";

class NewsItem extends Component {
  renderRelatedCoins = () => {
    const relatedCoins = this.props.event.coins;
    return relatedCoins.map(coin => {
      return <p key={coin.id}>{coin.name}</p>;
    });
  };

  render() {
    const { event } = this.props;
    return (
      <React.Fragment>
        <div className="card-header bg-light text-dark" />
        <div className="card-body bg-dark">
          <h4 className="card-title">{event.title.en}</h4>
          <hr />
          <p>Related coins:</p>
          {this.renderRelatedCoins()}
          <hr />
          <p>Proof:</p>
          <img
            className="img-thumbnail rounded mx-auto d-block"
            alt="proof"
            src={event.proof}
          />
          <hr />
          <a
            href={event.source}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning"
          >
            Go to news
          </a>
        </div>
        <div className="card-footer text-muted">
          {new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit"
          }).format(Date.parse(event.date_event))}
        </div>
      </React.Fragment>
    );
  }
}

export default NewsItem;
