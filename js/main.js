    console.log('run');

$(document).ready(function() {
    //GAMEPLAY
    let playerOneTurn = true;
    let playerTwoTurn = false;
    let playerOne = [];
    let playerTwo = [];

    $('.box').on('click', function() {

        if (playerOneTurn === true) {
            playerOne.push($(this).attr("id"));
            $(this).find('p').text('X');
            console.log('playerOne', playerOne);
            playerOneTurn = false;
            playerTwoTurn = true;
            $(this).off('click')

        } else {

            playerTwo.push($(this).attr("id"));
            $(this).find('p').text('O');
            console.log('playerTwo', playerTwo);
            playerOneTurn = true;
            playerTwoTurn = false;
            $(this).off('click')
        }

        //WINNING MESSAGE
        const x = findWinner(playerOne);
        const o = findWinner(playerTwo);

        const gameStatus = function () {
          if (x === true && o === false) {
              return("Anatoliy Dyatlov will push the button - evil prevails and the world survives")
          } else if (o === true && x === false) {
              return("Aleksandr Akimov will not push the button. He shows his lack of experience and has blown up the world.")
          } else if (x === true && o === true || x === false && o === false) {
              return("Draw - this'll be sorted with fists")
          };
          }
          $(".game-status").find('h1').text(gameStatus());
        })

    //GAME WIN LOGIC
    const findWinner = function(player) {

        if ((player.includes("one") && player.includes("two") && player.includes("three")) ||
            (player.includes("four") && player.includes("five") && player.includes("six")) ||
            (player.includes("seven") && player.includes("eight") && player.includes("nine")) ||
            (player.includes("one") && player.includes("four") && player.includes("seven")) ||
            (player.includes("two") && player.includes("five") && player.includes("eight")) ||
            (player.includes("three") && player.includes("six") && player.includes("nine")) ||
            (player.includes("one") && player.includes("five") && player.includes("nine")) ||
            (player.includes("three") && player.includes("five") && player.includes("seven"))) {
            return true;

        } else {

            return false;
        };
    };

    //STORY NARRATIVE
    //Story1 show then hide, Story 2 show
    $('#next1').on('click', function() {
      console.log("click");
      $('#story1').hide();
      $('#story2').show();
    });
    //Story 2 show then hide, Story3 show
    $('#next2').on('click', function() {
      console.log("click");
      $('#story2').hide();
      $('#story3').show();
    });
    //Story 3 show then hide, gif show
    $('#next3').on('click', function() {
      console.log("click");
      $('#story3').hide();
      $('.gif-container').show();
    });
    //Gif show then hide, Grid show
    $('#playGame').on('click', function() {
      console.log("click");
      $('.gif-container').hide();
      $('.grid-container').css('display', 'grid');
      $('.game-status').show();
    });
});
