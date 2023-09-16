import React, { useState } from 'react'
import styles from './index.module.css'
import {GoTriangleDown, GoTriangleUp} from 'react-icons/go'

const TransactionList = ({transaction}) => {
    const [selected, setSelected] = useState(null)

    const toggle = (a) => {
        if(selected == a) {
            return setSelected(null)
        }
        setSelected(a)
    }

  return (
    <div className={styles['wrapper']}>
      {transaction.length == 0 ? 'No transaction history yet' :  <div className={styles['accordion']}>
        {transaction.map((trx, a) => {
            return(
                // eslint-disable-next-line react/jsx-key
                <div className={styles['item']}>
                    <div className={styles['title']} onClick={() => toggle(a)}>
                        <h2>{trx.no_order}</h2>
                        <span>{selected === a ? <GoTriangleUp /> : <GoTriangleDown />}</span>
                    </div>
                    <div className={selected === a ? styles['content show'] : styles['content']}>
                        {trx.products.map((pr) => {
                         return(
                            // eslint-disable-next-line react/jsx-key
                            <div>
                              <p>Item Name : {pr.product}</p>
                              <p>Quantity : {pr.quantity}</p>
                          </div>
                         )
                        })}
                        <div className={styles['pay']}>
                            <p>Total Price : {trx.total_price}</p>
                            <p>Paid Amount : {trx.paid_amount}</p>
                        </div>
                    </div>
                </div>
            )
        })}
         </div>}
       
    </div>
  )
}

export default TransactionList