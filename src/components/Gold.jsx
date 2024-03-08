import { useId, useState } from 'react';
import axios from 'axios';
export const Gold = () => {
    const [goldData, setGoldData] = useState(null);

    const fetchData = async ()=>{
        const url = 'https://gold-rates-india.p.rapidapi.com/api/gold-prediction';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c7bff3fd00msh5df8a237f307fabp164f80jsn09f702401ee8',
                'X-RapidAPI-Host': 'gold-rates-india.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            setGoldData(result)
            console.log(result);
        } catch (error) {
            console.error(error);
        }
        };

    const ind = useId();
        
    return (
        <div>
            <button onClick={fetchData}>Fetch Gold Data</button>
            {goldData && (
                <div>
                    Render gold data here 
                    <pre>{JSON.stringify(goldData, null, 2)}</pre>
                    {/* <p>{goldData}</p>
                    <ul>
                        <li className=''>
                            {
                                goldData.map=((gl)=>{
                                    <p key={ind}>{Number(gl.price)}</p>
                                })
                            }
                        </li>
                    </ul> */}
                </div>
            )}
        </div>
    );
};
