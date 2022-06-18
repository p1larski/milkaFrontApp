import React,{useEffect, useState} from 'react';
import '../Buttons.css';

export default function Button() {
    const [top, setTop] = useState(false)

useEffect(() => {
        document.documentElement.scrollTo(0, 0); 
        setTop(false)
    },[top]);

return <button className='ButtonRouter' onClick={() => { 
                                        setTop(true)}}>
                                            Back to Top</button>
  }