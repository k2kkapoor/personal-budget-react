import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Pie} from 'react-chartjs-2';

function ChartJS() {
    const [pbChartData, setChartData] = useState({})
    const renderChart = () => {
        let budgetData = [];
        let budgetLabel = [];
        axios.get('http://localhost:3000/budget')
        .then(res =>{
            console.log(res);
            for(const dataObj of res.data.myBudget){
                budgetData.push(parseInt(dataObj.budget))
                budgetLabel.push(dataObj.title)
            }
            setChartData({
                labels: budgetLabel,
                datasets: [
                    {
                        data: budgetData,
                        backgroundColor: ['#ffcd56',
                        '#ff6384',
                        '#36a2eb',
                        '#fd6b19',
                        '#FF8A33',
                        '#33BEFF',
                        '#33FF8D',
                        '#3390FF',]
                    }
                ]
            })
        })
        .catch(err =>{
            console.log("Issue with chart data:" + err);
        })
        console.log(budgetData, budgetLabel);

       
    }
    useEffect(()=>{
        renderChart()
    }, [])
  return (
      <div>
          <Pie data = {pbChartData}/>
      </div>
      
  );
}

export default ChartJS;