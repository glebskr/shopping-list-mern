import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {connect} from "react-redux" 
import {getItems, deleteItem} from '../actions/itemActions'


interface IItem {
  _id: string;
  name: string;
}

type ItemType = IItem 

const ShoppingList: React.FC = ({item ,getItems, deleteItem} : any) => {
  // const [items, updateItems] = useState<ItemType[]>([]);

  useEffect(() => {
    getItems()
  }, [item ? item.length : null])

  const onDeleteClick = (id: string) => {
    console.log('asdadasd')
    deleteItem(id)
  }

  const items = item.items
  return (
    <Container>
      
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items ? items.map(({ _id, name } : IItem) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={()=> onDeleteClick(_id)}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          )) : null }
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);
