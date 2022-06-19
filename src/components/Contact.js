import React  from 'react';
import '../Contact.css';
import Mape from './Mape';

function Contact () {
    return (
        <div className='Reviev'>
            <div className='Mape'>
                <Mape/>
            </div>
                <div className='Contact'>
                    Zapraszam do kontaktu:
                    <li>Telefon: 31241231</li>
                    <li>Instagram: @BeBeauty</li>
                </div>
        </div>

    )
};
export default Contact;