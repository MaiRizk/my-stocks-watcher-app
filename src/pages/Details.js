import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { loadDetails } from '../redux/Details/stockDetails';
import CandlestickChart from '../components/CandlestickChart';
import LoadingChart from '../components/LoadingChart';

const Details = () => {
  const { slug } = useParams();
  const {
    loaded, symbol, historicalData,
  } = useSelector((state) => state.stockDetails);
  const dispatch = useDispatch();
  const loadDetailsAction = bindActionCreators(loadDetails, dispatch);

  useEffect(() => {
    loadDetailsAction(slug);
    return null;
  }, [slug]);

  return (
    <div>
      <h1>My Stock Watcher App</h1>
      {!loaded && <LoadingChart />}
      <div className="bg-white">
        {loaded && <CandlestickChart type="svg" symbol={symbol} data={historicalData} />}
      </div>
    </div>
  );
};

export default Details;
