import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PurchaseSummary = ({ purchaseList }) => {
  const [purchases, setPurchases] = useState([
    { title: "Product 1", type: "Type A", price: 10 },
    { title: "Product 2", type: "Type B", price: 20 },
    { title: "Product 3", type: "Type C", price: 30 },
    { title: "Product 4", type: "Type D", price: 40 },
    { title: "Product 5", type: "Type E", price: 50 },
  ]);
  const [filteredPurchases, setFilteredPurchases] = useState([]);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    const selectedPurchases = purchases.filter((_, index) => purchaseList[index]);
    setFilteredPurchases(selectedPurchases);

    const totalPrice = selectedPurchases.reduce((acc, purchase) => acc + purchase.price, 0);
    const taxAmount = totalPrice * 0.2;
    setTotal(totalPrice);
    setTax(taxAmount);
  }, [purchaseList, purchases]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Purchase Summary</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPurchases.map((purchase, index) => (
            <TableRow key={index}>
              <TableCell>{purchase.title}</TableCell>
              <TableCell>{purchase.type}</TableCell>
              <TableCell>${purchase.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4">
        <p className="text-xl">Total: ${total.toFixed(2)}</p>
        <p className="text-xl">Tax (20%): ${tax.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PurchaseSummary;