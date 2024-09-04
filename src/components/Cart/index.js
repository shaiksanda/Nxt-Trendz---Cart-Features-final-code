import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0

      const cartLength = cartList.length

      const getPrice = () => {
        const totalPrice = cartList.reduce(
          (accumulator, item) => accumulator + item.quantity * item.price,
          0,
        )

        return totalPrice
      }

      // TODO: Update the functionality to remove all the items in the cart

      const handleRemoveAllItems = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  onClick={handleRemoveAllItems}
                  type="button"
                  className="remove-all-button"
                >
                  Remove All
                </button>

                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
                <div style={{alignSelf: 'flex-end'}}>
                  <h1 className="total-amount">
                    Order Total :Rs
                    <span style={{color: 'green'}}> {getPrice()} </span> /-
                  </h1>
                  <p className="items-in-cart">{cartLength} Items In Cart</p>
                  <button type="button" className="checkout-button">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
