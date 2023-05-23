import React, { useEffect, useState } from "react";
import "./Main.css";
import AsideBar from "../AsideBar/AsideBar";
import TimingSessions from "../TimingSessions/TimingSessions";
import DailyActivities from "../DailyActivities/DailyActivities";
import StrenghtsActivities from "../StrenghtsActivities/StrenghtsActivities";
import ScoreCharts from "../ScoreCharts/ScoreCharts";
import Indicators from "../Indicators/Indicators";
import { UsermainInfo } from "../../Provider/Store";
import { useParams } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getdataload() {
      const data = await UsermainInfo(id);
      setData(data);
    }
    getdataload();
  }, null);

  if(data)

  return (
    <div className="main">
      <div className="AsideBarMain">
        <AsideBar />
      </div>
      <div className="main_content">
        <div className="content">
        <div className="welcoming_user">
          <div className="welcoming_user_name">
          <h2>Bonjour </h2>
          <h2 className="username_firstname">{ data ? data.userInfos.firstName : ""}</h2>
          </div>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="infographie_user">
          <div className="ChartsMain">
            <div className="DailyChart">
              <DailyActivities />
            </div>
            <div className="secondary_charts">
              <TimingSessions />
              <StrenghtsActivities />
              <ScoreCharts />
            </div>
          </div>
          <div className="Indicators">
            {
            (data)?
                <Indicators
                  key={data.id}
                  caloriesCount={data.keyData.calorieCount}
                  proteinCount={data.keyData.proteinCount}
                  carbsCount={data.keyData.carbohydrateCount}
                  fatCount={data.keyData.lipidCount}
                /> : <> </>
            
        }
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

// const Username = styled.div`
// display: flex;
// flex-direction: row;
//   }
// `;

export default Main;
