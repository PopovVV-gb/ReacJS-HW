import { useCallback, useEffect } from "react";
import { CircularProgress } from '@material-ui/core';
import './fatCats.css'
import { useDispatch, useSelector } from "react-redux";
import { loadCatsWithThunk } from "../../store/cats/actions";
import { getCats } from "../../store/cats/selectors";

export const CatsList = () => {
    const catsState = useSelector(getCats());
    const dispatch = useDispatch();
    const renderCat = useCallback(
        (cat) => <li key={cat.id} className='item'><img src={cat.img} alt={`${cat.tags[0]} cat`}></img></li>,
        []
    );
    
    const loadCats = () => {
        dispatch(loadCatsWithThunk());
    }
    
    useEffect(() => {
        loadCats();
    }, []);

    if (catsState.isLoading) {
        return (
            <div className="pageWrapper">
                <h3>Загружаем котиков</h3>
                <CircularProgress />
            </div>
        )
    }
    
    if (catsState.error) {
        return (
            <div className="pageWrapper">
                <h3>Произошла ошибка при загрузке котиков</h3>
                <button onClick={loadCats}>Попробовать загрузить котиков еще раз</button>
            </div>
        );
    } else {    
        return (
        <div className="pageWrapper">
            <h1>Просто полюбуйтесь на толстых котиков</h1>
            <ul>{catsState.cats.map(renderCat)}</ul>
        </div>
        )
    }
    
};