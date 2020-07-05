import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import Dishdetail from "./DishdetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    console.log("menu constructor");
    this.state = {
      selectedDish: null,
    };
  }
  componentDidMount() {
    console.log("componetDidMount created");
  }

  //method to invoke on click/select of any dish, i.e., change the selectedDish to current selected dish
  onDishSelect(dish) {
    console.log("dish selected");
    this.setState({
      selectedDish: dish,
    });
  }

  //render will return the view
  render() {
    //map the array element into a {{list}} of dishes
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
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
        <Dishdetail selectedDish={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu; //to use this component in other files
