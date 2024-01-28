import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = ({ dataPoints }) => { 

    const dataPonitsValues = dataPoints.map((data) => data.value)
    const maxValue = Math.max(...dataPonitsValues)

    return (
        <div className="chart">
            {dataPoints.map((point) => (
                <ChartBar
                    key={ point.label }
                    label={point.label}
                    value={point.value}
                    maxValue={maxValue}
                />))
            }
        </div>
    )
}
export default Chart