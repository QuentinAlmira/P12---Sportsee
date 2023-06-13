import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { UserAverage } from "../../Provider/Store";
import { useParams } from "react-router-dom";
import "./TimingSessions.css";

const TimingSessions = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getdataload() {
      const data = await UserAverage(id);
      const formatData = data.sessions.map((datas) => {
        switch (datas.day) {
          case 1:
            return { ...datas, day: "L" };
          case 2:
            return { ...datas, day: "M" };
          case 3:
            return { ...datas, day: "M" };
          case 4:
            return { ...datas, day: "J" };
          case 5:
            return { ...datas, day: "V" };
          case 6:
            return { ...datas, day: "S" };
          case 7:
            return { ...datas, day: "D" };
          default:
            return { ...datas };
        }
      });

      setData(formatData);
    }
    getdataload();
  }, [id]);

  return (
    <div className="AverageSessions-chart">
      <div className="AverageSessions-chart_text">
        Durée moyennes des sessions
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="none" />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="white
            "
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            mirror={true}
            tick={{
              stroke: "#FFFFFF",
              strokeWidth: 0.5,
              fontSize: "10px",
            }}
          />
          <YAxis
            hide={true}
            dataKey="sessionLength"
            domain={[0, "dataMax + 0"]}
            padding={{ top: 80, bottom: 50 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 50 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-duration">
        <p className="duration-label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

export default TimingSessions;
