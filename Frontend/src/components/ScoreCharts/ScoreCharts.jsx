import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cell, LabelList, Pie, PieChart, ResponsiveContainer } from "recharts";
import {UsermainInfo} from "../../Provider/Store";
import "./ScoreCharts.css";
import {getScore} from "../../pages/Models/getScore";
import {Container, Title, Text, Score} from "../ScoreCharts/ScoreChartsStyle"

const ScoreCharts = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        async function getdataload(){
            const data = await UsermainInfo(id);
            setData(data);
        }
        getdataload();
    }, []);

    
    const score = getScore(data);

  
    const texte = [
      { name: "", value: (score*100), fill: "red" },
      { name: "", value: (100-score*100), fill: "white" }
    ];

    const test = [
      { name: "", value: 100, fill: "white" },
      { name: "", value: 0, fill: "white" }
    ];
    
    
    return (
      <div className="Score-chart">
        <div className="Average-message">
          <div className='Average-message_score'>{score*100}%</div>
          <div className='Average-message_texte'> de votre objectif
             </div>
          </div>
          
        <ResponsiveContainer width="100%" height={200}>
        <PieChart >
          <Pie
            data={texte}
            innerRadius={75}
            outerRadius={90}
            dataKey="value"
            startAngle={90}
            endAngle={450}
            labelLine={false}
            isAnimationActive={false}
            stroke='none'
          >
          </Pie>
          <Pie
            data={test}
            innerRadius={0}
            outerRadius={20}
            dataKey="value"
            startAngle={90}
            endAngle={450}
            labelLine={false}
            isAnimationActive={false}
            stroke='none'
          >
          </Pie>
        </PieChart>
        </ResponsiveContainer>
      </div>
    );
};



export default ScoreCharts;