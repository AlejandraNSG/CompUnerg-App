import OptionPoll from './OptionPoll.jsx';

const Poll = ({poll}) => {
    return (
        <>
            <div className="poll-section">
                <div className="poll-content">
                    <div className="description-content">
                        <div className="info-content">
                            <div className="title-content">
                                <p className="title">
                                    {poll.title}
                                </p>
                            </div>
                            <div className="description-info">
                                <p className="description">
                                    {poll.description}
                                </p>
                            </div>
                        </div>

                        <div className="votes-content">
                            <p className="title">
                                Cantidad de Votos
                            </p>
                            <p className="votes">
                                {poll.votes}
                            </p>
                        </div>
                    </div>

                    <div className="poll">
                        {
                            poll.options.map((option, i) => {
                                return <OptionPoll key={i} option={option} poll={poll}/>
                            })
                        }
                        <div className="other-section">
                            <input 
                                id="other" 
                                type="text" 
                                name="other" 
                                className="form-control hidden"
                                placeholder='Escriba su propuesta aquí...'
                            />
                            <button id="sendVote" className='btn rounded hidden'>
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poll