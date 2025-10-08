import React from 'react';
import { useParams } from 'react-router';
import useAppData from '../../Hooks/useAppData';
import dowonloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'

const AppDetails = () => {
    const {id} = useParams()
    const { appData, loading, error} = useAppData()    
    const app = appData.find(a=> a.id === Number(id))
    
    if (loading) return 
    <p>Loading...</p>

    const {title, image, ratingAvg, downloads, description} = app
    
    return (
        <div className='py-4'>
            <div className="card bg-base-100 shadow-sm bg-gray-100">
            
                  <figure className="w-full h-80 p-13 justify-centr  overflow-hidden">
                    <img
                      src={image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body ">
                    <h2 className="text-2xl text-center font-semibold">
                      {title}
                    </h2>
                    
                    <div className="flex justify-between py-2">
                      <div className="btn border-0 bg-gray-100 badge-outline text-green-600"><img className="w-4" src={dowonloadImg} alt="" />{downloads}</div>
                      <div className="btn border-0 bg-orange-100 badge-outline justify-end text-orange-600 "><img className="w-4" src={ratingImg} alt="" />{ratingAvg}</div>
                    </div>
                  </div>

                  <div className='p-5'>
                    <h1 className='font-bold'>Description</h1>
                    <p className='text-gray-400 py-3'>{description}</p>
                  </div>
                  
                </div>
        </div>
    );
};

export default AppDetails;