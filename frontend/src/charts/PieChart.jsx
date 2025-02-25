import React from 'react'
import { Pie } from 'react-chartjs-2';

const PieChart = ({ serverData }) => {
    let uniquePestle = [];

    serverData.forEach((i) => {
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
            uniquePestle.push(i.pestle);
        }
    });

    const pestleCount = uniquePestle.map((item) => {
        return {
            pestle: item,
            count: serverData.filter((i) => i.pestle === item).length
        }
    });

    const backgroundColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800", "#8E44AD"];

    return (
        <div style={{ height: '50vh', width: '45vw' }}>
            <Pie
                data={{
                    labels: uniquePestle,
                    datasets: [
                        {
                            label: "Projects ",
                            data: pestleCount.map(i => i.count),
                            backgroundColor: backgroundColors.slice(0, uniquePestle.length), // ✅ Adding colors
                            borderColor: "#ffffff",
                            borderWidth: 1,
                            hoverOffset: 5,
                        },
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: "right" }
                    }
                }}
                height={300}
            />
        </div>
    )
}

export default PieChart;
