import {useState, useEffect} from 'react';

const OptionPoll = ({option, poll}) => {

    const [vote, setVote] = useState(option.voted);

    useEffect(()=>{
        const votedOther = () => {
            if(poll.votedPoll && option.name === "Otro"){
                var input = document.querySelector('.other-section input');
                document.querySelector(".other-section #sendVote").classList.add('hidden');
                
                input.classList.remove("hidden");
                input.value= option.comment;
                input.disabled = true;
                
            }
        }

        votedOther();
    }, [])

    const voteOption = (e) => {
        e.preventDefault();
        if(!poll.votedPoll){
            e.target.classList.add("voted-option");
            setVote(true);

            if(option.name === "Otro"){
                document.querySelector('.other-section input').classList.remove("hidden");
                document.querySelector('.other-section #sendVote').classList.remove("hidden");
            }else{
                document.querySelector('.other-section').classList.add("hidden");
                document.querySelector('.other-section #sendVote').classList.add("hidden");
                // Aqui va el código para enviar a la base de datos la respuesta
                // Guiandose del id de la encuesta y el id de las opciones

            }
        }else{
            alert("Usted ya participó en esta encuesta");
        }
    }

    return (
        <>
            <div 
                className={`option-poll ${vote ? 'voted-option':''}`}
                onClick={(e)=> voteOption(e)}
            >
                <p>
                    {option.name}
                </p>
            </div>
        </>
    )
}

export default OptionPoll