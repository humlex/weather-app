import { RootState } from "./../index";
import { ThunkAction } from "redux-thunk";
import {
  WeatherAction,
  WeatherData,
  WeatherError,
  GET_WEATHER,
  SET_LOADING,
  SET_ERROR,
} from "../types";

const API_KEY = "b507e96b292080e77f64ceeb3b322f29";

export const getWeather = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      {
        console.log(API_KEY);
      }
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
      );

      if (!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      const resData: WeatherData = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
