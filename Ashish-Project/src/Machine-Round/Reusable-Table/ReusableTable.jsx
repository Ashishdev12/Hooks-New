import React  from 'react'
import TableComponent from './TableComponent';
import  './ReusableTable.css';

function ReusableTable() {
    const employees = [
  { id: 101, name: "Alice Johnson", department: "Engineering", position: "Frontend Developer", salary: 75000 },
  { id: 201, name: "Bob Smith", department: "Engineering", position: "Backend Developer", salary: 80000 },
  { id: 301, name: "Charlie Adams", department: "Design", position: "UX Designer", salary: 70000 },
  { id: 401, name: "Diana Lee", department: "Engineering", position: "DevOps Engineer", salary: 85000 },
  { id: 501, name: "Ethan Brown", department: "Sales", position: "Sales Executive", salary: 65000 },
  { id: 601, name: "Fiona White", department: "Marketing", position: "Content Strategist", salary: 62000 },
  { id: 701, name: "George Martin", department: "HR", position: "HR Manager", salary: 78000 },
  { id: 801, name: "Hannah Davis", department: "Finance", position: "Accountant", salary: 72000 },
  { id: 901, name: "Ivan Scott", department: "Support", position: "Customer Support", salary: 50000 },
  { id: 1001, name: "Julia King", department: "Engineering", position: "Full Stack Developer", salary: 90000 },
  { id: 1101, name: "Kevin Moore", department: "Sales", position: "Account Manager", salary: 68000 },
  { id: 1201, name: "Laura Hill", department: "Marketing", position: "SEO Specialist", salary: 61000 },
  { id: 1301, name: "Mike Turner", department: "Product", position: "Product Manager", salary: 95000 },
  { id: 1401, name: "Nina Patel", department: "Finance", position: "Financial Analyst", salary: 74000 },
  { id: 1501, name: "Oscar Green", department: "Engineering", position: "QA Engineer", salary: 69000 }
];

const products = [
  { id: 1, name: "Wireless Mouse", price: 25.99, category: "Electronics", stock: 120 },
  { id: 2, name: "Bluetooth Headphones", price: 59.99, category: "Electronics", stock: 80 },
  { id: 3, name: "Coffee Mug", price: 9.99, category: "Kitchen", stock: 200 },
  { id: 4, name: "Yoga Mat", price: 19.99, category: "Fitness", stock: 75 },
  { id: 5, name: "Water Bottle", price: 14.99, category: "Fitness", stock: 150 },
  { id: 6, name: "Desk Lamp", price: 29.99, category: "Home Office", stock: 60 },
  { id: 7, name: "Notebook", price: 3.99, category: "Stationery", stock: 300 },
  { id: 8, name: "Mechanical Keyboard", price: 89.99, category: "Electronics", stock: 40 },
  { id: 9, name: "Office Chair", price: 199.99, category: "Furniture", stock: 20 },
  { id: 10, name: "USB-C Cable", price: 7.99, category: "Electronics", stock: 250 },
  { id: 11, name: "Running Shoes", price: 49.99, category: "Footwear", stock: 95 },
  { id: 12, name: "Scented Candle", price: 12.99, category: "Home Decor", stock: 130 },
  { id: 13, name: "Laptop Stand", price: 39.99, category: "Accessories", stock: 55 },
  { id: 14, name: "Wall Clock", price: 22.49, category: "Home Decor", stock: 70 },
  { id: 15, name: "LED Strip Light", price: 16.99, category: "Lighting", stock: 90 }
];





  return (
    <div className='table-container'>
  
      <TableComponent data={products}/>

      {/* <TableComponent data={employees}/> */}
    </div>
  )
} 

export default ReusableTable;
