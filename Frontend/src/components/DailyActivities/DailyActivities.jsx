import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import {UserActivity} from "../../Provider/Store"
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const DailyActivities = () => {

  const [data, setData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
      async function getdataload(){
          const data = await UserActivity(id);
          setData(data);
      }
      getdataload();
  }, []);

	if (data.length === 0) return null;
	//format data.day
	for (let i = 0 ; i < data.length ; i ++)
        {data[i].day = i + 1;}
  
  return (
 
    <ResponsiveContainer width="100%" height={250}>
    <BarChart data={data.sessions}>
    <CartesianGrid vertical={false} strokeDasharray="1 1"/>
    <Bar dataKey="calories" fill="#e81f1f" barSize={7} radius={[50, 50, 0, 0]} />
    <Bar dataKey="kilogram" fill="#282d30" barSize={7} radius={[50, 50, 0, 0]} />
    <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1"/>
    <Tooltip content={<CustomTooltip />} />
  
  </BarChart>
    </ResponsiveContainer>
  );

  
}

const Container = styled.div`
background-color:#E60000;
width:55px;
height:75px;
display:flex;
flex-direction:column;
align-items:center;
`

const Text = styled.p `
color:white;
font-weight: 500;
font-size: 10px;
line-height: 24px;
margin-top:7px;
`

function CustomTooltip({active, payload}) {
  if (active){
  return (
      <Container>
          <Text>{payload[0].value}kg</Text>
          <Text>{payload[1].value}Kcal</Text>
      </Container>
  
   );
  }
  return null
}

const Title= styled.h2`
    font-size: 15px;
    line-height: 24px;
    color: #20253A;
`
  
export default DailyActivities;