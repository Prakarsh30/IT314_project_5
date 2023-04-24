import React from "react";
import { ReactDOM } from "react";

import "./likebutton.css";

class LikeButton extends React.Component {
  state = {
    like: false,
    dislike: false,
    position: { x: 0, y: 0 },
  };

  ocean = React.createRef();
  lemons = React.createRef();

  /*============== Like/Dislike ====================*/
  handleClickLike() {
    const dislike = this.state.like == this.state.dislike ? false : "";
    this.setState({
      like: !this.state.like,
      dislike,
    });
  }
  handleClickDislike() {
    const like = this.state.dislike == this.state.like ? false : "";
    this.setState({
      dislike: !this.state.dislike,
      like,
    });
  }
  /*================ Parallax =================*/
  onMouseMove(e) {
    this.setState({
      position: {
        x: e.pageX,
        y: e.pageY,
      },
    });
    this.Parallax();
  }

  Parallax() {
    const [moveX, moveY] = [
      this.state.position.x / -100,
      this.state.position.y / -120,
    ];
    const [ocean, lemons] = [this.ocean.current, this.lemons.current];
    ocean.style.transform = `translate3d(${moveX / 0.5}px, ${moveY}px, 0)`;
    lemons.style.transform = `translate3d(${moveX / 0.2}px, ${moveY}px, 0)`;
  }

  render() {
    return (
      <div>
        <button
          id="like"
          onClick={() => this.handleClickLike()}
          className={this.state.like ? "active" : "not-active"}
        >
          <i className="fa fa-thumbs-up"></i>
          {this.state.like ? this.props.like + 1 : this.props.like}
        </button>
        <button
          id="dislike"
          onClick={() => this.handleClickDislike()}
          className={this.state.dislike ? "active" : "not-active"}
        >
          <i className="fa fa-thumbs-down"></i>

          {this.state.dislike ? this.props.dislike + 1 : this.props.dislike}
        </button>
      </div>
    );
  }
}

// ReactDOM.render(<LikeButton />, document.getElementById("root"));
export default LikeButton;
