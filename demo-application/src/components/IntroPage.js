import React from 'react';
import Button from './Button'
import { btnHandler } from '../scripts/app';
import Icon from './Icon';
import crane1 from '../images/crane1.jpg';
import crane2 from '../images/crane2.jpg';
import img1 from '../civilWarImages/1.jpg';
import img2 from '../civilWarImages/2.jpg';
import img3 from '../civilWarImages/3.png';
import img4 from '../civilWarImages/4.png';
import img5 from '../civilWarImages/5.png';
import img6 from '../civilWarImages/6.png';
import img7 from '../civilWarImages/7.png';
import img8 from '../civilWarImages/8.png';
import img9 from '../civilWarImages/9.jpg';
import img10 from '../civilWarImages/10.png';
import img11 from '../civilWarImages/11.png';
import img12 from '../civilWarImages/12.png';
import img13 from '../civilWarImages/13.png';
import img14 from '../civilWarImages/14.jpg';
import img15 from '../civilWarImages/15.jpg';
import img16 from '../civilWarImages/16.jpg';
import img17 from '../civilWarImages/17.png';
import img18 from '../civilWarImages/18.png';
import img19 from '../civilWarImages/19.png';
import img20 from '../civilWarImages/20.png';
import img21 from '../civilWarImages/21.png';
import img22 from '../civilWarImages/22.png';
import img23 from '../civilWarImages/23.png';
import img24 from '../civilWarImages/24.jpg';
import img25 from '../civilWarImages/25.jpg';
import img26 from '../civilWarImages/26.jpg';
import img27 from '../civilWarImages/27.jpg';
import img28 from '../civilWarImages/28.png';
import img29 from '../civilWarImages/29.jpg';
import img30 from '../civilWarImages/30.jpg';
import img31 from '../civilWarImages/31.jpg';
import img32 from '../civilWarImages/32.jpg';
import img33 from '../civilWarImages/33.jpg';
import img34 from '../civilWarImages/34.jpg';
import img35 from '../civilWarImages/35.jpg';
import img36 from '../civilWarImages/36.jpg';
import img37 from '../civilWarImages/37.png';


const IntroPage = () => {
  return (
    <div className='bookContainer'>
        <div className='book' style={bookStyle}>
            <div className='introPage'>
                <div className='StephenCrane'>
                <center>
                    <h1>
                    Stephen Crane
                    </h1>
                </center> 
                </div>

                <div className='CraneImages'>
                    <center>
                        <img src={crane2} height={150} width={150} />
                        <img src={crane1} height={150} width={150} />
                    </center> 
                </div>

                <div>
                    <p></p>
                </div>

                <div className='Civil War'>
                <center>
                    <h1>
                    Civil War
                    </h1>
                </center> 
                </div>

                <div className='CraneImages'>
                    <img src={img3} height={110} width={200} />
                    <img src={img4} height={120} width={200} />
                    <img src={img5} height={100} width={200} />
                    <img src={img18} height={100} width={200} />
                    <img src={img7} height={100} width={200} />
                    <img src={img8} height={100} width={200} />
                    <img src={img6} height={100} width={200} /> 
                    <img src={img10} height={100} width={200} />
                    <img src={img11} height={100} width={200} />
                    <img src={img12} height={100} width={200} />
                    <img src={img13} height={100} width={200} />
                    <img src={img37} height={100} width={200} />
                    <img src={img29} height={100} width={200} />
                    <img src={img9} height={100} width={200} />
                    <img src={img23} height={100} width={200} />
                    <img src={img26} height={100} width={200} />
                    <img src={img30} height={100} width={200} />
                    <img src={img31} height={100} width={200} />
                    <img src={img32} height={100} width={200} />
                    <img src={img33} height={100} width={200} />
                    <img src={img34} height={100} width={200} />
                    <img src={img35} height={100} width={200} />
                    <img src={img36} height={100} width={200} />
                    <img src={img15} height={100} width={200} />
                </div>

          </div>
        </div>
    </div>
  )
};

const bookStyle = {
  backgroundColor: '#949292',
}

export default IntroPage;