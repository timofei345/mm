import React, { useEffect, useState } from "react";
import HeaderPrivate from "../../../headerPrivate/Headerprivate";
import "./transactions.scss";
import Searchimg from "../../../../assets/searchimg.svg";
import Navbar from "../../../navbar/Navbar";
import TransactionsCard from "../../../transactionsCard/TransactionsCard";
import useService from "../../../../services/requests";

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [transactionType, setTransactionType] = useState("incomes");
    const { GET_ME } = useService();

    useEffect(() => {
        GET_ME().then((res) => {
            setTransactions(res.transactions);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setTransactions]);

    const sortedTransactions = [...transactions].sort((a, b) => {
        const dateA = new Date(
            a.trDate.split(" ")[0].split(".").reverse().join("-")
        );
        const dateB = new Date(
            b.trDate.split(" ")[0].split(".").reverse().join("-")
        );

        return dateB - dateA;
    });
    const filteredTransactions = sortedTransactions.filter((item) => {
        return transactionType === "incomes"
            ? item.trType === "out"
            : item.trType === "in";
    });

    const transactionsByMonth = filteredTransactions.reduce(
        (acc, transaction) => {
            const monthYear = transaction.trDate
                .split(" ")[0]
                .split(".")
                .slice(1)
                .join("-");
            acc[monthYear] = acc[monthYear] || [];
            acc[monthYear].push(transaction);
            return acc;
        },
        {}
    );
    const sortedMonths = Object.keys(transactionsByMonth).sort((a, b) => {
        const dateA = new Date(a.split("-")[1], a.split("-")[0] - 1);
        const dateB = new Date(b.split("-")[1], b.split("-")[0] - 1);
        return dateB - dateA;
    });
    return (
        <section className='body_container'>
            <HeaderPrivate title={"Transaction"} />
            <div className='transaction_top'>
                <img src={Searchimg} alt='search' />
            </div>
            <div className='transactions_body'>
                <div className='transactions_buttons'>
                    <div
                        className={`transaction_expenses ${
                            transactionType === "expenses"
                                ? "transaction_incomes"
                                : ""
                        }`}
                    />
                    <button
                        className={`button_incomes ${
                            transactionType === "expenses" ? "" : ""
                        }`}
                        onClick={() => setTransactionType("expenses")}
                    >
                        Incomes
                    </button>
                    <button
                        className={`button_expenses ${
                            transactionType === "incomes" ? "" : ""
                        }`}
                        onClick={() => setTransactionType("incomes")}
                    >
                        Expenses
                    </button>
                </div>

                <div className='transactions_history'>
                    {sortedMonths.map((monthYear) => (
                        <div key={monthYear} className='month-section'>
                            <h3>
                                {new Date(
                                    monthYear.split("-")[1],
                                    monthYear.split("-")[0] - 1
                                ).toLocaleString("en-US", {
                                    month: "long",
                                    year: "numeric",
                                })}
                            </h3>
                            {transactionsByMonth[monthYear].map(
                                (item, index) => (
                                    <TransactionsCard
                                        key={`${monthYear}-${index}`}
                                        avatar={item.userAvatar}
                                        name={item.userName}
                                        date={item.trDate}
                                        amount={item.amount}
                                        trType={item.trType}
                                    />
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <Navbar active='Transactions' />
        </section>
    );
}

export default Transactions;
