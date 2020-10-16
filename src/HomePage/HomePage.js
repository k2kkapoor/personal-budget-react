import React from 'react';
import ChartJS from '../ChartJS/ChartJS';
import D3JS from '../D3JS/D3JS';

function HomePage() {
  
  return (
    <main id="main" className="container center">
      <div className="page-area">
        <div className="text-box">
          <h2>Stay on track</h2>
          <p>
            Do you know where you are spending your money? If you really stop to
            track it down, you would get surprised! Proper budget management
            depends on real data... and this app will help you with that!
          </p>
        </div>

        <div className="text-box">
          <h2>Alerts</h2>
          <p>
            What if your clothing budget ended? You will get an alert. The goal
            is to never go over the budget.
          </p>
        </div>

        <div className="text-box">
          <h2>Results</h2>
          <p>
            People who stick to a financial plan, budgeting every expense, get
            out of debt faster! Also, they to live happier lives... since they
            expend without guilt or fear... because they know it is all good and
            accounted for.
          </p>
        </div>

        <div className="text-box">
          <h2>Free</h2>
          <p>This app is free!!! And you are the only one holding your data!</p>
        </div>

        <div className="text-box">
          <h2>Stay on track</h2>
          <p>
            Do you know where you are spending your money? If you really stop to
            track it down, you would get surprised! Proper budget management
            depends on real data... and this app will help you with that!
          </p>
        </div>

        <div className="text-box">
          <h2>Alerts</h2>
          <p>
            What if your clothing budget ended? You will get an alert. The goal
            is to never go over the budget.
          </p>
        </div>
       
       
    </div>

    <div className="text-box-chart">
          <h2>ChartJS</h2>
          <ChartJS />
        </div>


        <div className="text-box-chart">
          <h2>D3JS</h2>
          <D3JS 
        width={400}
        height={400}
        innerRadius={0}
        outerRadius={200} />
        </div>
    </main>
  );
}


export default HomePage;