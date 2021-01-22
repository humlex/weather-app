import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "../../store/actions/alertActions";
import { getWeather, setLoading } from "../../store/actions/weatherActions";

import "./styled.scss";

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return dispatch(setAlert("City is required"));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity("");
  };

  return (
    <div className="container">
      <h1>{title}</h1>
      <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          className="search-input"
          value={city}
          onChange={changeHandler}
        />
        <button className="submit-btn">Search</button>
      </form>
    </div>
  );
};

export default Search;
