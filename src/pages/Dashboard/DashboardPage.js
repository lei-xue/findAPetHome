import { useEffect, useState } from 'react';
import { DashboardCard } from './components/DashboardCard';
import { DashboardEmpty } from './components/DashboardEmpty';
import { getUserOrders } from '../../services';
import { useTitle } from '../../hooks/useTitle';
import { ErrorCard } from '../../components';
export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrders();
        setOrders(data);
        setError(false);
      } catch (err) {
        setError(true);
      }
    }
    fetchOrders();
  }, [])
  useTitle('Dashboard');

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
      {error ? <ErrorCard /> :
        <>
          <section className="text-center">
            {orders.length && orders.map((order) => (
              <DashboardCard key={order.id} order={order} />
            ))}
          </section>
          <section>
            {!orders.length && <DashboardEmpty />}
          </section>
        </>}
    </main>
  )
}