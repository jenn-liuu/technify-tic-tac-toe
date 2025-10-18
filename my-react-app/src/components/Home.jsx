import React from 'react'; 
import { Link } from 'react-router-dom'; 

export default function Home() {
    return (
        <div className="home">
            <h1>Welcome to Jennifer Liu's Technify Project</h1>
            <p>Click below to play my Tic Tac Toe Game :D:</p>
            <Link to="/game"> 
                <button>Start Game</button>
            </Link>
        </div>
    );
}