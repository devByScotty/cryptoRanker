import React, { useState, useEffect, useRef } from 'react';
import { fetchCoins } from '../../api/api';
import axios from 'axios';
import './CoinInfo.css'
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




const CoinInfo = ({ match }) => {

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [coiny, setCoins] = useState([]);
  const [sparklineData, setSparklineData] = useState([]);
  const chartRef = useRef(null);
  const [chartImage, setChartImage] = useState(null);





  useEffect(() => {
    const fetchData = async (currentPage) => {

      try {
        const coinData = await fetchCoins(currentPage);
        setCoins(coinData.data.coins);
        console.log(coinData.data.coins) // Adjust based on the structure of the Coinranking API response
        //console.log(coins.coins.name) 


      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors as needed
      }
    };

    fetchData(page)
  }, [page])








  return (

    <section className="section market" aria-label="market update" >
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Market Update</h2>
          <a href="#" className="btn-link">
            See All Coins
          </a>
        </div>

        <div className="market-tab">


          <table className="market-table">
            <thead className="table-head">
              {/* ... (unchanged) */}



              <tr className="table-row table-title">

                <th className="table-heading"></th>

                <th className="table-heading" scope="col">#</th>

                <th className="table-heading" scope="col">Name</th>

                <th className="table-heading" scope="col">Last Price</th>

                <th className="table-heading" scope="col">24h %</th>

                <th className="table-heading" scope="col">Market Cap</th>

                <th className="table-heading" scope="col">Listed At</th>

                <th className="table-heading"></th>

              </tr>

            </thead>


            <tbody className="table-body">
              {/* ... (unchanged) */}

              {coiny.map((coin, index) => (
                // ... your mapping logic

                <tr className="table-row">

                  <td className="table-data">
                    <button className="add-to-fav" aria-label="Add to favourite" >
                      <ion-icon name="star-outline" aria-hidden="true" className="icon-outline"></ion-icon>
                      <ion-icon name="star" aria-hidden="true" className="icon-fill"></ion-icon>
                    </button>
                  </td>

                  <th className="table-data rank" scope="row">{coin.rank}</th>

                  <td className="table-data">
                    <div className="wrapper">
                      <img src={coin.iconUrl} width="20" height="20" alt="Bitcoin logo" className="img" />

                      <h3>
                        <a href="#" className="coin-name">{coin.name}<span className="span">{coin.symbol}</span></a>
                      </h3>
                    </div>
                  </td>

                  <td className="table-data last-price">{coin.price}</td>

                  <td className="table-data last-update green"> {coin.change}%</td>

                  <td className="table-data market-cap">$ {coin.marketCap}</td>

                  <td className="table-data lst-price"> $ {coin.listedAt}</td>

                  <td className="table-data">
                    <button className="btn btn-outline btn1 mr-2"><Link to={`/details/${coin.uuid}`}>Details </Link></button>
                  </td>

                </tr>

              ))}
            </tbody>
          </table>

        </div>

      </div>


      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%', // Make the stack fill the width
          textAlign: 'center', // Center the contents
        }}
      >
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
          size="large" // Adjust the size of the Pagination component
          sx={{
            '& .MuiPaginationItem-root': {
              fontSize: '1.5rem', // Adjust the font size of each pagination item
            },
          }}
          color="primary"
          variant="outlined"

        />
      </Stack>

    </section>



  );
};

export default CoinInfo;
