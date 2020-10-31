import React, { forwardRef } from 'react';
import "./VideoCard.css";
import Movie from './Movie';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from "@material-ui/icons";

const base_url = "https://image.tmdb.org/t/p/original/"




const VideoCard = forwardRef(({ movie }, ref) => {

    return (
        <div ref={ref} className="VideoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt='Movies Images' />
            <TextTruncate
                line={1}
                element="p"
                truncateText='...'
                text={movie.overview}
                textTruncateChild={<a  href={<Movie />}>Read on</a>}
            />
            {/* <p>{movie.release_date || movie.first_air_date}</p> */}
            <h3>{movie.original_title || movie.name || movie.original_name}</h3>
            <p className="Stats">
                {movie.release_date || movie.first_air_date}
                <ThumbUpSharp />

                {movie.vote_count}</p>

               
        </div>
    )

});

export default VideoCard;