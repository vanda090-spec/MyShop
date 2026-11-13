import { act, use, useState } from "react";
import { useContext, createContext, Children } from "react";
import axios from "axios";


export const ShopContext = createContext();

export function ShopProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const [activeFilter, setActiveFilter] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const api = axios.create({ baseURL: 'https://dummyjson.com/products' })

    const getProducts = () => {
        setLoading(true)
        setError("")

        axios.get('https://dummyjson.com/products/', {
            params:
                { limit: 10 }
        })
            .then(products => {
                console.log(products.data)
                setActiveFilter("")
                setCurrentPage(1)
                setProducts(products.data.products)
                setTotalProducts(products.data.total)
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
                setLoading(false)
            })
    }

    const getCurrentPage = (page) => {
        setLoading(true)
         setError("")

        let url = 'https://dummyjson.com/products/'

        if (activeFilter !== "") {
            url = `https://dummyjson.com/products/category/${activeFilter}`
        }

        axios.get(url, {
            params: {
                limit: 10,
                skip: (page - 1) * 10
            }
        })
            .then(response => {
                console.log(response.data)
                setCurrentPage(page)
                setProducts(response.data.products)
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
                setLoading(false)
            })
    }

    const getProductByCategory = (category) => {
        setLoading(true)
        setError("")

        axios.get(`https://dummyjson.com/products/category/${category}`,{params:{limit:10}})
            .then(response => {
                console.log(response.data)
                setActiveFilter(category)
                setCurrentPage(1)
                setTotalProducts(response.data.total)
                setProducts(response.data.products)
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
                setLoading(false)

            })
    }
    return (
        <ShopContext.Provider value={{ api, products, currentPage, totalProducts, activeFilter, loading, error, getProducts, getCurrentPage, getProductByCategory }}>
            {children}
        </ShopContext.Provider>
    )
}
export function useShop() { return useContext(ShopContext) }