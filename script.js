// heart count feature

let count = parseInt(document.getElementById("heart-count").innerText)
const hearts = document.querySelectorAll(".fa-heart")
for(const heart of hearts){
    heart.addEventListener("click", function(){
        count = count + 1
        document.getElementById("heart-count").innerText = count
    })
}






// coin decrease feture

let totalCoin = parseInt(document.getElementById("total-coin").innerText)
const calls = document.querySelectorAll(".call")
for(const call of calls){
    call.addEventListener("click", function(){
        const card = call.closest(".card")
        const serviceNumber = card.querySelector(".service-number").innerText
        const serviceName =card.querySelector(".service-name").innerText
        if(totalCoin < 20 ){
            alert("you have not any coins, you have must 20 coin")
            return;
        }

        else{
            alert(`Calling ${serviceName} ${serviceNumber}...`)
        }

        totalCoin = totalCoin - 20
        document.getElementById("total-coin").innerText = totalCoin   

        document.getElementById("history-container").style.display = "block"

    })
}





    // history feature

       let history = []

       document.getElementById("emergency-call").addEventListener("click",function(){

           if(totalCoin < 20 ){
            return;
        }
           const data = {
           name: "National Emergency",
           number: 999,
           date: new Date().toLocaleTimeString()
           }
           history.push(data)
       })
       document.getElementById("police-call").addEventListener("click",function(){

           if(totalCoin < 20 ){
            return;
        }
           const data = {
           name: "Police",
           number: 999,
           date: new Date().toLocaleTimeString()
           }
           history.push(data)
       })
       document.getElementById("fire-call").addEventListener("click",function(){

           if(totalCoin < 20 ){
            return;
        }
           const data = {
           name: "Fire Service",
           number: 999,
           date: new Date().toLocaleTimeString()
           }
           history.push(data)
       })
       document.getElementById("ambulance-call").addEventListener("click",function(){

           if(totalCoin < 20 ){
            return;
        }
           const data = {
           name: "Ambulance",
           number: 1994-999999,
           date: new Date().toLocaleTimeString()
           }
           history.push(data)
       })
       document.getElementById("brac-call").addEventListener("click",function(){

           if(totalCoin < 20 ){
            return;
        }
           const data = {
           name: "Brac",
           number: 16445,
           date: new Date().toLocaleTimeString()
           }
           history.push(data)
       })
       document.getElementById("railway-call").addEventListener("click",function(){
              if(totalCoin < 20 ){
            return;
        }
           const data = {
           name: "Bangladesh Railway",
           number: 163,
           date: new Date().toLocaleTimeString()
           }
         
           history.push(data)
       })


        

       for(const call of calls){
        call.addEventListener('click',function(){
        const historyContainer = document.getElementById("history-container")
        historyContainer.innerHTML = ""
        for(const data of history){
             const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex justify-between items-center bg-[#fafafa] p-4 rounded-xl my-2">
                    <div>
                        <h1 class="font-bold text-lg">${data.name}</h1>
                        <h1>${data.number}</h1>
                    </div>
                    <p>${data.date}</p>
             </div>
        `
        historyContainer.appendChild(div)
        }
        })
       }



    //    clear button feature
    document.getElementById("clear-btn").addEventListener("click",function(){
        document.getElementById("history-container").style.display = "none"
        history = []
    })




    // copy button feature
    let totalCopy = parseInt(document.getElementById("total-copy").innerText)
    const copys = document.querySelectorAll(".copy")
    for(const copy of copys){
        copy.addEventListener("click",function(){
            const card = copy.closest(".card")
        const serviceNumber = card.querySelector(".service-number").innerText
        alert(`Number is copied ${serviceNumber}`)
            totalCopy = totalCopy + 1
            document.getElementById("total-copy").innerText = totalCopy
        })
    }
    