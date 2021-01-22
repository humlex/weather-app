import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./store";

import Search from "./components/Search";
import Alert from "./components/Alert";
import Weather from "./components/Weather";

import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";

const App: FC<{}> = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMessage = useSelector((state: RootState) => state.alert.message);

  return (
    <div>
      {console.log(process.env.REACT_APP_API_KEY)}
      <Search title="Enter city name" />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}
      {alertMessage && (
        <Alert message={alertMessage} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
};

export default App;
