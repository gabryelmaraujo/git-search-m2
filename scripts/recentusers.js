
let recentUsersArr = [
    {
        avatar: 'teste',
        name: 'teste',
        bio: 'teste',
        url: 'teste',
        reposUrl: 'teste'
    }
]

function toLocalStorage(){

    if(recentUsersArr.length > 0){
        recentUsersArr.forEach((e)=>{
            let jsonElement = JSON.stringify(e)
            localStorage.setItem("teste", jsonElement)

        })
    }


}
toLocalStorage()