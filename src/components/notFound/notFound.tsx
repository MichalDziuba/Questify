import {TfiFaceSad} from 'react-icons/tfi'

export const NotFound = () => {
    return (
        <div className="flex flex-col  items-center w-screen h-screen">
            <TfiFaceSad className='w-24 h-24 mt-12' />
      <h2 className="text-2xl mt-12">404</h2>
            <p className="text-lg">Page not found!</p>
            
    </div>
    )
   
}