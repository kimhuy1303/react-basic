import React from "react";

class YoutubeItems extends React.Component {
  render() {
    return (
      <div className="youtube-item">
        <div className="youtube-image">
          <img alt="#" src={this.props.image} />
        </div>
        <div className="youtube-footer">
          <img className="youtube-avatar" alt="#" src={this.props.avatar} />
          <div className="youtube-info">
            <div className="youtube-title">
              {this.props.title || "This is a example of title"}{" "}
            </div>
            <div className="youtube-author">
              {this.props.author || "This is a example of author"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YoutubeItems;
