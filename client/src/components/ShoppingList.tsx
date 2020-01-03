import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {connect} from "react-redux" 
import {getItems, deleteItem} from '../actions/itemActions'


interface IItem {
  _id: string;
  name: string;
}



const ShoppingList: React.FC = ({item ,getItems, deleteItem, isAuth} : any) => {
  // const [items, updateItems] = useState<ItemType[]>([]);

  const [rerender, setRerender] = useState(false)
  
  useEffect(() => {
    console.log(item.items.length)
    getItems()
  }, [])
    
 

  const onDeleteClick = (id: string) => {
    console.log('asdadasd')
    deleteItem(id)
  }

  const items = item.items
  
  return (
    <Container>
      
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {Array.isArray(items) ? items.map(({ _id, name } : IItem) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
               {isAuth ?  <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={()=> onDeleteClick(_id)}
                >
                  &times;
                </Button> : null}
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
  item: state.item,
  isAuth: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);
