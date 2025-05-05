import Score from "./Score";
export default function Learner({name, bio, scores}){
   
   let scoreList = scores.map((el, i)=>{return <score key={i}{...el}/>})
    return(
        <div>
        <h3>Learner</h3>
        <p>{bio}</p>
        <ul>
            
                {Score}
            
        </ul>

        </div>
    );
};