//Assign all elements
const demoId = document.getElementById('demo')
const demoClass = document.getElementsByClassName('demo')
const demoTag = document.getElementsByTagName('article')
const demoQuery = document.querySelector('#demo-query')
const demoQueryAll = document.querySelectorAll('.demo-query-all')

//change border of ID demo to purple
demoId.style.border = '2px solid purple'

//change border of Class demo to orange
for(i = 0; i < demoClass.length; i++){
    demoClass[i].style.border = '2px solid orange'
}

//change border of Tag demo to blue
for(i = 0; i < demoTag.length; i++){
    demoTag[i].style.border = '2px solid blue'
}

//change border of ID demo-query to red
demoQuery.style.border = '2px solid red'

//change border of Class demo-query to green 
demoQueryAll.forEach(query => {
    query.style.border = '2px solid green'
})