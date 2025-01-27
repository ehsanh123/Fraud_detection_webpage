
import Comp_1_4 from '../../components/page1/Comp_1_4';

// components/page1/Comp_1_5.js
export default function Comp_1_5() {
  const images = ['/images/app_law.png', '/images/app_law2.png'];

  return  <div >
    <div className='flex' > 
      <Comp_1_4 imageSrc1="/images/app_law.png" imageSrc2="/images/LSTM1.png"/>
      <Comp_1_4 imageSrc1="/images/LSTM1.png" imageSrc2="/images/app_law.png"/>
    </div>  


  </div>

  
};
