import axios from 'axios';
const baseUrl = 'https://covid19.mathdro.id/api';

export const FetchData = async () => {
    try{
        const { data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(baseUrl);
        
        return {confirmed, recovered, deaths, lastUpdate};
    }
    catch(error){

    }
}