import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ serverData }) => {
    let uniqueSectors = [];
    let uniqueTopics = [];
    let uniqueRegion = [];
    let uniqueCountry = [];
    let uniqueSource = [];
    let uniquePestle = [];

    serverData.forEach((i) => {
        if (!uniqueSectors.includes(i.sector) && i.sector !== "") uniqueSectors.push(i.sector);
        if (!uniqueTopics.includes(i.topic) && i.topic !== "") uniqueTopics.push(i.topic);
        if (!uniqueRegion.includes(i.region) && i.region !== "") uniqueRegion.push(i.region);
        if (!uniqueCountry.includes(i.country) && i.country !== "") uniqueCountry.push(i.country);
        if (!uniqueSource.includes(i.source) && i.source !== "") uniqueSource.push(i.source);
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") uniquePestle.push(i.pestle);
    });

    const label = ["Country", "Region", "Source", "Topic", "Sector", "Pestle"];
    const backgroundColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800", "#8E44AD"];

    return (
        <div style={{ height: '50vh', width: '45vw' }}>
            <Doughnut
                data={{
                    labels: label,
                    datasets: [
                        {
                            label: "Total: ",
                            data: [uniqueCountry.length, uniqueRegion.length, uniqueSource.length, uniqueTopics.length, uniqueSectors.length, uniquePestle.length],
                            backgroundColor: backgroundColors, // ✅ Adding colors
                            borderColor: "#ffffff",
                            borderWidth: 1,
                            hoverOffset: 5
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

export default DoughnutChart;
