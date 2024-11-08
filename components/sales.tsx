"use client";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";

const db = new PrismaClient();

async function getSales() {
  const data = await db.order.aggregate({
    _sum: { total: true },
    _count: true,
  });
  return {
    amount: data._sum.total || 0,
    numberOfSales: data._count,
  };
}

export default function Sales() {
  const [salesData, setSalesData] = useState({ amount: 0, numberOfSales: 0 });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getSales();
  //     if (data) setSalesData(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    salesData && (
      <>
        (<div>amount: {salesData.amount}</div>
        <div>number of sales: {salesData.numberOfSales}</div>)
      </>
    )
  );
}
