import { PrismaClient } from "@prisma/client";

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

export default async function Sales() {
    const salesData=await getSales();

  return <>
  <div>amount: {salesData.amount}</div>
  <div>number of sales: {salesData.numberOfSales}</div>
  </>;
}
