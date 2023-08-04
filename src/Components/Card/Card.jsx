import Icon1 from '../Icon1/Icon1';
import './Card.css';
function Card({gameEnd,player,onPlay,index}){
   let icon1=<Icon1 />
   if(player=='X'){
    icon1=<Icon1 name="cross"/>
   }
   else if(player=='O'){
    icon1=<Icon1 name="circle"/>
   }
   return (
    <div className='card' onClick={()=> !gameEnd && player=="" && onPlay(index)}>
        {icon1}
    </div>
   )
}
 export default Card;