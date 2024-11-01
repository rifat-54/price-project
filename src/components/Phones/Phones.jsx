import axios from "axios";
import { split } from "postcss/lib/list";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Audio,ColorRing } from "react-loader-spinner";

const Phones = () => {
  const [phone, setPhone] = useState([]);
  const [loader, setloader] = useState(true);
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res=>res.json())
    // .then(data=>setPhone(data.data))

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const allPhone = data.data.data;
        const newPhone = allPhone.map((p) => {
          const obj = {
            price: parseInt(p.slug.split("-")[1]),
            name: p.phone_name,
          };
          return obj;
        });
        setPhone(newPhone);
        setloader(false);
      });
  }, []);
  console.log(phone);
  return (
    <div>
      <div>
        {loader && (
          <div>
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
            
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
            

          </div>
        )}
      </div>
      <h2 className="text-7xl font-bold">phone {phone.length}</h2>
      <BarChart width={1000} height={300} data={phone}>
        <XAxis dataKey="name" />
        <YAxis dataKey={"price"} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="price"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </div>
  );
};

export default Phones;
