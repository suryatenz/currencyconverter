import { useEffect, useState } from "react";
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json
function useCurrencyinfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res)=>res.json())
            .then((datas)=>{
                setData(datas[currency]);
                // console.log(datas[currency]);
                // console.log(currency)
            });
    },[currency]);
    return data
}

export default useCurrencyinfo;