import React,{ useEffect , useState } from 'react'



const Covid=()=>{
    const [data,setData]=useState([])
    const getCovidData=async ()=>{
        try{
            const res=await fetch('https://data.covid19india.org/data.json')
            const actualData=await res.json()
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0])
        }
        catch(e){
            console.log(e)
        }
       
    }
    useEffect(()=>{
        getCovidData();
    },[])
    return(
        <>
        <h1 className='heading_style'>Live Covid Tracker</h1>
        <ul>
            <div className='cards'>
            <div className='card'>
                <div className='card_info'>
                <span className='card_category'>Country</span>
                <h3 className='card_title'>India</h3>
                </div>
            </div>
        </div>


            <div className='cards'>
            <div className='card'>

                <div className='card_info'>
                <span className='card_category'>Recovered</span>
                <h3 className='card_title'>{data.recovered}</h3>
           
                </div>
            </div>
        </div>

            <div className='cards'>
            <div className='card'>
                
                <div className='card_info'>
                <span className='card_category'>Confirmed</span>
                <h3 className='card_title'>{data.confirmed}</h3>
                
                </div>
            </div>
        </div>

           

            <div className='cards'>
            <div className='card'>
               
                <div className='card_info'>
                <span className='card_category'>Deaths</span>
                <h3 className='card_title'>{data.deaths}</h3>
                </div>
            </div>
        </div>

            

            <div className='cards'>
            <div className='card'>
                
                <div className='card_info'>
                <span className='card_category'>Active</span>
                <h3 className='card_title'>{data.active}</h3>
                </div>
            </div>
        </div>

           

            <div className='cards'>
            <div className='card'>
                
                <div className='card_info'>
                <span className='card_category'>Updated</span>
                <h3 className='card_title'>{data.lastupdatedtime}</h3>
                </div>
            </div>
        </div>
        </ul>
        </>
    )
}

export default Covid