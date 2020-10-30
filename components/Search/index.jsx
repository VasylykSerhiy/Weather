import React, { useState, useRef, useCallback } from 'react'
import css from './style.module.scss'
import { useDispatch } from 'react-redux';
import getWeather from '../../redux/actions/weather.actions'
import _ from "lodash";

export default function Search({ id }) {
  const [value, setValue] = useState("")
  const input = useRef();
  const dispatch = useDispatch()
  const delayedQuery = useCallback(_.debounce(e => dispatch(getWeather(e)), 500), []);

  const changeValue = (e) => {
    setValue(e.target.value)
    delayedQuery(e.target.value)
  }

  return (
    <div className={css.search}>
      <div className={css.inputWrap}>
        <input
          type="text"
          id={id}
          ref={input}
          value={value}
          onChange={changeValue}
          autoComplete="off"
        />
        <label
          htmlFor={id}
          className={value !== "" ? css.active : null}
        >Country</label>
      </div>
    </div>
  )
}