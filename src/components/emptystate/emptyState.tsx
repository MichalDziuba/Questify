import { FC } from 'react'
import image from '../../images/empty.png'
const EmptyState:FC = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-4  '>
            <img src={image} alt='empty state' className='w-[290px] h-[320px] rounded-2xl'></img>
        <p className='font-Montserrat text-xl font-medium mt-10 text-center'>"Hmmm... that orange button must be important..."</p>
      </div>
    );
}
export default EmptyState