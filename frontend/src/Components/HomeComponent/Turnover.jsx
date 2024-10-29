import React, { useEffect, useState } from 'react';
import worldmap from '../../assets/worldmap.png';

const Turnover = () => {
  const [countries, setCountries] = useState(0);
  const [products, setProducts] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [items, setItems] = useState(0);

  // Counter animation logic
  useEffect(() => {
    const incrementCounts = () => {
      if (countries < 50) setCountries(countries + 1);
      if (products < 270) setProducts(products + 5); // increase faster
      if (customers < 260) setCustomers(customers + 3);
      if (items < 600) setItems(items + 10);
    };
    const interval = setInterval(incrementCounts, 50); // Speed of increment
    return () => clearInterval(interval);
  }, [countries, products, customers, items]);

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${worldmap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-20">
          Global Threat Protection Delivered Daily
        </h1>

        
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-16">
          <div className="flex flex-col items-center justify-center w-32 h-32 rounded-lg text-3xl">
            {countries}+<br />Countries
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 rounded-lg text-3xl">
            {products}+<br />Products
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 rounded-lg text-3xl">
            {customers}+<br />Customers
          </div>
          <div className="flex flex-col items-center justify-center w-32 h-32 rounded-lg text-3xl">
            {items}+<br />Items
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turnover;
