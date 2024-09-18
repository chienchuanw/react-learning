import React from 'react';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import styles from './LikeButton.module.css'
import { useState } from 'react';


const LikeButton = () => {

  const [visible, setVisibility] = useState(true)

  return (
    <>
      { visible ? 
        <IoMdHeartEmpty className='' onClick={() => setVisibility(false)}/>
        : <IoMdHeart className={styles.active} onClick={() => setVisibility(true)} />
      }
    </>
  )
}

export default LikeButton