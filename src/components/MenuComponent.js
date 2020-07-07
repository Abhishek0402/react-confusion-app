import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    console.log("menu constructor");
  }
  componentDidMount() {
    console.log("componetDidMount created");
  }

  //render will return the view
  render() {
    //map the array element into a {{list}} of dishes
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={()=> this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle> {dish.name} </CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row"> {menu} </div>
      </div>
    );
  }
}

export default Menu; //to use this component in other files
