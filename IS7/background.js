
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
    function(tabs){
        getCurrentURL(tabs[0].url);
    });

function getCurrentURL(tab){
    currentURL = tab;
}
document.getElementById("consulta1").addEventListener("click",function1)
function function1() {
    req = new XMLHttpRequest();
    req.open("POST","https://api.geekflare.com/mixedcontent")
    req.setRequestHeader('x-api-key','4e03df22-28f2-4d99-a139-f56a5bbc22e1')
    req.setRequestHeader("Content-Type","application/json")
    req.responseType = "json"
    req.send("{\"url\": \"" + currentURL + "\"}")
    req.onload = function () {
        if (req.status===200) {
            console.log(req.response)
            console.log(req.response.message)
            document.getElementById("body").innerText = req.response.message
        }else{
            document.getElementById("body").innerText = "Código de estado recibido no válido, algo ha ido mal"
        }
    }
}

document.getElementById("consulta2").addEventListener("click",function2)


function function2() {
    req = new XMLHttpRequest();
    req.open("POST","https://api.geekflare.com/tlsscan")
    req.setRequestHeader('x-api-key','4e03df22-28f2-4d99-a139-f56a5bbc22e1')
    req.setRequestHeader("Content-Type","application/json")
    req.responseType = "json"
    req.send("{\"url\": \"" + currentURL + "\"}")
    req.onload = function () {

        if (req.status===200) {
            console.log(req.response)
            console.log(req.response.message)
            document.getElementById("body").innerText = JSON.stringify(req.response.data)
        }else{
            document.getElementById("body").innerText = "Código de estado recibido no válido, algo ha ido mal"
        }
    }
}
document.getElementById("consulta3").addEventListener("click",function3)

function function3() {
    req = new XMLHttpRequest();
    req.open("POST","https://api.geekflare.com/metascraping")
    req.setRequestHeader('x-api-key','4e03df22-28f2-4d99-a139-f56a5bbc22e1')
    req.setRequestHeader("Content-Type","application/json")
    req.responseType = "json"
    req.send("{\"url\": \"" + currentURL + "\"}")
    req.onload = function () {
        if (req.status===200) {
            console.log(req.response)
            console.log(req.response.message)
            document.getElementById("body").innerText = JSON.stringify(req.response.data)
        }else{
            document.getElementById("body").innerText = "Código de estado recibido no válido, algo ha ido mal"
        }
    }
}

/*
function virustotal(){
    req = new XMLHttpRequest();
    req.open("POST","https://www.virustotal.com/api/v3/urls")
    req.setRequestHeader('x-apikey','daccbf48581f5106a32afc4b780348875e7e1e31bc0cb43760d97e9649b5627a')
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    req.send("url="+ currentURL )
    req.onload = function () {
        console.log(req.response)
        console.log(req.response.message)
        document.getElementById("body").innerText = JSON.stringify(req.response)
    }
}
*/
