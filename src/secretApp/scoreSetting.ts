let submit = document.querySelector('#submit')
import { lastScore } from "../../earthan/logistics"
let text = document.querySelector('#nameBox')

submit?.addEventListener("click", async function(){
    console.log('adding score')
    let name = text.value
    try{
var response = await fetch(`/.netlify/functions/setScore?name=${name}&score=${lastScore}`)
    }
 catch(err){
    console.log(`
    Error!!! ${JSON.stringify(err)}`)
}

}
)