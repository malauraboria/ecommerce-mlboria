import Item from '../Item/Item'

const ItemList = ({productas }) => {
    return(
        <div className='ListGroup'>
            {productas.map(prod => <Item key={prod.id} {...prod} />)}
        </div>

    )
}

export default ItemList