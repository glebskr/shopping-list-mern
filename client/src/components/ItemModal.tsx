import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import uuid from "uuid";

import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

const ItemModal = ({addItem }:any) => {
  const [modal, changeModal] = useState(false);
  const [name, changeName] = useState("");

  const toggle = (): void => {
    changeModal(!modal);
  };
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value)
  }

  const onSubmit = (e:  React.FormEvent<HTMLFormElement> ) => {
      e.preventDefault();

      const newItem = {
        name
      }

      addItem(newItem)

      toggle()
  }
    
  return (
    <div>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        Add Item
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> Add To Shopping List</ModalHeader>
        <ModalBody>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for='item'>Item</Label>
                    <Input type="text" name="name" id="item" placeholder="Add Shopping Item"  onChange={onChange}/>
                    <Button color='dark' style={{marginTop: '2rem'}} block type="submit"> Add item</Button>
                </FormGroup>
            </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};


const mapStateToProps = (state : any) => {
    return {
        items: state.items,
    }
}

export default connect(mapStateToProps, {addItem})(ItemModal);
