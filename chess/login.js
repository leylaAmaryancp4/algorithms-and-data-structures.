(function(){

  const SQUARE_SIZE = 64;
  const LIGHT_COLOR = 'rgb(212,175,55)';
  const DARK_COLOR = 'rgb(101,67,33)';
  const HIGHLIGHT_COLOR = 'greenyellow';
  const SELECT_COLOR = 'blue';

  let board = [];
  let turn = 'W';
  let selected = null;
  let legalSquares = [];
  let rootEl = null;
  let statusEl = null;

  function initBoardState(){
    board = Array.from({length:8},()=>Array.from({length:8},()=>null));
    const W='W', B='B';

    for(let c=0;c<8;c++){
      board[6][c] = W + 'pawn';
      board[1][c] = B + 'pawn';
    }

    board[7][0] = W + 'rook'; board[7][7] = W + 'rook';
    board[0][0] = B + 'rook'; board[0][7] = B + 'rook';

    board[7][1] = W + 'knight'; board[7][6] = W + 'knight';
    board[0][1] = B + 'knight'; board[0][6] = B + 'knight';

    board[7][2] = W + 'bishop'; board[7][5] = W + 'bishop';
    board[0][2] = B + 'bishop'; board[0][5] = B + 'bishop';

    board[7][3] = W + 'queen';
    board[7][4] = W + 'king';
    board[0][3] = B + 'queen';
    board[0][4] = B + 'king';
  }

  function buildUI(){
    rootEl = document.getElementById("root");

    const title = document.createElement('h3');
    title.innerText = 'Chess';
    rootEl.appendChild(title);

    const controls = document.createElement('div');
    controls.style.display='flex';
    controls.style.gap='12px';
    controls.style.marginBottom='8px';

    statusEl = document.createElement('div');
    statusEl.id='status';
    statusEl.innerText="White's Turn";
    statusEl.style.fontWeight='700';
    controls.appendChild(statusEl);

    const resetBtn = document.createElement('button');
    resetBtn.innerText = 'Reset';
    resetBtn.onclick = ()=> resetGame();
    controls.appendChild(resetBtn);

    rootEl.appendChild(controls);

    const boardWrapper = document.createElement('div');
    boardWrapper.id='boardWrapper';
    boardWrapper.style.display='grid';
    boardWrapper.style.gridTemplateColumns=`repeat(8, ${SQUARE_SIZE}px)`;
    boardWrapper.style.gridTemplateRows=`repeat(8, ${SQUARE_SIZE}px)`;
    boardWrapper.style.border='2px solid #333';
    rootEl.appendChild(boardWrapper);

    for (let r=0; r<8; r++){
      for (let c=0; c<8; c++){
        const sq=document.createElement('div');
        sq.className='sq';
        sq.dataset.r=r;
        sq.dataset.c=c;

        const sum = r+c;
        sq.style.backgroundColor = sum%2===0 ? LIGHT_COLOR : DARK_COLOR;
        sq.dataset.orig = sq.style.backgroundColor;

        boardWrapper.appendChild(sq);
      }
    }

    boardWrapper.addEventListener('click', (ev)=>{
      const sq = ev.target.closest('.sq');
      if(!sq) return;
      handleSquareClick(+sq.dataset.r, +sq.dataset.c);
    });
  }

  function render(){
    statusEl.innerText = turn === 'W' ? "White's Turn" : "Black's Turn";

    document.querySelectorAll('.sq').forEach(el=>{
      el.style.backgroundColor = el.dataset.orig;
      el.innerHTML='';
    });

    for(let r=0;r<8;r++){
      for(let c=0;c<8;c++){
        const piece = board[r][c];
        if(!piece) continue;

        const sq=document.querySelector(`.sq[data-r="${r}"][data-c="${c}"]`);

        const img=document.createElement('img');
        img.className='piece';
        img.src = piece + ".png";
        img.onerror = ()=>{
          img.remove();
          const span=document.createElement('span');
          span.innerText=piece;
          span.style.fontSize="10px";
          sq.appendChild(span);
        };
        sq.appendChild(img);
      }
    }

    if(selected){
      const d=document.querySelector(`.sq[data-r="${selected.r}"][data-c="${selected.c}"]`);
      d.style.backgroundColor = SELECT_COLOR;
    }

    legalSquares.forEach(({r,c})=>{
      const d=document.querySelector(`.sq[data-r="${r}"][data-c="${c}"]`);
      d.style.backgroundColor = HIGHLIGHT_COLOR;
    });
  }

  function cloneBoard(b){ return b.map(row => row.slice()); }
  function inBounds(r,c){ return r>=0 && r<8 && c>=0 && c<8; }

  function findKing(b,color){
    for(let r=0;r<8;r++){
      for(let c=0;c<8;c++){
        if(b[r][c] === color+'king') return {r,c};
      }
    }
    return null;
  }
function isSquareAttacked(b,r,c,op){
  const dir = op === 'W' ? 1 : -1; 
for (const dc of [-1, 1]) {
  const rr = r + dir, cc = c + dc;
  if (inBounds(rr, cc) && b[rr][cc] === op + 'pawn')
      return true;
}


    const kD=[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
    for(const [dr,dc] of kD){
      const rr=r+dr, cc=c+dc;
      if(inBounds(rr,cc) && b[rr][cc]===op+'knight') return true;
    }

    for(let dr=-1;dr<=1;dr++){
      for(let dc=-1;dc<=1;dc++){
        if(dr===0 && dc===0) continue;
        const rr=r+dr, cc=c+dc;
        if(inBounds(rr,cc) && b[rr][cc]===op+'king') return true;
      }
    }

    const orth=[[1,0],[-1,0],[0,1],[0,-1]];
    for(const [dr,dc] of orth){
      let rr=r+dr, cc=c+dc;
      while(inBounds(rr,cc)){
        const p=b[rr][cc];
        if(p){
          if(p[0]===op && (p.slice(1)==='rook' || p.slice(1)==='queen')) return true;
          break;
        }
        rr+=dr; cc+=dc;
      }
    }

    const diag=[[1,1],[1,-1],[-1,1],[-1,-1]];
    for(const [dr,dc] of diag){
      let rr=r+dr, cc=c+dc;
      while(inBounds(rr,cc)){
        const p=b[rr][cc];
        if(p){
          if(p[0]===op && (p.slice(1)==='bishop' || p.slice(1)==='queen')) return true;
          break;
        }
        rr+=dr; cc+=dc;
      }
    }
    return false;
  }

  function generatePseudoMoves(b,r,c){
    const piece=b[r][c];
    if(!piece) return [];
    const color=piece[0];
    const type=piece.slice(1);
    const moves=[];

    if(type==='pawn'){
      const dir=color==='W'?-1:1;
      const start=color==='W'?6:1;

      const r1=r+dir;
      if(inBounds(r1,c) && !b[r1][c]) moves.push({r:r1,c});

      const r2=r+2*dir;
      if(r===start && !b[r1][c] && !b[r2][c]) moves.push({r:r2,c});

      for(const dc of [-1,1]){
        const rr=r+dir, cc=c+dc;
        if(inBounds(rr,cc) && b[rr][cc] && b[rr][cc][0]!==color){
          moves.push({r:rr,c:cc});
        }
      }
    }

    if(type==='knight'){
      const d=[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
      d.forEach(([dr,dc])=>{
        const rr=r+dr,cc=c+dc;
        if(inBounds(rr,cc) && (!b[rr][cc] || b[rr][cc][0]!==color))
          moves.push({r:rr,c:cc});
      });
    }

    if(type==='king'){
      for(let dr=-1;dr<=1;dr++){
        for(let dc=-1;dc<=1;dc++){
          if(dr===0 && dc===0) continue;
          const rr=r+dr,cc=c+dc;
          if(inBounds(rr,cc) && (!b[rr][cc] || b[rr][cc][0]!==color))
            moves.push({r:rr,c:cc});
        }
      }
    }

    if(type==='rook' || type==='bishop' || type==='queen'){
      const dirs=[];
      if(type==='rook' || type==='queen') dirs.push([1,0],[-1,0],[0,1],[0,-1]);
      if(type==='bishop' || type==='queen') dirs.push([1,1],[1,-1],[-1,1],[-1,-1]);

      dirs.forEach(([dr,dc])=>{
        let rr=r+dr, cc=c+dc;
        while(inBounds(rr,cc)){
          if(!b[rr][cc]) moves.push({r:rr,c:cc});
          else{
            if(b[rr][cc][0]!==color) moves.push({r:rr,c:cc});
            break;
          }
          rr+=dr; cc+=dc;
        }
      });
    }

    return moves;
  }

  function generateLegalMovesForSquare(r,c){
    const piece=board[r][c];
    if(!piece) return [];
    const color=piece[0];

    const pseudo=generatePseudoMoves(board,r,c);
    const legal=[];

    for(const mv of pseudo){
      const copy=cloneBoard(board);
      copy[mv.r][mv.c] = copy[r][c];
      copy[r][c] = null;

      if(copy[mv.r][mv.c].slice(1)==='pawn' && (mv.r===0 || mv.r===7)){
        copy[mv.r][mv.c]=color+'queen';
      }

      const k=findKing(copy,color);
      if(!isSquareAttacked(copy,k.r,k.c,color==='W'?'B':'W'))
        legal.push(mv);
    }

    return legal;
  }

  function anyLegalMoveForColor(color){
    for(let r=0;r<8;r++){
      for(let c=0;c<8;c++){
        if(board[r][c] && board[r][c][0]===color){
          if(generateLegalMovesForSquare(r,c).length>0)
            return true;
        }
      }
    }
    return false;
  }

  function isColorInCheck(color){
    const k=findKing(board,color);
    if(!k) return false;
    return isSquareAttacked(board,k.r,k.c,color==='W'?'B':'W');
  }

  function handleSquareClick(r,c){
    const piece=board[r][c];

    if(selected){
      const found=legalSquares.find(s=>s.r===r && s.c===c);
      if(found){
        performMove(selected.r,selected.c,r,c);
        selected=null;
        legalSquares=[];
        render();
        checkEndOfTurn();
        return;
      }

      if(piece && piece[0]===turn){
        selected={r,c};
        legalSquares=generateLegalMovesForSquare(r,c);
        render();
        return;
      }

      selected=null;
      legalSquares=[];
      render();
      return;
    }

    if(piece && piece[0]===turn){
      selected={r,c};
      legalSquares=generateLegalMovesForSquare(r,c);
      render();
    }
  }

  function performMove(r1,c1,r2,c2){
    const piece=board[r1][c1];
    board[r2][c2]=piece;
    board[r1][c1]=null;

    if(piece.slice(1)==='pawn'){
      if((piece[0]==='W' && r2===0) || (piece[0]==='B' && r2===7)){
        board[r2][c2] = piece[0] + 'queen';
      }
    }

    turn = turn==='W'?'B':'W';
    selected=null;
    legalSquares=[];
  }

  function checkEndOfTurn(){
    const color=turn;
    const tName=color==='W'?'White':'Black';

    const inCheck=isColorInCheck(color);

    if(inCheck){
      if(!anyLegalMoveForColor(color)){
        statusEl.innerText=`${tName} is in checkmate. ${tName==='White'?'Black':'White'} wins!`;
        turn='X';
        return;
      }
      statusEl.innerText=`${tName} is in check`;
    } else {
      if(!anyLegalMoveForColor(color)){
        statusEl.innerText=`Stalemate!`;
        turn='X';
        return;
      }
      statusEl.innerText=turn==='W'?"White's Turn":"Black's Turn";
    }
  }

  function resetGame(){
    initBoardState();
    turn='W';
    selected=null;
    legalSquares=[];
    render();
    statusEl.innerText = "White's Turn";
  }

  function start(){
    initBoardState();
    buildUI();
    render();
  }

  start();

})();
