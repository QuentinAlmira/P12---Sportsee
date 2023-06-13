import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  PolarGrid,
} from "recharts";
import { UserPerformance } from "../../Provider/Store";
import { useParams } from "react-router-dom";
import "./StrenghtsActivities.css";

const StrenghtsActivities = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getdataload() {
      const data = await UserPerformance(id);
      const formatData = data.data.map((datas) => {
        switch (datas.kind) {
          case 1:
            return { ...datas, kind: "Cardio" };
          case 2:
            return { ...datas, kind: "Energie" };
          case 3:
            return { ...datas, kind: "Endurance" };
          case 4:
            return { ...datas, kind: "Force" };
          case 5:
            return { ...datas, kind: "Vitesse" };
          case 6:
            return { ...datas, kind: "Intensité" };
          default:
            return { ...datas };
        }
      });

      setData(formatData);
    }
    getdataload();
  }, [id]);

  return (
    <div className="performance-charts">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StrenghtsActivities;
