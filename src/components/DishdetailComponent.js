import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {};
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg width="100%" top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle> {dish.name} </CardTitle>
          <CardText> {dish.description} </CardText>
        </CardBody>
      </Card>
    );
  }

  renderComment(dishComment) {
    if (dishComment == null) {
      return <div></div>;
    }
    const comment = dishComment.map((comments) => {
      return (
        <li key={comments.id}>
          <p className="row mt-2">{comments.comment}</p>
          <p className="row mt-3">
            --{comments.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comments.date))}
          </p>
        </li>
      );
    });
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{comment}</ul>
      </div>
    );
  }

  render() {
    if (this.props.selectedDish != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-3">
            {this.renderComment(this.props.selectedDish.comments)}
          </div>
        </div>
      );
    else return <div> </div>;
  }
}
export default Dishdetail;
