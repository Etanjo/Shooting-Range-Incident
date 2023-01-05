export let submit = document.querySelector('#submit')
import { lastScore } from "../../earthan/logistics"
export let text = document.querySelector('#nameBox')
let confirm = document.querySelector('#confirmation')
function clearElement(element){
element.innerHTML = ` `
}
submit?.addEventListener("click", async function(){
    console.log('adding score')
    let name = text.value
    try{
var response = await fetch(`/.netlify/functions/setScore?name=${name}&score=${lastScore}`)
if(response){confirm.innerHTML = `Confirmed!`
setTimeout(clearElement, 1500, confirm)
}else{confirm.innerHTML =`Error`}
    }
 catch(err){
    console.log(`
    Error!!! ${JSON.stringify(err)}`)
}

}
)
