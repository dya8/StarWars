import {Link ,useLocation,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export  default function Bespin(props) 
{
    const location =useLocation();
    let result=location.state.results6;

    



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
            
    useEffect(()=>
    {
       fetchData()
    },[])

     return(
        <>
        <h1>Bespin</h1>
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