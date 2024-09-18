import React from 'react';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import styles from './LikeButton.module.css'
import { useState } from 'react';

interface Props {
  onClick: () => void;
}

const LikeButton = ({onClick}: Props) => {

  const [status, setStatus] = useState(true)
  const toggle = () => {
    setStatus(!status);
    onClick();
  }

  return (
    <>
      { status ? 
        <IoMdHeartEmpty size={20} onClick={toggle}/>
        : <IoMdHeart size={20} className={styles.color} onClick={toggle} />
      }
    </>
  )
}

export default LikeButton