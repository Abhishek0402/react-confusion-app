import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Col,
  Row
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
      }
     
      
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen,
        });
      }
    
      handleComment(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
        // event.preventDefault();
      }

    render(){
      return(
          <div>
   <Button outline onClick={this.toggleModal} className="bg-secondary text-white">
        <span className="fa fa-pencil fa-lg"></span> Submit Comment
      </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
           <LocalForm onSubmit={(values) => this.handleComment(values)}>
              <Row className="form-group">
            <Col>
                <Label htmlFor="yourname">
                  Your Name
                </Label>
                  <Control.text
                    model=".yourname"
                    id="yourname"
                    name="yourname"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".yourname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "must be greater than 2 characters",
                      maxLength: "Must be 15 character or less",
                    }}
                  />
           </Col>
              </Row>
          
              <Row className="form-group">
                  <Col>             
                   <Label htmlFor="rating">
                  Rating
                </Label>
           
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>

                  </Control.select>
                  </Col>

              </Row>
              <Row className="form-group">
                
                <Col>
                <Label htmlFor="message">
                  Comment
                </Label>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    rows="6"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10}}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
        </ModalBody>
      </Modal>
      </div>
      );
    }
    }

    export default CommentForm;