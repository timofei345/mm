import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../headerDashboard/Header";
import { CheckAuthUser } from "../../../../utils/checkAuthUser";
import Navbar from "../../../navbar/Navbar";
import Dashboardimage from "../../../../assets/dashboardimage.svg";
import { Link } from "react-router-dom";
import Sendmoney from "../../../../assets/sendmoney.png";
import Requestmoney from "../../../../assets/requestmoney.png";
import "./dashboard.scss";
import TransactionsCard from "../../../transactionsCard/TransactionsCard";
import useService from "../../../../services/requests";
import { useDispatch } from "react-redux";
import { removeJwtToken } from "../../../../store/actions/authActions";

function App() {
    const [transactions, setTransactions] = useState([]);
    const [headerDate, setHeaderDate] = useState({});
    const navigate = useNavigate();
    const { GET_ME } = useService();
    const dispatch = useDispatch();
    const validateToken = CheckAuthUser();
    useEffect(() => {
        const onboarding = localStorage.getItem("onboarding");
        if (validateToken === false) {
            navigate("/signin");
        }
        if (!onboarding) {
            navigate("/onboarding");
            console.log("yes");
        }
    });

    useEffect(() => {
        GET_ME()
            .then((res) => {
                setTransactions(res.transactions);
                setHeaderDate({ amount: res.balance, name: res.username });
            })
            .catch(() => {
                dispatch(removeJwtToken());
            });
    }, []);

    return (
        <>
            <Header date={headerDate} />
            <div className='dashboard'>
                <div className='dashboard_buttons'>
                    <Link className='sendmoney' to='/send'>
                        <img src={Sendmoney} alt='sendmoneyimg' />
                        Send money
                    </Link>
                    <Link className='requestmoney' to='/request'>
                        <img src={Requestmoney} alt='requestmoneyimg' />
                        Request money
                    </Link>
                </div>

                <div className='dashboard_body'>
                    <div className='dashboard_textq'>
                        <div className='dashboard_last_trasactions'>
                            <h3>Last transaction</h3>
                        </div>
                        <div className='viewall_button'>
                            <Link to='/transactions'>View All</Link>
                        </div>
                    </div>
                    {transactions.length > 0 ? (
                        transactions.map((item, index) => {
                            return (
                                <TransactionsCard
                                    key={index}
                                    name={item.userName}
                                    avatar={item.userAvatar}
                                    date={item.trDate}
                                    amount={item.amount}
                                    type={item.trType}
                                    trType={item.trType}
                                />
                            );
                        })
                    ) : (
                        <div className='dashboard_transactionsHistory'>
                            <img src={Dashboardimage} alt='Dashboardimage' />
                            <p>There´s no transactions till now!</p>
                        </div>
                    )}
                </div>
            </div>
            <Navbar active='Home' />
        </>
    );
}

export default App;
