import Comp_1_1 from '@/app/components/page1/Comp_1_1';
import Comp_1_2 from '@/app/components/page1/Comp_1_2';
import Slider from '@/app/components/page1/Slider1';
import Comp_1_3 from '@/app/components/page1/Comp_1_3';
import Devider from '@/app/components/page1/devider';
import Devider2 from '@/app/components/page1/devider2';
import Comp_1_5 from '@/app/components/page1/Comp_1_5';
import Comp_1_6 from '@/app/components/page1/Comp_1_6';
import Background1 from '@/app/components/page1/background';


export default function Home() {
  return (
    <div>
      {/* <Background1 /> */}
      <Comp_1_6 />
      
      <Comp_1_1 />

      <Comp_1_2 />
      
      {/* <Slider /> */}
      <Devider />
      <Comp_1_3 />
      <Devider2 />
      <Comp_1_5 />
      
    
    </div>
  );
}