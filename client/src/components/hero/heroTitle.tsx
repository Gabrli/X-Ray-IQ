import { TypeAnimation } from 'react-type-animation';

export default function HeroTitle(){
    return(
        <h1 className="text-white font-bold text-2xl pl-8 pb-10  mobile1:pb-14 mobile2:pb-20 mobile2:pl-6">
                <TypeAnimation
      sequence={[
   
        'Explore the Cosmos: Unlocking the Universe with AI',
        1000, 
      
      ]}
      wrapper="h2"
      className='leading-none text-5xl mobile1:text-2xl mobile2:text-lg'
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
        </h1>
    )
}