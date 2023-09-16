import React from "react";
import { Chart } from "react-google-charts";


export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 8],
  ["Еда", 2],  
  ["Учёба", 2],
  ["Домашние дела", 2.5],
  ["Досуг", 2.5],
  ["Дорога работа-дом", 1],
  ["Сон", 6],
];
export const options = {
  title: "Моя активность за день",
};

export function App() {
  
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
    </div>
  );
}

export default App;
