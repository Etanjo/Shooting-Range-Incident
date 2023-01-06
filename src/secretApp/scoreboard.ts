let leaderboard = document.querySelector('#leaderboard')
let scores = document.querySelector('#scores')
let board = document.querySelector('#board')

scores.addEventListener("click", async function(){
    try{
    var response = await fetch(`/.netlify/functions/getScores`)
    var json = await response.json()
    let abc = await JSON.stringify(json)
    let scores = await JSON.parse(abc)
    scores.sort(function(a, b){return b.score-a.score})
    console.log(scores)
    board.innerHTML = `
    <li>${scores[0].name} ${scores[0].score}</li>
    <li>${scores[1].name} ${scores[1].score}</li>
    <li>${scores[2].name} ${scores[2].score}</li>
    <li>${scores[3].name} ${scores[3].score}</li>
    <li>${scores[4].name} ${scores[4].score}</li>
    <li>${scores[5].name} ${scores[5].score}</li>
    <li>${scores[6].name} ${scores[6].score}</li>
    <li>${scores[7].name} ${scores[7].score}</li>
    <li>${scores[8].name} ${scores[8].score}</li>
    <li>${scores[9].name} ${scores[9].score}</li>
    <li>${scores[10].name} ${scores[10].score}</li>
    <li>${scores[11].name} ${scores[11].score}</li>
    <li>${scores[12].name} ${scores[12].score}</li>
    <li>${scores[13].name} ${scores[13].score}</li>
    <li>${scores[14].name} ${scores[14].score}</li>
    <li>${scores[15].name} ${scores[15].score}</li>
    <li>${scores[16].name} ${scores[16].score}</li>
    <li>${scores[17].name} ${scores[17].score}</li>
    <li>${scores[18].name} ${scores[18].score}</li>
    <li>${scores[19].name} ${scores[19].score}</li>
    <li>${scores[20].name} ${scores[20].score}</li>
    <li>${scores[21].name} ${scores[21].score}</li>
    <li>${scores[22].name} ${scores[22].score}</li>
    <li>${scores[23].name} ${scores[23].score}</li>
    <li>${scores[24].name} ${scores[24].score}</li>`
    scores.innerHTML = "Update Scores"
    }
    catch(err){
        console.log(`
        Error!!! ${JSON.stringify(err)}`)
    }
} )