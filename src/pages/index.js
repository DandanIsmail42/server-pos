import api from "@/components/api";
import ProductList from "@/components/elements/ProductList/ProductList";
import Cart from "@/components/elements/cart/Cart";
import Layout from "@/components/layouts/Layout";
import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [products, setProducts] = useState([])

  const fetchProduct = async() => {
    const response = await api.get('/products')
    const data = await response.data.payload
    setProducts(data)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
   <Layout>
    <p>Home Page</p>
    <div className={styles.home}>
    <ProductList products={products}/>
    <Cart />
    </div>
    </Layout>
  )
}
