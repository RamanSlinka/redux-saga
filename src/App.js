import {useDispatch, useSelector} from "react-redux";
import {decreaseCount, increaseCount, getLatestNews} from "./redux/actions/actionCreator";


const App = () => {
    const dispatch = useDispatch();
    const count = useSelector(store => store?.counter?.count)


    const handleIncrease = () => {
        dispatch(increaseCount())
    }

    const handleDecrease = () => {
        dispatch(decreaseCount())
    }

    const handleNews = () => {
        dispatch(getLatestNews())
    }


    return (
        <div className="App">
            <div>
                <button onClick={handleIncrease}>+1</button>
                <button onClick={handleDecrease}>-1</button>
                <button onClick={handleNews}>Get News</button>
            </div>
            <div> {count}</div>
        </div>
    );
}

export default App;
