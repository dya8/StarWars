import {Link ,useLocation,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export  default function Coruscant(props) 
{
    const location =useLocation();
    let result=location.state.results2;
   



    let[data0,setData0]=useState({});
    let[data1,setData1]=useState({});
    let[data2,setData2]=useState({});
    
    
    
    let fetchData =() =>
    {
        const URL0=result[0];  
        const URL1=result[1];
        const URL2=result[2];
        

        const p0 = axios.get(URL0)
        const p1 = axios.get(URL1)
        const p2 = axios.get(URL2)
       
        axios.all([p0,p1,p2]).then(
            axios.spread((...allData)=>
            {
                const pe0 = allData[0].data
                const pe1 = allData[1].data
                const pe2 = allData[2].data
              



                setData0(pe0)
                setData1(pe1)
                setData2(pe2)
             
                
               
              
               }
             ))}
           
    useEffect(()=>
    {
       fetchData()
    },[])

     return(
        <>
        <h1>Alderaan</h1>
        <br/>

        <div className="Infobox">
        <div className="card" >
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzJ8jRjPXOEYiWhXHwZxT8aJXc9DS-WtV-Q&usqp=CAU'
          
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
    <div className="card" >
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUcz9OBAZ99igBZA8iCLKi4PMLPXgMUEz_g&usqp=CAU'
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data1.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Height:{data1.height}<br/>
             Mass:{data1.mass}<br/>
            Gender:{data1.gender} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
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
          {data2.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Height:{data2.height}<br/>
             Mass:{data2.mass}<br/>
            Gender:{data2.gender} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    



</div>


        </>
    )
}