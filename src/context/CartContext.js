import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext() 

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ( {children} ) => {
  const [cart, setCart] = useState(init)

    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }
  
  
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }
     
  
    const totalCantidad = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
  
      
    const totalCompra = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
      }


    const vaciarCarrito = () => {
        setCart([])
    }

    const eliminarDelCarrito = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])


    return (
        <CartContext.Provider value={{
            cart, 
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            totalCompra,
            vaciarCarrito,
            eliminarDelCarrito

          }}>
            {children}

        </CartContext.Provider>
    )
}