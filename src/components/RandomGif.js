import "../styles_components/random-gif.css";
import {useSelector, useDispatch} from "react-redux";
import { setUrlGif, setLoading, setError } from "../source/randomGifSlice";
import {Box, Button, CircularProgress} from "@material-ui/core";
import {useEffect} from "react";

const getNewGif = () => async (dispatch, getState) => {
    dispatch(setError(false))
    dispatch(setLoading(true))
    try {
        const {random: {url}} = getState();
        const response = await fetch(url);
        if (!response.ok) {
            dispatch(setError(true))
            throw new Error("ошибка загрузки гифки...")
        }
        const data = await response.json();
        dispatch(setUrlGif(data.data['image_url']));
    } catch (e) {
        console.warn(e.message);
    } finally {
        dispatch(setLoading(false))
    }
}

const RandomGif = () => {
    const {urlGif, isLoading, isError} = useSelector(state => state.random);
    const dispatch = useDispatch();

    const clickListener = () => {
        dispatch(getNewGif());
    }

    useEffect(() => {
        if (!urlGif) {
            clickListener();
        }
    }, []);

    return (<div className="image-container">
                <Box className="image-wrapper">
                    {isError && <p>ошибка загрузки, повторите попытку</p>}
                    {isLoading && !isError && <CircularProgress color="info.main"/>}
                    {!isLoading && urlGif && !isError && <img src={urlGif} alt="gif" className="random-image"/>}
                </Box>
                <div className="image-footer">
                    <Button  variant="contained" color="primary" onClick={clickListener} disabled={isLoading}>сменить</Button>
                </div>
            </div>);
}

export default RandomGif;