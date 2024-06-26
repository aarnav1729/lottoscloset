import React from 'react';
import * as styles from './orders.module.css';

import AccountLayout from '../../components/AccountLayout/AccountLayout';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout/Layout';
import OrderItem from '../../components/OrderItem/OrderItem';
import { isAuth } from '../../helpers/general';
import { navigate } from 'gatsby';

const OrderPage = (props) => {
  if (isAuth() === false) {
    navigate('/login');
  }

  const sampleOrder1 = {
    id: '2',
    orderPlaced: 'June 7, 2024',
    lastUpdate: 'June 7, 2024',
    status: 'pending',
    items: [
      {
        image: '/products/shirt1.jpg',
        alt: 'order 1 product 1',
        name: 'Lambswool Crew Neck Jumper',
        quantity: '2',
        price: '100',
      },
      {
        image: '/products/shirt2.jpg',
        alt: 'order 1 product 2',
        name: 'Lambswool Crew Neck Jumper',
        quantity: '1',
        price: '300',
      },
    ],
    shippingAddress: {
      name: 'Ryan Martin',
      address: '1282 Concordia Ave',
      postal: '55104',
      state: 'Minnesota',
      country: 'United States of America',
    },
    billingAddress: {
      name: 'Ryan Martin',
      address: '1282 Concordia Ave',
      postal: '55104',
      state: 'Minnesota',
      country: 'United States of America',
    },
  };

  const sampleOrder2 = {
    id: '1',
    orderPlaced: 'June 7, 2024',
    lastUpdate: 'June 7, 2024',
    status: 'pending',
    items: [
      {
        image: '/products/shirt1.jpg',
        alt: 'order 1 product 1',
        name: 'Lambswool Crew Neck Jumper',
        quantity: '2',
        price: '100',
      },
    ],
    shippingAddress: {
      name: 'Aarnav Singh',
      address: 'Singhcottage House No. 7',
      postal: '50063',
      state: 'New York',
      country: 'United States of America',
    },
    billingAddress: {
      name: 'Aarnav Singh',
      address: 'Singhcottage House No. 7',
      postal: '50063',
      state: 'New York',
      country: 'United States of America',
    },
  };

  return (
    <Layout>
      <AccountLayout>
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Home' },
            { link: '/account', label: 'Account' },
            { link: '/account/orders/', label: 'Orders' },
          ]}
        />
        <h1>Orders</h1>
        <div className={`${styles.tableHeaderContainer} ${styles.gridStyle}`}>
          <span className={styles.tableHeader}>Order #</span>
          <span className={styles.tableHeader}>Order Placed</span>
          <span className={styles.tableHeader}>Last Update</span>
          <span className={styles.tableHeader}>Status</span>
        </div>

        <OrderItem order={sampleOrder1} headerStyling={styles.gridStyle} />
        <OrderItem order={sampleOrder2} headerStyling={styles.gridStyle} />
      </AccountLayout>
    </Layout>
  );
};

export default OrderPage;
