
import { useSelector, useDispatch } from 'react-redux';
import { buyIce } from '../../redux/iceCream/iceActions';

const IceCream = () => {

    const iceNum = useSelector(state=>state.icecream.iceNum);
    const dispatch = useDispatch();

    return (
        <>
            <div>{iceNum} Cakes</div>
            <button onClick={()=>dispatch(buyIce())} >Buy Cakes</button>
        </>
    )
}

export default IceCream