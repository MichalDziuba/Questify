import { FC } from 'react'
import image from '../../images/empty.png'
const EmptyState:FC = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-24 '>
            <img src={image} alt='empty state' className='w-[290px] h-[320px]'></img>
        <p className='font-Roboto text-xl font-medium mt-10 text-center'>"Hmmm... that orange button must be important..."</p>
      </div>
    );
}
export default EmptyState