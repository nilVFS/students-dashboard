import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'literature',
    A: 5,
    B: 4,
    fullMark: 5,
  },
  {
    subject: 'chemistry',
    A: 3,
    B: 4,
    fullMark: 5,
  },
  {
    subject: 'English',
    A: 5,
    B: 5,
    fullMark: 5,
  },
  {
    subject: 'mathematics',
    A: 4,
    B: 5,
    fullMark: 5,
  },
  {
    subject: 'Physics',
    A: 5,
    B: 5,
    fullMark: 5,
  },
  {
    subject: 'History',
    A: 5,
    B: 5,
    fullMark: 5,
  },
];


export default function Dashboard() {

    return (
        <section id="dashboard">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>I</th>
                        <th>II</th>
                        <th>III</th>
                        <th>IV</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>literature</th>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>4</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>mathematics</th>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>4</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>history</th>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>4</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>physics</th>
                        <td>5</td>
                        <td>5</td>
                        <td>5</td>
                        <td>5</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th>chemistry</th>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th>English</th>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>4</td>
                        <td>4</td>
                    </tr>
                </tbody>
            </table>
            <div className="chart-wrapper">
                <h3>I семестр</h3>
                <ResponsiveContainer width="100%" height="96%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Vladislav" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}