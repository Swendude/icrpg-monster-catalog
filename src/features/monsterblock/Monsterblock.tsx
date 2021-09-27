import React, { ReactElement, useState } from "react";
import styles from "./Monsterblock.module.css";
import {
  selectName,
  selectHearts,
  changeName,
  increaseHearts,
  decreaseHearts,
  selectStats,
  ALL_ATTRS,
  addAtrribute,
  AttributeName,
} from "./monsterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export function Monsterblock() {
  const name = useAppSelector(selectName);
  const hearts = useAppSelector(selectHearts);
  const stats = useAppSelector(selectStats);
  const dispatch = useAppDispatch();

  const [statChoice, setStatChoice] = useState<AttributeName>(ALL_ATTRS[0]);
  const [statValue, setStatValue] = useState(0);

  return (
    <div className={`${styles.centered} ${styles.block}`}>
      <div className="stat">
        <p>{name}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch(changeName(e.target.value))}
        />
      </div>
      <div className="stat">
        {[...Array(hearts)].map((e, i) => (
          <span key={i}>♥</span>
        ))}
        <button onClick={() => dispatch(increaseHearts())}> + </button>
        <button onClick={() => dispatch(decreaseHearts())}> - </button>
      </div>
      <div className="stat">
        {stats.map((stat) => (
          <div>
            <p>{stat.name}</p>
            <p>{stat.value}</p>
          </div>
        ))}
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <p>Attribute: </p>
            <select
              name="attrName"
              id=""
              onChange={(e) => setStatChoice(e.target.value as AttributeName)}
            >
              {ALL_ATTRS.map((attr, i) => (
                <option key={i} value={attr}>
                  {attr}
                </option>
              ))}
            </select>
            <p>Value: </p>
            <input
              name="attrValue"
              value={statValue}
              type="text"
              onChange={(e) => setStatValue(parseInt(e.target.value) || 0)}
            />
            <input
              type="submit"
              value="Add"
              onClick={() =>
                dispatch(addAtrribute({ name: statChoice, value: statValue }))
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
}
