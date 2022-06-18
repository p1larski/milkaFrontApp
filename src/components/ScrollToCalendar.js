import React,{useEffect, useState} from 'react';
import '../Buttons.css';

export default function ButtonCalendar() {
    const [top, setTop] = useState(false)

useEffect(() => {
        document.documentElement.scrollTo(0, 1920); 
        setTop(false)
    },[top]);

return <button className='ButtonRouter' onClick={() => { setTop(true)}}>Terminarz</button>
  }