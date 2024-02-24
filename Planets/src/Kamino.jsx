import {Link ,useLocation,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export  default function Kamino(props) 
{
    const location =useLocation();
    let result=location.state.results10;
   



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
            // console.log(data)
    useEffect(()=>
    {
       fetchData()
    },[])

     return(
        <>
        <h1>Kamino</h1>
        <br/>

        <div className="Infobox">
        <div className="card" >
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhUYGBgYHBgYGhoaHBgYHBoaGRocGhoeGBocIS4lHB4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTQBDAwMEA8QHhISHjQrJCs0NDQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQECAwAGB//EAEAQAAIBAgQDBgMGAwcEAwEAAAECEQADBBIhMQVBUSJhcYGRsTKhwQYTQlLR8GJy4RQjM4KSsvEWQ6LSJFPiFf/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAJxEBAQACAgICAAUFAAAAAAAAAAECESExA0ESUSIyYXGBBBNCkaH/2gAMAwEAAhEDEQA/APkL16ngDgWboKgjId40rzCIXIUbmmmEuNbS5qcwEaHSsrOFwlrq6urQnVUmuNcKA6pAroqaAiKqauapQHVNcKmgIipFdFWUUBtdTsIZOuY93xRp6VkBRF0dhPBv95rECls1YqYrVLZOwrZcI3SpuUg0FqQaIbCMOXpWBWNxFEsvQ0kCtVFZrWy0qcSFmrxULU1KlIqrVeqtQELUmuWpagKzV6otXoJUmtBWTVZTQHMO6aP+zKTiE356DTl1oNwTt0rbgl8JeRmYqAeQzfKDTnsVneWHbxPvVC9b4xpdyI1ZjptqeVDikGc61eKrcGtQSaZJ4d8Y7gzegJptYtr/AGK40LmMa/i76UYDQueiP7V6T7OW0dGVlkFTvDcj1FVSjx5qtbYm3ldl6MR86yqyRFWAqVFWFLZqxUxVq6kFCKpWxFZRThVIqYrqkUzRVlFRFXQUqBN1exb8H/3motINzRF5B91aM/8A2D0YH60KG1qOxeBybbQNqIs2yaxsRG/P4RTbDJDZTy08+fzrPKFbQzYRwJg6VXE4GUV/iVhvEFTMa/rXusPg0a3rExoNNd68vj8KEaAP3+xU9HK8netlDB8q623KmGPtSpaNj/T9+FKwa1xvyh9DVSqMKrbeamkpEVDVdBUMKAzU1bepC1IFAUqRXMKmKCVc+lXUA1zLXIINBq35ERR3AkBDsBLqrEggEFeekaRO9DXnitPs8f78KWyB1ZC3QNAJ+dVjynJgdq5a9R9sfszawgttZuF1ccyGnScwI5V5cUZY6Eu0XRNZZ61fT51QRQKK4Tgi63iCsi2xg6GBBMU74LYdLD3FcdlSYKiNPnQv2fQiziTB/wAJuh/8TWeC42UtNaZMyupEgwR+tLLdE4eevXMzFjuxJ9ahYrQWDyI9qYHgrm011GDqglgJBUdau2Qpjb0XDL0NT2e+qBamgOiucdPOtbeHdtlPtRFrh5O5ilcpBoCAahhTtOHIN5PnRNjCr+UegqfnD+LzqoTyJ8jWy4VyNFPpFP1RRzAHfGtVOKsCe0vlr7UfO3qH8fslGAf8vtV1wL9B605XiFv8IZvBWP0rn4ksaW3P+X9aXyy+hqFuNWLNoSJBcESNy0n2FAo1EY68zKAZC5nZVPLNv6wPSgcp61cnCbDKzeAMjlR+GxOo5+P/ADSVUuhdBIPQKSY+dZHEONCSD6EUXDY49vo+H4kAkSSNYErI2318tBypXj8ZmOsDv39q8vg71xtAzkkwACxJ7gBWl/CXiSXYifzMWPoCfnFTcJ7OavUFYi/IK9QRPlFL8RgnQwwAMBoncESCK1Wwq6kknvOnp/WnmOwov2rBBhkQqeyfzSJPmfWjjHpVl9vOKYrdetXucMuLykd1UtyvZYEc9aLz0UaKulQFonKI0rFzUbUzVa4pTLg+HR3h5iUGm8MwB59Kyx9kI7qNlZlHgCQKPlzoaAEVVq0YVRlqoSrGrrVMtQKCZ3WMmteEsfvRG8GNBWV9edb8FRTdVWEhpU9oLoR31c6TXpPtXhba2sPcDk3HVs6FpC6nZdk8BFearMrDHc6ka9Aa1WjKjGKXKzmtmWTAo25wG8sZ0CkgGCwBg7SKncOo4HjvulutnAYrlVSAc2Ywd+6macCZ7P3qOsAQQdIjvrzFnrGk16zAY/LYZHzAOuVSADuTqASJ6TSy4OPP4W1nfKADoTpTXAXRbtuomXUju9KF4dhTbZmVuWXbWDBolbVRnq39F42zrsA2DzDUDy3HjWqYJV5VrdxKLpMn8o1P9KFuYtidwgPXVvTl86c+VLgU7BdyKGfHL+GW8B9dqGezLAGSTJBbX0A2rlU9oGeyRtpofCqmMTut/wC0t/An8xk+QqWcZczPcYDfIMo+cTRGDwo6UVew4KsI3BFT85KeqAuYMDNltqYjVmZidAdo7+tcmoGWFzW84yqNGXca70VgLk2wZ1Oh8tKW2m0UZipQsAR0J6VUtu4BVtWYjtNDIH0gQc2UxRVrhwIku5/zN9KW3MQFZIOgUr6madYbFCKnK2dHjp53iFsqYk6EjU9CQJ9PnQgNHcV+Nj1b6UCRWuPTO8VujzA8fnH6Cu4m0sp3ORAf8oy+yisEMGrYw6r/AC/U1U7O3eIrhfxr4/Q00xrwrERMiNdecwOe3t1pXwh4dSO8eqsPrTAYb7xzOwqMu+V45axoBZYiTP6U7w2JZLalUZtwcupERsOdBXcKEOmxo3D4QOgUsymWYFTBGpX6VOVmpUY9t7PFbTmJyt0bsn56GiHRG3APjSrEYO4u5S6OjqJ8mFB2xlBIZ7MEAgnMuYif340pJelc+za5w4a5dPmPKl97COu4nv3rS3xG4oBZcy/mQyPTlTLDYxbglSD7+YpasG0/ZnClzos9u2NBJnNOnpQHGkKOxO5ZiZ05mm2GvvbOa2xXWTGxI6ihOMRcQHIQ43jWe8c6zu5lLJ+7THVxu/4VTChEtujIRckPnXNB5BY112pLiEyuy6aEjTbypjw/Esi2wVDAvs3Lp3g71lxGwovOqiO0fKdedXvSO6CwwDOqTGYxMTFaY7CGy7IxnKdxseda3ksrke0zB1ZQyEZgR+ZW+hrbjV0PcLb7Ce8CDV7LRNfrXhF0LeQsTAMaAE66bHxrHEHlVMMoLqDqCRpVzpN7FXUKuwO4Jn1qWO1WKbnxqjnaoOHHAsKcr34JKRk/m3k+Are+z3DnMknnT77PW1GGVdJZnJ8NqXpj7mHm2EWJJ131NZW7q5OHm8JgSF7XMgx4daPS3yrV8qLLHw6k9AOdL7+IZtNVHQasfEj4ffwqt3IuIIfEKhIHab8o+p2HnQV7EXH0H+lNP9Tb+1VVCGVSIVp26/xEe9NsKihdBGlPjHkdkyWWVlVoAbaDzHKaObBgoQBEj/io4iylecg5gwBMEdY5UdgnDICCDOv0Pz9xRlldbEk6JoJQNzQ6+W/yrZgFdTyeVPdIkfOtb1oq7oNri5h47NQ95WKtzyMQy84GqsveJqpyXRthCAPChcfjMugoVMXpPWgMRdk1Mw55O5cLJiCJA2mawz6+dRzqhatZGazPNFWcSQN6yw2Ee5OVSco1Og01jfwNYXVIgEQKepeC2JxD5hm6n3FYoKg32KqpMhZieU8p6Ve24Oh08f1o1oW7UddPCpxf4D1X2ZvpFXuLVcUOwh/mHsfrTh+mnDD2x/MK9JgrYGbvJ+Wlea4X8Y8RXpcGQqszEAAkknQASRJPiRWfkH+P8ux+sE7iPQCBVuGjU/wzOvWIj50HjOIKzMlsZzOjahQOonU6x3d+tF4W4qIvYbP+Ni/ZbfZcvZ5c+VRZZjqjG8jb8AEnkJ9KV3AVtABe25zEfxOeyD3AR6UwxF1GtjM+Viyg28pMrmE9vbUb9xoZLqPcUzmObskfCGIJhTzgA+tTjLGlsoO7hQrqFZlKiDB0yoNZHP8ArQF1YJLKVPJ0J0/mFO8OM5ZvzHKNfwr+rTr0FUxVvZF0LGB3DmfIT8qqZ2XQuIWxi7igMw+8QicyjtR/EtMcPi1uCVYH3HiN6Eu4PUFHKsoCiNoG0jbr60BfWG7f90/J1+Fv5ulOWZdFdw6u4VWIMaqQw8R1oHiVtnuM+WFMEyR4GOtRZ4kykLdAHRxqp8elN1hhyIPmDSs0I81aSHZukR4mrnbemON4cSvY0kyR10jSgrHDWkhWDHbKSFPoaYpTiAATOutdho+8TxFdiviYEQQdvlXWj208q19I9j5kmBG/XWh7g1osLDH1q/EMCUytyImst8qG4DiZTIoPIiseKMxuE67ClfKeYr1mAxNq9bVnAzAZT5f81NipSJFLlmBBI0zHfwVRsP3JrN0Npgx1U6N3dDU3E+5YMvwnRh076YXwGXkVI9adv+hoDctZwwHMkDw5fr51tgbpZCpkMsg+VZ8OfI5tv/lPUcvOr4tfu3FwfCYD/Q0X6E+3cPeVyEdpNCOv7mow1z7t2TkTmTun4hUX1ZHW4us6MOo5GpvL96wZFPZOjHQeZ/Sjv9g24tqFZfiQgjvB0IpdicQM5dTuII76YLgp+Ns3cNB+vtQGKKCcvy0ox10VLzI0qpU1Yv0rkRmIAGp5DU1shTJV1t1q9sqSrCCNxURROeSvDXA5s2TfN8OwHfvoKPvohEb9ZABmdt9dIpY67RvINEpcY7I3mIpZQthsRgGXVQWXu3H6iggafW3uj/t6eIH1rr+HL72RPXMAaJl9ghYxsatcvMVCnZZjzgH/AGimzcIn4VZR3sp158qj/wDlhRmZXIG8MtVuDZZhWYMCu/hPypjawVxzLmP5tf8ASo0Hyphbt5V7NuCY/EoHnCmatku8kUf5v/zU2ja+GwyIIHmTua0d4rFrN6JATwliR46isRbv/lQ+En3eo+O+6G+NuA22hRoBPqBI79R6UiGwHj8tKY4kXQCGWEMahYGhBgmT3UEg/fnWmM1AoV/flX0A4C03aBhssBgZ06iZHIeleBbn51fC4y4n+G5X+EmVP+U6Vh/UeLLya+N1Y38Plxwt+U3t7IcMZQYcP0MBTHMGNCfSlnE7WkOMqwSzEaZRyB5kmAB30GPtHeA/w0PeCw9AG0qg+1LGQ1pSNiJf5yTWGHj8+N51Y2yy8OU44qcVbYAspD2yNVMRAH4Ty0FZ2Q9rW3LKILWye0uYTpReAYXQCqhFzHsiSOvpJ27qvxDA7OrZXGzDn/N1FdMy9VhcRmAxqXVlT4g7g99Y8R4clwaiGGzD96+FKr1shlYEJfIDFRIVtdjPPSYppw/iQeVYZXX4lPuOtGtcwt/bzOKwDo0EeBGx8KztWmDKY6V6/F4dXWGEj97dK8txDBG2eZU7H6Grxy2izRvxFV7LqwM6GCNCK3tpnQDMNuZGleVzV1K4bOZGV1CCeooQXiNKzRSCDBiR1rXEWu0aetFt6LEZQpzRl5zS62pH93nhWJyMQY0jQ602UpdTSCNiN6WOmUNaf4fiRuanl+lZ4/TSqX0ZgZEXLZ1H75Vu143FyhTqO1Ow8elaW8PnIdzEALpozR16D5+9aX7iqI0VRy5eJPWi31BpS1hxAB1jSPwj9fP0q2IxiKNTJE7bD0rG9nKZgQAYyjfNrHLb96Vph0VlkAENIPOSNwetLXujf0DvXXdgpMKwJEc4Ovn60LfthYPfB8DRuIVmUOqgqpJGsHTpp8qzuqGUNyYVcqbC5l1jrXqeBcOyDO3xH5dwpFw8qGDOQI0E6bc6Lxv2hPw2RP8AER/tX6n0rHzY55/gw691t4bjh+LL+IYfabDJlF0MFaQCD+KTGnUj2mvPEfvurG85ftMWY8yTJHiDsPCr4d5Ecx8638PjvjxmNu2PlzmeXyk00c7DqVHzFep4Tg1btvJQMEgGCxInSeWq66fFMiK8kz9tB0YH9K9Hw7HBFAy5tZaWKgrAGUxqQYE9Rp1q8te2VM8Thgq/eIqqpOUCS0Eqx7OeS3w/GdPy9aAUVtjMc15y7BRPJRAGgHsB6VFsVnldhwU1GLAKMg1YjQDv5t0HvypxbwhmLZJV+wMwgtBB21A1jYmleFwv/wAy5bfYta5j8SciNImiQ9FmEvDso0qwABU84G6nmKMLwJJ0FDcas5MQg6O6+hYD5UfhrRbr7fOnlAvZAOxB8NfWK1FoHUQfAz8xRuA4cdyxPjOnpWuJwuQn5f8APPnUWHZr2S421KOP4SfMaj5ivMDnXsbmoI8q8e6x7VeBMn2qgrrriYqFatQlWk931rU2geVVWtnaBvSohlg+JJaUKEbTTcanmZre3xFLjqCCOkxBblJ9u+kLNA03NUmNJ1OtZ/24r5V6jFYdL3ZZxm5ajMD3c6TYq2wYK5yuPgu/m7m7/wB+I1oagKdQR4zy86LxfEmbIGVTEhgwBBZSBJB205d9KS43W173N6FYPiRbsPo4/wDLwoi8gYQdQaT4jK2UQy/kYmSGn4WPoPrRGDxZJKvow37+8UWe4WyzG4HIe47fp40AUr1N9AQQRoaRXk+7aCAynrzHceRq8ctpsPb/AA9hbVsugVfalroGM034JxHNFh2LI8qhb4kfkrHmDyNK8XYKOy9DWd4vK5dwRauEOHtjV5DJr8XOKPXCEHO/xcuYX+tE/wBqcklURTJ1CKeZG8Ve3eLaOqnuyrHLuqMsjkL77kAwCTv41TCqjrmiS0gzrB6f1opmcEAIuVmYAicwgcwBt30M1gpczICyP8SwRH8QkCnOhQdoMrrabUK2Ze9SI+Var/dXSv4HMjuauxqlpIGUoZRuvUHoKricSjJ2tH37ww2NV2XSLLZHZD8J7S/pQpuhcycple6eVY4nGl8sxI5ihHadzVTH7Tck3mBO9Rbt85PlUHStLN0bQa0ibdtbcjcz4ipe2PiXQ9ORrVFqbqwKCAW3m4D304V9aQHc0z4exKnuNGUB1aejMM+tAWHmiUeKy0DvDPSu/ils4ppZVLrYdG1IDIDznroQe/uqzcQRPiYDu5+g1NBY7HpfRkW0zmDlcgKFbqCdfLSaeIU4riPvbiQ2d84Y5R1JJp9hOleawn3lmZslgTOZSCYgQMu5imeC41amGJU8wwKx4nb50ZT6J73goEaisuNKIJAiheFY5coKkMORBBHqKx4nis01CvRM3t7V5LHRneCCMzQQdCCTEGnnF70Iw/PC+Uyf9sedecunsnwrTCeyA3G1/fl7VdXodjrXBq0A5XgVI6kyTQbXDV7VzrQG7OdANyawe7LEjw8qrcuSayFAMeH3irgyRm7MjcZtAfWrYoFAA3xZi08ipEepiaDRoII3EEeVejw+BS4MzHNnZICwWRSBmYrIJInYdKi9tZ1pVkBRQVHaUsSDM5mKjYwDofrype1st2Se0vwuOYHInrTa7gQgUK5knIELBiOzKyQABJzLGuonYzSxF+Lbc78p1kdDrUzg7NwRg8RmBB0YaMO/qK7E2g4g/wDBoIk/ENLiaMPzL1/f6UdYuhlDCneOUF2GtMHVY7WdAI6yNRXoMfYJcnLVeDlVxCMwmJCzsGOgJ9vOvU3TqeyPQ1lnlyvHHh5G3jrrfCnUy0nfwj3rNWus4D3VQb6BQd9hP607WxyFIOMYOXAiZ28aWOUt0LLI9LwpEUyXDbAEsDprvTYYhCdGBPca8JheABh2pBqzcAUbsflSuOO+/wDg+V+nrsbjQm5ivK43iiux96XXOGgHSsjw+OdXMcZ7K5Vu7isWIrFrQGg1rMpWkiLWlyIjadKrbkaHltWTptHXrzo22NACJFWSybaVLGRUBI1G373rjSBU4gmjuGXACwImYI7oOvyNA3viPjWuDaGHfpVXpJ2LlQcSxKopgsTmbmARy6bEzvtqNZxM7VHD9XZ+Ww+X0iok9ma2sIg2XzbU+dMLdih7LCmFm8Iqe01VbVanBK4hlDeImrhppjgUmKRx5zFYT+yOt9MwSYuICdj6zpO+xA605x1sqN+4jWQTtJiNtd+dPeKcMR7LI/41iY+FpkGJ1iAa8Pw2+WthG+NDkad+zos+XPrNF5hg+Nvog8T7frSy1ZzkLMZyFneJ02o/jfxqOiz6k/pQNu9kKvAOU5o65TNXPy8CDV+y5Qyxzjopy+vWscR9m2gspKiYg9ru0y6x5UyT7UoVlkeeeUgx6xVv+qrXNLnov/tWe/I01iVYb7M3C0vGUa9kyT3Cdq7G8FVELSykcid+gFN/+q7MfC8/yj/2rz3FeLffNOschVS528lZjIWC2TXfct09Kh26VZWPU1pylYqRtJHgdO400tYnIqq1ossaGcpnSSOu3PpQGGxOUjNLLOo5+IpncIuCVIYd26x1XcD5d9KjaycStnZ7iR+FwHHry9KyDhi2syFOnXmY6VjdsgoQdTpBO4qmCsusEAnPmUEcgDBJPTf0pWTSscrKc37KE5gO0BEyw9jrS9lNq5oDlbcDkf3+9KNuJrVHI5+8VnjV2My+teo4Zxy392PvCAw0ObnGx9PnNeXNteUjzrvux+xRZKUtj2SWYpNxdP7xP5q9G3w15vjDf3qeNc+Pa70YGFml+JvTRlts00NiEAE04KWPQ94xV8c5VQ3MtAHcBJ9xQLXGMzGxrbGe00OGqtdVR+g9a2Ztzh5QN/FrvIEad0TV1QxuR3j961vYTUryII89x7Vph8KxBMgdBrrSmX2u+O+gYLKfzfI+mxqc4jN0n9+tbYhCu4j2oS92Vfv/AFpzlnZouJq9tiCCORmqVIq0mClnOpAXu/etNbChVCjYUowbdnwPvRyXQN2A8xWeRmltqKttSm1jUG7L6iil4jb/ADip1SNrZmnvC3gia8tb4nZG7j0Y+wo3D8esL/3B/pf6LS1Tj3XE3BQb6Dfy9K+ecUweZy6Nkfkw5+P78ZptiPtLZIA++RgIAgXBIInUFRz0678qTXOJWmOlxfWPenzDpHjXcu2cgsNDtyEctKDxbQCPKiL1zM7N1JPqdKCxFwhhGhBmfDatITfg2EZ3BXQKQSSoYSCCBB0NeqxX3aKSQvoK87wPFhSwdoB1k9RofpUcQxhuE5ZIHTX2rLOW5fo0xskC429nYmABQjKKu1VNaThFYkVoBVW3rYW9FPIsR6AH61QG2EUQDGtNsbwQZVu2zlI3CkTpzUzBPd3GleKRcyLqZAPKZPTrrRYxz23ZFuFlgbDmOYBmD/Wp2QR7tyO0ocTo47JPj3+ImnuHtkW1EAaA+utIcPdJzAySxga7EmJ+delxLhFjaBHkKz8vqNMPZfiDl50ta6X7h71XFYrO2m2w76Mt28glj2iO7s9YPXvok1BbtQ2YGpiOXTx6VIHcfU/rRK2ogtHWNZ1Hy967+0INI96Nk9Lex6ouZ2CjbqSeijcnupJfutecOqEKoIE/Ee8xoPCorqymM1toZYLRZO9DYxsxA8/361FdUTsyrjKwLQ6h39WCj/YaBuMMpAO+lRXVtOoJ7DmsGGoHn6V1dW0YmiDWZjUR3meXcKYWNJE89B0HKurqyydfjdirOZdYIPh8xyrzuLf8PNTB8tK6uqvGy8+M3Agqwiurq2cy6gVorAdK6upG0W731dLojfr7murqDXF0dRUi8OtdXUBP3g6/WuBU8h4mK6uoCCg5MQfX5GgnaW+XjXV1KCo/F5+9NOFCGYR+H2P9a6uqc/ynj2vxWyMofnoD4UomurqWH5Ty7Znet1c5SO/N5gEfWurqupjV77ZlaB2QAPKuW/LMzaSI0murqIZxwjh7QtxgAslgDuT+E+HP0ofjGOznIp0/EfpXV1ZTnLleXE4TwvDafetsDCjmSNzWltszF47IMCdcx5nwHvXV1P7SCxmMOYgHxrAXD+b3rq6r0l//2Q=='
          
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
          image='data:image/jpeg;base64,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'
          
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
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDuMbvZUBlDv3-9nsfe0eZ4PoKdHSWRdocQ&usqp=CAU'
          
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