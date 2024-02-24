import {Link ,useLocation,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export  default function Endor(props) 
{
    const location =useLocation();
    let result=location.state.results7;
    
    

    let[data0,setData0]=useState({});
   
    
    
    
    let fetchData =() =>
    {
        const URL0=result[0];  
       
        const p0 = axios.get(URL0)
       
        axios.all([p0]).then(
            axios.spread((...allData)=>
            {
                const pe0 = allData[0].data
                



                setData0(pe0)
                
               
              
               }
             ))}
            // console.log(data)
    useEffect(()=>
    {
       fetchData()
    },[])

     return(
        <>
        <h1>Endor</h1>
        <br/>

        <div className="Infobox">
        <div className="card" >
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='data:image/jpeg;base64,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'
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data0.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Height:{data0.height}<br/>
             Mass:{data0.mass}<br/>
            Gender:{data0.gender} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  



</div>


        </>
    )
    
   
}