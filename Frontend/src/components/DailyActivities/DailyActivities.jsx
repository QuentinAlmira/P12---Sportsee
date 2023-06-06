import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import {UserActivity} from "../../Provider/Store"
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DateFormatter = date => {
  return date.toString().substring(8,10);
}

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

  console.log(data);



  
  return (
    <><Head>
      <Title>
        Activité quotidienne
      </Title>
      <Legends>
        <Info>
        <Icon color='#282D30' />
        < TextL>Poids (kg)</ TextL>
        </Info>
        <Info>
						<Icon color='#E60000' />
						< TextL>Calories brûlées (kCal)</ TextL>
					</Info>

      </Legends>

    </Head>
    
    <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data.sessions}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />

          <XAxis dataKey="day" tickFormatter={DateFormatter} tickLine={false} tick={{ fontSize: 14 }} dy={15} stroke="1 1" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="calories" fill="#e81f1f" barSize={7} radius={[50, 50, 0, 0]} />
          <Bar dataKey="kilogram" fill="#282d30" barSize={7} radius={[50, 50, 0, 0]} />
        </BarChart>

      </ResponsiveContainer></>
  );

  
}

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 1.5rem;
	`

const Title= styled.h2`
    font-size: 15px;
    line-height: 24px;
    color: #20253A;
`

const TextL = styled.p`
	font-weight: 500;
	font-size: 14px;
	color: #74798c;
	margin-left: 10px;
`

const Icon = styled.div`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	align-self: center;
	margin-left: 30px;
`

const Legends = styled.div`
	display: flex;
`

const Info = styled.div`
    display: flex;
    align-items:center;
`

const Container = styled.div`
display : flex;
justify-content: center;
    flex-direction: column;
    align-items: center;
height : 100%;
width : 50px;
background-color:#e60000;
border-color: blue;

`

const Text = styled.p `
color:white;
font-weight: 500;
font-size: 10px;
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

  
export default DailyActivities;