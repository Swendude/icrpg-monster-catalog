import React from "react";
import { WiredCard, WiredInput } from "wired-elements-react";
import styles from "./Monsterblock.module.css";
import { selectName } from "./monsterSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./monsterSlice";


export function Monsterblock(props) {
  const name = useSelector(selectName);
  const dispatch = useDispatch()

  return (
    <div className={styles.centered}>
      <WiredCard className={styles.block}>
        <WiredInput value={name} onchange={(e) => dispatch(changeName(e.target.value))} >{name || "ss"}</WiredInput>
      </WiredCard>
    </div>
  );
}
