import React, { useEffect, useState } from 'react';
import {
  CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  import {UserAverage} from "../../Provider/Store"
import { useParams } from 'react-router-dom';
import "./TimingSessions.css"


  
  const TimingSessions = () => {

    const [data, setData] = useState([]);
    const {id} = useParams();
  
    useEffect(() => {
      async function getdataload(){
          const data = await UserAverage(id);
          const formatData = data.sessions.map((datas) => {
         
            switch (datas.day) {
              case 1:
                return { ...datas, day: 'L' };
              case 2:
                return { ...datas, day: 'M' };
              case 3:
                return { ...datas, day: 'M' };
              case 4:
                return { ...datas, day: 'J' };
              case 5:
                return { ...datas, day: 'V' };
              case 6:
                return { ...datas, day: 'S' };
              case 7:
                  return { ...datas, day: 'D' };
              default:
                return {...datas };
            }


          });

          setData(formatData);
      }
      getdataload();
  }, []);





      return (
        <div className='AverageSessions-chart'>
        <div className='AverageSessions-chart_text' >Durée moyennes des sessions</div>
        <ResponsiveContainer width="100%" height={250} >
        <LineChart data={data}>
          <CartesianGrid stroke='none'/>
             <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white
            "
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
          <XAxis dataKey="day" tickLine={false} mirror={true} tick={{stroke: '#FFFFFF', strokeWidth: 0.5, mixBlendMode : "normal", fontSize : "12px"}}/>
          <YAxis  hide={true} dataKey="sessionLength" padding={{top : 80, bottom : 50}}/>
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
        </ResponsiveContainer>
        </div>
      );
  };

  const CustomTooltip = ({ active, payload, label, stroke, y, textAnchor, x }) => {
    if (active && payload && payload.length) {
      return (
        <g className="recharts-layer recharts-polar-angle-axis-tick">
           <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
        <text
          stroke={stroke}
          y={y}
          fontSize="0.75rem"
          fontWeight="500"
          className="recharts-text recharts-polar-angle-axis-tick-value"
          textAnchor={textAnchor}
        >
          <tspan x={x} style={{ fill: "black" }}>
            {payload?.value}
          </tspan>
        </text>
      </g>
      );
    }
  
    return null;
  };


export default TimingSessions;