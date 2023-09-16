import React, { useEffect, useState } from "react";
import Layout from "@/components/layouts/Layout";
import api from "@/components/api";
import TransactionList from "@/components/elements/TransactionList/TransactionList";

export default function Transaction() {
  const [transaction, setTransactions] = useState([])

  const fetchTransactions = async() => {
    const response = await api.get('/transactions')
    const data = await response.data.payload.transactions
    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <Layout>
    <p>Transaction History</p>
    <TransactionList transaction={transaction} />
    </Layout>
  )
}
