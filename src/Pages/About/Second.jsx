import React, { useEffect, useState } from 'react'

const Second = () => {
    const [url, setUrl] = useState('https://reqres.in/api/users?page=2')
    const [api, setApi] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(info => {
                setApi(info.data)
            })
    }, [])

    return (
        <div>
            <h1 className='text-[50px] text-red-500'>
                Second_nasted page
            </h1>

           <div className="card flex justify-evenly flex-wrap">
           {
                api.map((value)=>{
                    return(
                        <ul>
                            <img src={value.avatar} alt="" />
                            <li>{value.first_name}</li>
                            <li>{value.last_name}</li>
                        </ul>
                    )
                })
            }
           </div>
        </div>
    )
}

export default Second