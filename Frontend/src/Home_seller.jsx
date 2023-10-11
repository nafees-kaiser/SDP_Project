import React,{ useState,useEffect } from "react";
import { Line, Pie } from 'react-chartjs-2';
import axios from 'axios';
import ProfileBox from "./ProfileBox.jsx";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    PointElement,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import Style from './Home_seller.module.css';
import Navbar from "./Components/Navbar_seller";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Tooltip,
    Legend
)
const Home_seller = ()=>{
    const [auth,setAuth]= useState(false);
    const [salesDatatable, setSalesData] = useState([]);
    const [salesData] = useState([
        { no: 1, customerName: 'Customer 1', productName: 'Product A', quantity: 5, price: 10 },
        { no: 2, customerName: 'Customer 2', productName: 'Product B', quantity: 3, price: 15 },
        { no: 3, customerName: 'Customer 2', productName: 'Product B', quantity: 3, price: 15 },
        { no: 4, customerName: 'Customer 2', productName: 'Product B', quantity: 3, price: 15 },
    ]);
    const openmodel = ()=>{
        setAuth(true);
    }
    const closemodel = ()=>{
        setAuth(false);
    }

    useEffect(() => {
        const id = sessionStorage.getItem("seller_id");
        console.log(id);
        axios.get(`http://localhost:3000/order_seller/${id}`)
          .then((response) => {
            console.log(response.data);
            const mappedData = response.data.map((order, index) => ({
                no: index + 1,
                customerName: order.Buyer.name,
                productName: order.productName,
                quantity: order.quantity,
                price: order.price,
              }));
            setSalesData(mappedData);
            console.log("Hook :"+salesDatatable);
          })
          .catch((error) => {
            console.error("Error while fetching data:", error);
          });
      }, []);
    
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May','June','July','August','September','October','November','December'],
        datasets: [
          {
            data: [12, 19, 3, 5, 2,24,14,34,45,6,26,34],
            backgroundColor: 'transparent',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 4,
            tension: 0.5
          }]
    };
    const options = {
        Plugin:{
            legend: true,
            position: "bottom"
        },
        title: {
            text: "Comparison by month",
            display: true,
            fontSize: 10
        }

    }
    const pieChartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                data: [12, 19, 3, 5, 2],
                backgroundColor: ['#eb9360', '#d9bb6a', '#b359eb', '#e866c1', '#66e87e'],
                borderWidth: 1
            }
        ]
    };
    

    return (
        <>
            <Navbar openmodel={openmodel}/>
            { auth && <ProfileBox closemodel={closemodel}/> }
            <div className={Style.line}></div>
            <div className={Style.header}>
                <div className={Style.left}>
                    <div className={Style.box}>
                        <div className={Style.first}>
                            <p>Total Customers</p>
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <p>5648</p>
                        <div className={Style.first}>
                            <p>+23%</p>
                            <p>Since last month</p>
                        </div>
                    </div>
                    
                    <div className={Style.box}>
                        <div className={Style.first}>
                            <p>Sales Today</p>
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <p>7916</p>
                        <div className={Style.first}>
                            <p>+21%</p>
                            <p>Since last month</p>
                        </div>
                    </div>

                    <div className={Style.box}>
                        <div className={Style.first}>
                            <p>Monthly Sales</p>
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <p>59525</p>
                        <div className={Style.first}>
                            <p>+5%</p>
                            <p>Since last month</p>
                        </div>
                    </div>

                    <div className={Style.box}>
                        <div className={Style.first}>
                            <p>Yearly Sales</p>
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <p>65152</p>
                        <div className={Style.first}>
                            <p>+43%</p>
                            <p>Since last month</p>
                        </div>
                    </div>
                    
                </div>
                <div className={Style.right}>
                    <Line data={data} options={options} className={Style.graph}></Line>

                </div>
            </div>
            <div className={Style.line}></div>
            <div className={Style.middle}>
                <div className={Style.left}>
                    <p>Top Tranding Product</p>
                    <div className={Style.inner}>
                        <Card
                            image={'./images/262766466_414622610232846_4583703495738761399_n.jpg'}
                            review={'cdfhfhf'}
                            productName={'bfhjbjc'}
                            location={'ffbhffh'}
                            price={'jhcjbhdcbj'}
                        />
                        <Card
                            image={'./images/262766466_414622610232846_4583703495738761399_n.jpg'}
                            review={'cdfhfhf'}
                            productName={'bfhjbjc'}
                            location={'ffbhffh'}
                            price={'jhcjbhdcbj'}
                        />
                        <Card
                            image={'./images/262766466_414622610232846_4583703495738761399_n.jpg'}
                            review={'cdfhfhf'}
                            productName={'bfhjbjc'}
                            location={'ffbhffh'}
                            price={'jhcjbhdcbj'}
                        />
                    </div>
                </div>
                <div className={Style.right}>
                    <Pie
                        data ={pieChartData}
                        options={options}
                    >
                    </Pie>
                </div>
            </div>
            <div className={Style.line}></div>
            <div className={Style.customer}>
                <div className={Style.orders}>
                    <p>latest orders</p>
                    <div className={Style.table}>

                        <table>
                            <thead>
                                <tr>
                                <th>No</th>
                                <th>Customer Name</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {salesDatatable.map((sale) => (
                                <tr key={sale.no}>
                                    <td>{sale.no}</td>
                                    <td>{sale.customerName}</td>
                                    <td>{sale.productName}</td>
                                    <td>{sale.quantity}</td>
                                    <td>{sale.price}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className={Style.topcustomer}>
                    <p>Top Customers</p>
                    <div className={Style.table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Customer Name</th>
                                    <th>No. of Order</th>
                                </tr>
                            </thead>
                            <tbody>
                            {salesData.map((sale, index) => (
                                <tr key={index}>
                                    <td>{sale.no}</td>
                                    <td>{sale.customerName}</td>
                                    <td>{sale.quantity}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Home_seller;