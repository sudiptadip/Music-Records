import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { GetMusicRecord } from "../Redux/action";

export default function MusicRecords() {
  const dispatch = useDispatch();
  const musicRecord = useSelector((data) => data.musicRecord);
  const location = useLocation();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location || musicRecord.length === 0) {
      const sort = searchParams.get("sort");
      const queryParam = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sort && "year",
          _order: sort,
        },
      };
      dispatch(GetMusicRecord(queryParam));
      console.log(queryParam);
    }
  }, [location.search]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {musicRecord.length > 0 &&
        musicRecord.map((album) => {
          return (
            <div
              key={album.id}
              style={{
                border: "1px solid blue",
                marginBottom: "50px",
                width: "300px",
                marginRight: "50px",
              }}
            >
              <div>
                <img src={album.img} alt="" />
              </div>
              <div>
                <h1>{album.name}</h1>
              </div>
              <div>
                <h2>{album.genre}</h2>
              </div>
              <div>
                <h3>{album.year}</h3>
              </div>
            </div>
          );
        })}
    </div>
  );
}
