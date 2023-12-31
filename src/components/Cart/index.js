// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Cart = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          className="cart-image"
          alt="cart"
        />
      </div>
    </>
  )
}

export default Cart
