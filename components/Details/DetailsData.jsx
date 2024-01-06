import React, { useState, useEffect, useRef } from 'react'
import { fetchCoins } from '../../api/coinData';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { useParams } from 'react-router-dom';
import './DetailsData.css';
import axios from 'axios';
import { Link } from 'react-router-dom';




const DetailsData = () => {

  

  const [coinsData, setCoinsData] = useState([]);
  const [sparklineData, setSparklineData] = useState([]);
  const [historicData, setHistoricData] = useState([])
  const { uuid } = useParams();
  //const coinuuid2 = 'razxDUgYGNAdQ';


  console.log(uuid)



  useEffect(() => {
    const fetchData = async () => {

      try {
        const coinData = await fetchCoins(uuid);

        setCoinsData(coinData.data.coin)
        setSparklineData(coinData.data.coin.sparkline);


      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors as needed
      }


    }
    fetchData()

  }, [])



  return (
    <div>
      

        <section className="section about" aria-label="about">
          <div className="container">
          <div className="wrapper">
          <img src={coinsData.iconUrl} width="40" height="40" alt="Bitcoin logo" className="img" /> 
          <h2 className="h2 section-title">{coinsData.name} </h2>
          </div>
            <figure className="about-banner">
              {sparklineData && sparklineData.length > 0 && (
                <Sparklines data={coinsData.sparkline.map(Number)} limit={26} width={85} height={20} margin={5} >
                  <SparklinesLine color="#1c8cdc"/>
                  <SparklinesSpots style={{ fill: "#56b45d" }} />
                </Sparklines>
              )}


            </figure>

            <div className="about-content">

              

              <p className="section-text"> {coinsData.description}
              </p>

              <ul className="section-list">

                <li className="section-item">
                  <div className="title-wrapper">

                  <h3 className="h3 list-title">Rank : {coinsData.rank}</h3>
                    
                  </div>

                  <p class="item-text">

                  </p>
                </li>

                <li className="section-item">
                  <div className="title-wrapper">


                  <h3 className="h3 list-title">Market Price : {coinsData.price}</h3>
                  </div>

                  <p className="item-text">

                  </p>
                </li>

                <li className="section-item">
                  <div className="title-wrapper">


                  <h3 className="h3 list-title">Number Of Markets : {coinsData.numberOfMarkets}</h3>
                  </div>

                  <p className="item-text">

                  </p>
                </li>

              


              </ul>

              <a>
              <button className="btn btn-primary"><a href={coinsData.websiteUrl} target="_blank" rel="noopener noreferrer">Visit Website</a></button>
              </a>
            </div>

          </div>
        </section>
        





    </div>
  )
}

export default DetailsData;

/*  <Sparklines data={data} width={100} height={20} margin={5}>
           <SparklinesLine color="#56b45d" />
           <SparklinesSpots style={{ fill: "#56b45d" }} />
           </Sparklines>


           <img src="./assets/images/about-banner.png" width="748" height="436" loading="lazy" alt="about banner" 
              class="w-100" />



           */