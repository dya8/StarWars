import {Link ,useLocation,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export  default function Hoth(props) 
{
    const location =useLocation();
    let result=location.state.results4;
   

  
     return(
        <>
        <h1>Hoth</h1>
        <br/>

        <div className="Infobox">
        <div className="card" >
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=''
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          NO DATA AVAILABLE 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Probably perished :/
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
    



</div>



   </>)
    
}