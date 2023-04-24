import { BiErrorAlt } from 'react-icons/bi';
const icon = <BiErrorAlt size={68} color='red' />;


const error = ({text,msg}) => {
    return (
        <div className="loader">
           <span className="error">
           {icon} 
           </span>
           <p>
            could Not be Loaded: {msg} {text} 
           </p>
        </div>
    )
}

export default error
