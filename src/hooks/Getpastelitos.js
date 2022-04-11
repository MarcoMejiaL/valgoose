import { useState, useEffect } from "react";
import axios from "axios";

const Getpastelitos = (API)=>{
const [pastelitos, setPastelitos] = useState([])

useEffect(async()=>{
    const response = await axios(API)
    setPastelitos(response.data)
}, [])
return pastelitos
}

export default Getpastelitos
  