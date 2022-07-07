import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MoviesDetails() {
  const params = useParams();
  const placeholderImg = "https://image.tmdb.org/t/p/w1280";
  // console.log(params);
  const [moviesDetails, setMoviesDetails] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}?`, {
        params: {
          api_key: "db6d60b6f80485402b525858fc3a7e1f",
        },
      })
      .then((res) => setMoviesDetails(res.data))
      .catch((err) => console.log("err ", err));
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={placeholderImg + moviesDetails.poster_path}
              className="card-img-top"
              alt="..."
              style={{
                width: "100%",
                height: "500px",
                objectFit: "contain",
                margin: "2rem 0",
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="my-5  p-5">
            <h5 className="text-light">{moviesDetails.title}</h5>
            <p className="text-light mt-3">{moviesDetails.overview}</p>
            <h6 className="text-danger mt-5" style={{
              padding:"0.5rem",backgroundColor:"#fff"
              ,width:"20%",textAlign:"center",
              borderRadius:"2rem"
              }}><span className="text-dark">Vote:</span>{moviesDetails.vote_count}</h6>
            <h6 className="text-danger" style={{
              padding:"0.5rem",backgroundColor:"#fff"
              ,width:"40%",textAlign:"center",
              borderRadius:"2rem"
              }}><span className="text-dark">release date:  </span>{moviesDetails.release_date}</h6>
            <h6 className="text-danger" style={{
              padding:"0.5rem",backgroundColor:"#fff"
              ,width:"35%",textAlign:"center",
              borderRadius:"2rem"
              }}><span className="text-dark">popularity:  </span>{moviesDetails.popularity}</h6>
            </div>
          </div>
        </div >
      </div>{" "}
      {/* end of container */}
    </>
  );
}
export default MoviesDetails;
