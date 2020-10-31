import React, {useState, useEffect} from 'react';
import "./Result.css";
import VideoCard from './VideoCard';
import axios from 'axios';
import request from './request';
import FlipMove from 'react-flip-move';

const Result =({selectedOption})=>{
    const [movies, setMovies]= useState([]);

    useEffect(()=>{
        //this code will run once 
         async function fetchData(){

            const res= await axios.get(selectedOption);
            console.log(res);
            setMovies(res.data.results);
            return res;

         }

         fetchData();



    }, [selectedOption]);

    // we put selectedoption because it comes here from the outside so we need to tell it as a dependet



    return(

        
<div className="Results">
    <FlipMove >
       { movies.map((movie)=>(
        <VideoCard Key={movie.id} movie={movie} />
       )) 
        
       }
       </FlipMove>

       {/* { movies.map((movie)=>(
        <VideoCard Key={movie.id} movie={movie} />
       )) 
        
       } */}

        </div>
    )

}

export default Result;