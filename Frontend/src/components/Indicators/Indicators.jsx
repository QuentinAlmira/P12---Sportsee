import React, { useEffect, useState } from "react";
import Calories from "../../assets/img/calories-icon.png";
import Carbs from "../../assets/img/carbs-icon.png";
import Protein from "../../assets/img/protein-icon.png";
import Fat from "../../assets/img/fat-icon.png";
import "./Indicators.css";
import { UsermainInfo } from "../../Provider/Store";
import { useParams } from "react-router-dom";

const Indicators = ({ caloriesCount,  proteinCount, carbsCount, fatCount} ) => {

  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getdataload() {
      const data = await UsermainInfo(id);
      setData([data]);
    }
    getdataload();
  }, []);

  return (
    <div className="indicators_icons">
            <div className="calories">
              <img src={Calories} alt="Calories" />
              <div className="calories_infos">
                <h4>{caloriesCount}Kcal</h4>
                <p>Calories</p>
              </div>
            </div>

            <div className="protein">
              <img src={Protein} alt="Protein" />
              <div className="protein_infos">
                <h4>{proteinCount}g</h4>
                <p>Protéines</p>
              </div>
            </div>

            <div className="carbs">
              <img src={Carbs} alt="carbs" />
              <div className="carbs_infos">
                <h4>{carbsCount}g</h4>
                <p>Glucides</p>
              </div>
            </div>

            <div className="fat">
              <img src={Fat} alt="fat" />
              <div className="fat_infos">
                <h4>{fatCount}g</h4>
                <p>Lipides</p>
              </div>
            </div>
          </div>
  );
};

export default Indicators;
