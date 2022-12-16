let submit = document.querySelector('#submit')

submit.addEventListener("click", async function(){
var response = await fetch('/.netlify/functions/setScore')
 catch(err){
    console.log(`
    Error!!! ${json.stringify(err)}`)
}

}
)