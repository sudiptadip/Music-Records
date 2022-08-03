import axios from "axios"
import { GET_MUSIC_RECORD_FAILURE, GET_MUSIC_RECORD_REQUEST, GET_MUSIC_RECORD_SUCCESS } from "./actionType"

export const GetMusicRecord = (params) => dispatch => {
    dispatch({type: GET_MUSIC_RECORD_REQUEST})
    return axios.get("http://localhost:8080/albums",params).then((r)=>{
        return dispatch({type: GET_MUSIC_RECORD_SUCCESS,payload: r.data})
    }).catch((r)=>{
        return dispatch({type: GET_MUSIC_RECORD_FAILURE})
    })
}