
const weatherFrom =  document.querySelector("form")
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


messageOne.textContent =''

weatherFrom.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loding'
    messageTwo.textContent = ''

    console.log(location)
    // if(location.toString()){
        fetch(`http://localhost:3000/weather?address=${location}`).then( (res) => {
        res.json().then( (data) => {
            if(data.error){
                messageOne.textContent = data.error
                return console.log(data.error)
            }
            else{

                messageOne.textContent =  data.forecast.currentTemprature
                messageTwo.textContent = data.location
            }
            
            // console.log(data.forcast.currentTemperature)

        })
    })
    // }
})