import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [purchaseList, setPurchaseList] = useState({});

  const handleCheckboxChange = (index) => {
    setPurchaseList((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">John Website</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Purchase</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.type}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <Checkbox
                  checked={purchaseList[index] || false}
                  onCheckedChange={() => handleCheckboxChange(index)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Index;