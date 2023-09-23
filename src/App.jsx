import { useEffect, useState } from 'react'
import './App.css'
import Auth from './components/auth/Auth'
import Layout from './components/layout/Layout'
import Register from './components/auth/Register'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { auth } from './config/firebase'
import useAxiosFetch from './hooks/useAxiosFetch'

function App() {

  const useAuthState = () => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true)
      const unsubscribe = auth.onAuthStateChanged((currentUser) => {
        setUser(currentUser)
        setIsLoading(false)
      })

      return () => unsubscribe()
    }, [])

    return {
      user,
      isLoading
    }
  }

  const {user, isLoading} = useAuthState()

  const cart = useSelector((state) => state.additionToCart)

  const sendCartData = (cartItems) => {
      const sendRequest = async () => {
          await fetch('https://cart-database-e297e-default-rtdb.firebaseio.com/cartItems.json', {
              method: 'PUT',
              body: JSON.stringify(cartItems)
          })
      }
      try {
          sendRequest()
      } catch (err) {
          console.error(err)
      }
  }

  useEffect(() => {
      sendCartData(cart)
  }, [cart])


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path='/app'
            element={ !isLoading && user && <Layout /> }
          />
          <Route 
            path='/'
            element={<Auth />}
          />
          <Route 
            path='/register'
            element={<Register />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
