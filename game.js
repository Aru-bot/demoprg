const state={
    scores: {
        player1: 0,
        player2: 0  
    },
    squares: Array(9).fill(null),
    xIsNext: true,
 };

 //object was created above

 function calculateWinner(squares)
 {
    const winning_lines =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i=0; i<winning_lines.length; i++)
    {
        const [a, b, c]= winning_lines[i];
        if(squares[a] & squares[a]=== squares[b] && squares[b]=== squares[c])
        {
            showWinner(squares[a]);
            setTimeout(()=>ResetBoard(squares[a]),1000 );
            return squares[a];
        }
    }
    if(!squares.includes(null))
    {
        showWinner(null);
        setInterval(() => ResetBoard(null,1000));
       return;
    }
    return null;
 }


    // Check if the elements exist before accessing their properties
function ResetBoard(winner) {
    if (winner) {
      winner === 'X' ? state.scores.player1++ : state.scores.player2++;
      state.squares = Array(9).fill(null);
      state.xIsNext = true;
      
      document.getElementById('player1Score').textContent(state.scores.player1);
      document.getElementById('player2Score').textContent(state.scores.player2);
      
      renderBoard();
    }
  }
  

 function showWinner(winner)
 {
    const alert_box = $("#alert-box");
    if(winner)
    {
     winner === 'X'? state.scores.player1++ : state.scores.player2++; 
     alert_box.html(`$-{winner} <strong> Won! </strong> `);  
    }  
    else{
        alert_box.html("It is a draw!");
    }

    alert_box.slideDown();
 setTimeout(() =>alert_box.slideUp(), 1000);

}

function renderSquare(index){
    const val= state.squares[index] ? state.squares[index] : "&nbsp;";
    // the above puts value
    return `<div value= ${index} class="box  col-lg-4 col-md-4 col-sm-4 col-xs-4 " onclick="boxClick(${index})">${val}</div>`
   // column = return <div value=${index} class="box col-lg-4 col-md-4 col-sm-4 col-xs-4" onclick="boxClick(${index})">${val}</div>
    // the above statement forms the boxes' size.
}


function renderBoard() //making boxes 
{
    let board_html= '';
    
    for( let i = 0; i<9;i++) 
    {
        board_html =  renderSquare(i) + board_html;
    }

    $("#board").html(board_html);
    calculateWinner(state.squares)
}

function boxClick(index)
{
    const squares= state.squares;
    if(calculateWinner(squares) || squares[index]){
        return;
    }

    squares[index]= state.xIsNext? 'X' : 'O'; // puts X or O
    state.squares= squares;
    state.xIsNext = !state.xIsNext;
    renderBoard();
}

function resetGame()
{
    state.scores.player1= 0;
    state.scores.player2= 0;
    ResetBoard(null);
}


//function ResetBoard(null){}

$(document).ready(function() {
    renderBoard(); 

    // Make sure the element exists in the HTML
    // <div id="alert-box">...</div>

    // Show the element if it's hidden
    $("#alert-box").show(); 

    // Now you can use slideUp()
    $("#alert-box").slideUp(0.0001); 

    $("#clear").on("click", ()=>ResetBoard(null));
    $("#reset").on("click", ()=> resetGame());
});
