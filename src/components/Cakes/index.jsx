// import React from 'react'
// import { buyCake } from '../../redux/cake/cakeActions';
// import { connect } from 'react-redux';

// const Cakes = (props) => {
//     return (
//         <>
//             <div>{props.cakesNum} Cakes</div>
//             <button onClick={props.buyCake}>Buy Cakes</button>
//         </>
//     )
// }

// const mapStateProps = state => {
//     return {
//         cakesNum: state.cakesNum
//     }
// }

// const mapDispatchProps = dispatch => {
//     return {
//         buyCake:()=> dispatch(buyCake())
//     }
// }

// export default connect(mapStateProps, mapDispatchProps)(Cakes);



import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../../redux/cake/cakeActions';

const Cakes = () => {

    const cakesNum = useSelector(state=>state.cake.cakesNum);
    const dispatch = useDispatch();

    return (
        <>
            <div>{cakesNum} Cakes</div>
            <button onClick={()=>dispatch(buyCake())} >Buy Cakes</button>
        </>
    )
}

export default Cakes