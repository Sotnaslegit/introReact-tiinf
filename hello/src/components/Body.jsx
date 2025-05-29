import React from 'react'
import './Body.css'

function Body(props) {

    console.log(props.characters)

    return (
        <div className='Body'>
            <div className="grid">
                {props.characters.map((character) => (
                    <div className="card">
                        {character.image ? (
                            <img src={character.image} alt={character.name} />
                        ) : (
                            <div className="no_image">Imagem indisponível</div>
                        )}
                        <h2>{character.name}</h2>
                        <p>
                            <strong>Casa:</strong> {character.house || "Desconhecido."}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Body