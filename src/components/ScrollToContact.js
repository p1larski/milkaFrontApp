import React,{useEffect, useState} from 'react';
import '../Buttons.css';

export default function ButtonContact() {
    const [top, setTop] = useState(false)

useEffect(() => {
        document.documentElement.scrollTo(0, 1350); 
        setTop(false)
    },[top]);

return <button className='ButtonRouter' 
               onClick={() => { setTop(true)}}>
                Kontakt
        </button>
  }