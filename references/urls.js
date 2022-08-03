const url = require('url')
const myurl = new URL('https://someweirdstuff.com:8000/hello.html?id=100&status=active')

// Serialized url 
console.log(myurl.href)

// Host / Root domain 
console.log(myurl.host)

// Hostname
console.log(myurl.hostname)

// Pathname 
console.log(myurl.pathname)

// Serialized query
console.log(myurl.search)

// Params object
console.log(myurl.searchParams)

// Add params 
myurl.searchParams.append('name','jane')

// Loop through params

myurl.searchParams.forEach(function(param){
    console.log(param)
})