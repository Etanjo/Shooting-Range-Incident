let result = document.querySelector('#secretText')
let button = document.querySelector('#secret')
let inp = document.querySelector('input')
button.addEventListener(
    'click',
    async function () {
        console.log('Clicked button, go fetch...');
        let number = inp.valueAsNumber;
        try {
            var response = await fetch(`/.netlify/functions/secret?number=${number}`);
        } catch (err) {
            result.innerHTML = `
            Encountered an error :(
                <pre>${JSON.stringify(err)}</pre>
            )`;
            return;
        }
        if (response) {
            let json = await response.json();
            result.innerHTML = json.result;
        } else {
            result.innerHTML = 'Null response?';
        }        
    }
)