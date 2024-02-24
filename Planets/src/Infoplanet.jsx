import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import axios from "axios";
import {useState ,useEffect } from "react";
import {Link ,useNavigate} from 'react-router-dom'
import Infopeople from './Infopeople';

export  default function Infoplanet() 
{
   let[myData,setMyData]=useState([{}]);
   let [myResult,setMyResult]=useState([]);
   const result={};
   const navigate=useNavigate();
 
 useEffect(()=>{
        axios
        .get("https://swapi.dev/api/planets")
        .then((res)=>
          setMyData(res.data.results) 
       
      
        )
   },[]);
 
  
  

 //console.log(result)
 


  let getclick=()=>
   {
    
    navigate("/people",{state :{results:result}})
    
   }
 


  

    return(
  <>
   <h1>PLANETS INFO</h1>
 
   <div className="Infobox">
    {
      myData.map( (post,index) =>{
        const key=index;
        result[key]=post.residents;
     
      return(
   <div className="card" key={index}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {post.name}
          <StarIcon/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          CLIMATE:{post.climate}
          <br></br>
          POPULATION:{post.population}
          <br></br>
          TERRAIN:{post.terrain}
          <br></br>
          RESIDENTS
          <br></br>
          Click here to know more!!
          <br></br>
          <Button variant="contained"onClick={getclick} >Explore</Button>          




        </Typography>
      </CardContent>
      
    </Card>
   
    </div>
      )
    })
  }
   </div>
  
  </>
  );
}
   
   
