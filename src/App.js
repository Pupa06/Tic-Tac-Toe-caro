import "./App.css";
// import { YoutubeData } from "./YoutubeData";

// function App() {
//     return (
//         <div className="youtube-list">
//             <YoutubeItem
//                 image="https://images.unsplash.com/photo-1682595950157-8d1cc0ef388f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//                 avatar="https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
//                 author="pipi"
//                 title="I am frontend developer"
//             ></YoutubeItem>
//             <YoutubeItem
//                 image="https://images.unsplash.com/photo-1682277149061-69bb5222036f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
//                 avatar="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//                 author="pipi"
//                 title="I am frontend developer"
//             ></YoutubeItem>
//             <YoutubeItem
//                 image="https://images.unsplash.com/photo-1682286004970-1fdafd1e1e08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//                 avatar="https://images.unsplash.com/photo-1619182597083-17bda72c1d56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
//                 author="pipi"
//                 title="I am frontend developer"
//             ></YoutubeItem>
//             <YoutubeItem
//                 image="https://images.unsplash.com/photo-1682547093701-e34cf8342331?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//                 avatar="https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//                 author="pipi"
//                 title="I am frontend developer"
//             ></YoutubeItem>
//         </div>

//     )
// };

// export default App;

// function YoutubeItem(props) {
//     return (
//         <div className="youtube-item">
//             <div className="youtube-image">
//                 <img src={props.image} alt="" />
//             </div>
//             <div className="youtube-footer">
//                 <img className="youtube-avatar" src={props.avatar} alt="" />
//                 <div className="youtube-info">
//                     <h3 className="youtube-title">{props.title || 'This is example of title'}</h3>
//                     <h4 className="youtube-author">{props.author || 'This is example of author name'}</h4>
//                 </div>

//             </div>
//         </div>
//     )
// }

import { useState } from "react";
function Square({ value, onSquareClick }) {
    return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    
    const [squares, setSquares] = useState(Array(25).fill(null));
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O"
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            </div>
            <div className="board-row">
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
            </div>
            <div className="board-row">
                <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
                <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
                <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
                <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
                <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
            </div>
            <div className="board-row">
                <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
                <Square value={squares[16]} onSquareClick={() => handleClick(16)} />
                <Square value={squares[17]} onSquareClick={() => handleClick(17)} />
                <Square value={squares[18]} onSquareClick={() => handleClick(18)} />
                <Square value={squares[19]} onSquareClick={() => handleClick(19)} />
            </div>
            <div className="board-row">
                <Square value={squares[20]} onSquareClick={() => handleClick(20)} />
                <Square value={squares[21]} onSquareClick={() => handleClick(21)} />
                <Square value={squares[22]} onSquareClick={() => handleClick(22)} />
                <Square value={squares[23]} onSquareClick={() => handleClick(23)} />
                <Square value={squares[24]} onSquareClick={() => handleClick(24)} />
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d, e] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
            return squares[a];
        }

    }
    return null;
}

