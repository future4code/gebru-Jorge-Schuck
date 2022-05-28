type usuarios = {
    name: string,
    email: string,
    role: string
}

function arrayUsuarios() {
    const array: Array<usuarios>  =  [
        {name: "Rogério", email: "roger@email.com", role: "user"},
        {name: "Ademir", email: "ademir@email.com", role: "admin"},
        {name: "Aline", email: "aline@email.com", role: "user"},
        {name: "Jéssica", email: "jessica@email.com", role: "user"},  
        {name: "Adilson", email: "adilson@email.com", role: "user"},  
        {name: "Carina", email: "carina@email.com", role: "admin"}      
    ] 
    const email: Array<string> = array.filter((user)=>{
        return user.role === "admin"
    })
    .map((user)=>{
        return user.email
    })
    return email
}
console.log(arrayUsuarios())