import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key":'c8836d900fmsh08ef8d43afd665fp17355fjsneaf9f87f2b54' ,
    "X-RapidAPI-Host":  'youtube-v31.p.rapidapi.com'
  },
};

export const fetchFromAPI = async(url)=>{
 const {data}=await axios.get(`${BASE_URL}/${url}`, options);   
 return data;
}