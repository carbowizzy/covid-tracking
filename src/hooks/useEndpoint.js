import React, {useState, useEffect} from 'react';

export const useEndpoint =(stateCode)=>{

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    async function covidEndpoint(){
        
        let state =stateCode;
        const url = "https://api.covidtracking.com/v1/states/"+state+"/daily.json"
        try{
            setIsLoading(true)
            const res = await fetch(url);
            const data = await res.json();
            
            setData(data)
            setIsLoading(false)
        }catch (e){
            console.error(e);
        }
    }

    useEffect(() =>{
        covidEndpoint();
    },[stateCode]);

    return {data, isLoading};

}