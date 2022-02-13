import './bodySibar.css'
import Chart from './Chart/Chart'
import Customer from './Customer/Customer'
import DailyVisits from './DailyVisits/DailyVisits'
import Income from './Income/Income'
import LatestOrders from './LatestOrders/LatestOrders'
import TotalOrder from './TotalOrder/TotalOrder'
import TotalSale from './TotalSale/TotalSale'
export default function BodySibar() {
    return (
        <div className="bodySibar">
            <Chart />
            <Customer />
            <DailyVisits />
            <Income />
            <LatestOrders />
            <TotalOrder />
            <TotalSale />
        </div>
    )
}