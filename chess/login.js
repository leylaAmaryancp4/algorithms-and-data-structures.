function insertImage() {
  document.querySelectorAll(".box").forEach((image) => {
    if (image.innerText.length !== 0) {
      if (image.innerText == "Wpawn" || image.innerText == "Bpawn") {
        image.innerHTML = `${image.innerText}<img class= 'all-img all-pown' src="${image.innerText}.png" alt="">`;
        image.style.cursor = "pointer";
      } else {
        image.innerHTML = `${image.innerText}<img  class= 'all-img'  src="
            ${image.innerText}.png" alt="">`;
        image.style.cursor = "pointer";
      }
    }
  });
}

insertImage();

//coloring the board

function coloring() {
  const color = document.querySelectorAll(".box");
  color.forEach((color) => {
    getId = color.id;
    arr = Array.from(getId);
    arr.shift();
    aside = eval(arr.pop());
    aup = eval(arr.shift());
    a = aside + aup;
    if (a % 2 == 0) {
      color.style.backgroundColor = "rgb(212 175 55)"; // gold
    }

    if (a % 2 !== 0) {
      color.style.backgroundColor = "rgb(101 67 33)"; // brown
    }
  });
}
coloring()
 function reddish()
{
    document.querySelectorAll(".box").forEach(i1 =>{
        if(i1.style.backgroundColor == "blue"){
            document.querySelectorAll(".box").forEach(i2 =>{
                if(i2.style.backgroundColor == "greenyellow" && i2.innerText.length !== 0){
                    greenyellowText = i2.innerText
                    blueText = i1.innerText
                    blueColor = ((Array.from(blueText)).shift()).toString()
                    greenyellowColor = ((Array.from(greenyellowText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if(a % 2 == 0 && blueColor == greenyellowColor){
                        i2.style.backgroundColor =  "rgb(212 175 55)"
                    }

                    if(a % 2 !== 0 && blueColor == greenyellowColor){
                        i2.style.backgroundColor = "rgb(101 67 33)" // brown
                    }
                }
            })
        }
    })
}

//reset button
document.getElementById("reset-btn").addEventListener("click", function(){
    location.reload();
});

tog = 1
document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", function () {
    if (
      item.style.backgroundColor == "greenyellow" &&
      item.innerText.length == 0
    ) {
      tog = tog + 1;
    } else if (
      item.style.backgroundColor == "greenyellow" &&
      item.innerText.length !== 0
    ) {
      document.querySelectorAll(".box").forEach((i) => {
        if (i.style.backgroundColor == "blue") {
          blueId = i.id;
          blueText = i.innerText;

          document.getElementById(blueId).innerText = "";
          item.innerText = blueText;
          coloring();
          insertImage();
          tog = tog + 1;
        }
      });
    }

    getId = item.id
    arr = Array.from(getId);
    arr.shift();
    aside = eval(arr.pop());
    arr.push("0");
    aup = eval(arr.join(""));
    a = aside + aup;

    //function to display the available paths for all pieces
    function whosTurn(toggle) {
            
        //PAWN

      if (item.innerText == `${toggle}pawn`) {
        item.style.backgroundColor = "blue";

        if (tog % 2 !== 0 && aup < 800) {
          //first move for white pawns
          if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
            document.getElementById(`b${a + 100}`).style.backgroundColor =
              "greenyellow";
            if (
              document.getElementById(`b${a + 200}`).innerText.length == 0 &&
              aup < 300
            ) {
              document.getElementById(`b${a + 200}`).style.backgroundColor =
                "greenyellow";
            }
          }

          if (
            aside < 8 &&
            document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor =
              "greenyellow";
          }
        }
        if (tog % 2 == 0 && aup > 100) {
          //first move for black pawns
          if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
            document.getElementById(`b${a - 100}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            document.getElementById(`b${a - 200}`).innerText.length == 0 &&
            aup > 600
          ) {
            document.getElementById(`b${a - 200}`).style.backgroundColor =
              "greenyellow";
          }

          if (
            aside < 8 &&
            document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor =
              "greenyellow";
          }
        }
        // Second move for pawns

        if (tog % 2 !== 0 && aup >= 800) {
          if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
            document.getElementById(`b${a + 100}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor =
              "greenyellow";
          }
        }
        if (tog % 2 == 0 && aup <= 100) {
          if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
            document.getElementById(`b${a - 100}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor =
              "greenyellow";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor =
              "greenyellow";
          }
        }
      }

      //King
      if(item.innerText == `${toggle}king`){
        if(aside < 8){
            document.getElementById(`b${a + 1}`).style.backgroundColor = "greenyellow"
        }
        if(aside > 1){
            document.getElementById(`b${a - 1}`).style.backgroundColor = "greenyellow"
        }
        if(aup < 800){
            document.getElementById(`b${a  + 100}`).style.backgroundColor = "greenyellow"
        }

        if(aup > 100){
            document.getElementById(`b${a  - 100}`).style.backgroundColor = "greenyellow"
        }

        if(aup > 100 && aside <  8){
            document.getElementById(`b${a  - 100 + 1 }`).style.backgroundColor = "greenyellow"

        }

        if(aup > 100 && aside  > 1){
            document.getElementById(`b${a  - 100 - 1}`).style.backgroundColor = "greenyellow"
        }
        if(aup < 800 && aside < 8 ){
            document.getElementById(`b${a  + 100 + 1}`).style.backgroundColor = "greenyellow"
        } 
        if(aup < 800 && aside > 1){
            document.getElementById(`b${a  + 100 - 1}`).style.backgroundColor = "greenyellow"
        }
        item.style.backgroundColor = "blue";
      }

      //KNIGHT
      if (item.innerText == `${toggle}knight`) {
    item.style.backgroundColor = "blue";

    const row = aup / 100;   // 1..8
    const col = aside;       // 1..8

    const knightMoves = [
        {r: +2, c: +1},
        {r: +2, c: -1},
        {r: -2, c: +1},
        {r: -2, c: -1},
        {r: +1, c: +2},
        {r: +1, c: -2},
        {r: -1, c: +2},
        {r: -1, c: -2},
    ];

    knightMoves.forEach(m => {
        const newR = row + m.r;
        const newC = col + m.c;

        // check board boundaries
        if (newR >= 1 && newR <= 8 && newC >= 1 && newC <= 8) {
            const id = `b${newR*100 + newC}`;
            const cell = document.getElementById(id);

            if (cell) {
                cell.style.backgroundColor = "greenyellow";
            }
        }
    });
}


      //QUEEN

      if(item.innerText == `${toggle}queen`){
        for(let i = 1; i < 9; i++){
          if((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText.length == 0){
            document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'greenyellow'
          }
          else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText.length !== 0){
            document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText.length == 0){
            document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'greenyellow'
          }
          else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText.length !== 0){
            document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText.length == 0){
            document.getElementById(`b${a + i}`).style.backgroundColor = 'greenyellow'
          }
          else if((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText.length !== 0){
            document.getElementById(`b${a + i}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText.length == 0){
            document.getElementById(`b${a - i}`).style.backgroundColor = 'greenyellow'
          }
          else if((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText.length !== 0){
            document.getElementById(`b${a - i}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if(i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0){
            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'greenyellow'
          }
          else if(i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0){
            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if(i < aup / 100 &&  i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0){
            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'greenyellow'
          }
          else if(i <  aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0){
            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if(i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0){
            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'greenyellow'
          }
          else if(i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0){
            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if(i <  aup / 100 && i <  aside && document.getElementById(`b${a - i * 100 -i}`).innerText.length == 0){
            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'greenyellow'
          }
          else if(i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0){
            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        item.style.backgroundColor = 'blue'
      
      }

      //BISHOP
      if(item.innerText == `${toggle}bishop`){
        for(let i = 1; i < 9; i++){
          if(i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0){
            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'greenyellow'
          }
          else if(i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0){
            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if(i < aup / 100 &&  i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0){
            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'greenyellow'
          }
          else if(i <  aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0){
            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if(i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0){
            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'greenyellow'
          }
          else if(i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0){
            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if(i <  aup / 100 && i <  aside && document.getElementById(`b${a - i * 100 -i}`).innerText.length == 0){
            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'greenyellow'
          }
          else if(i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0){
            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        item.style.backgroundColor = 'blue'

      }

      //ROOK

      if(item.innerText == `${toggle}rook`){
        for(let i = 1; i < 9; i++){
          if((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText.length == 0){
            document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'greenyellow'
          }
          else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText.length !== 0){
            document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText.length == 0){
            document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'greenyellow'
          }
          else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText.length !== 0){
            document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText.length == 0){
            document.getElementById(`b${a + i}`).style.backgroundColor = 'greenyellow'
          }
          else if((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText.length !== 0){
            document.getElementById(`b${a + i}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        for(let i = 1; i < 9; i++){
          if((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText.length == 0){
            document.getElementById(`b${a - i}`).style.backgroundColor = 'greenyellow'
          }
          else if((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText.length !== 0){
            document.getElementById(`b${a - i}`).style.backgroundColor = 'greenyellow'
            break
          }
        }

        item.style.backgroundColor = 'blue'

      }



    }


    //Toggling the turn

    if (tog % 2 !== 0) {
      document.getElementById("tog").innerText = "White's Turn";
      whosTurn("W");
    }
    if (tog % 2 == 0) {
      document.getElementById("tog").innerText = "Black's Turn";
      whosTurn("B");
    }
    reddish();
  });
});

//Moving the element

document.querySelectorAll(".box").forEach((hathTest) => {
  hathTest.addEventListener("click", function () {
    if (hathTest.style.backgroundColor == "blue") {
      blueId = hathTest.id;
      blueText = hathTest.innerText;

      document.querySelectorAll(".box").forEach((hathiTest2) => {
        hathiTest2.addEventListener("click", function () {
          if (
            hathiTest2.style.backgroundColor == "greenyellow" &&
            hathiTest2.innerText.length == 0
          ) {
            document.getElementById(blueId).innerText = "";
            hathiTest2.innerText = blueText;
            coloring();
            insertImage();
          }
        })
      })
    }
  })
})


//Prevents from selecting multiple elements 

z = 0
document.querySelectorAll('.box').forEach(ee =>{
  ee.addEventListener('click',function(){
  z = z + 1
  if(z % 2 == 0 && ee.style.backgroundColor !== 'greenyellow'){
    coloring()
  }
  })
})

