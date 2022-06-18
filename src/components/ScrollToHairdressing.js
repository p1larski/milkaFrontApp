import React,{useEffect, useState} from 'react';
import '../Buttons.css';

export default function ButtonHairdressing() {
    const [top, setTop] = useState(false)

useEffect(() => {
        document.documentElement.scrollTo(0, 970); 
        setTop(false)
    },[top]);

return <button className='ButtonRouter' 
                onClick={() => { setTop(true)}}>
                    Stylizacje
        </button>
  }