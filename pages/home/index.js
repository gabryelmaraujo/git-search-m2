
const searchButton = document.querySelector(".searchButton")

const input = document.getElementById("userNameInput")


searchButton.addEventListener('click',((e)=>{


    const teste = async ()=>{
        return await toLocalStorage()
    }
    
    
    const resolved = Promise.resolve(teste())
    resolved.then(res => {

        if(res != undefined){
            console.log('errou')
        }else{
            searchedUser()
    
            window.location.href='/pages/profile/index.html'
        }
    })

}))

function searchedUser(){

    let userArr = []

    if(userArr != 0){
        userArr.splice()
        userArr.push(input.value)
    }else{
        userArr.push(input.value)
    }
    

    localStorage.setItem("@GitSearc/SearchedUser:", JSON.stringify(userArr))


}

async function toLocalStorage(){
    const input = document.getElementById("userNameInput")
    const userData = await getUserInfos(input.value)

    if(!userData){
            return false
    }else{
        
    if(recentUsersArr.length == 3){
        recentUsersArr.splice(0, 1)
        recentUsersArr.push(userData)
    }else{
        recentUsersArr.push(userData)
    }
    
    

 localStorage.setItem("@GitSearch/UserData:", JSON.stringify(recentUsersArr))
    }

}


async function getUserInfos(user){

    const data = await fetch(`https://api.github.com/users/${user}`)
    const dataJSON = await data.json()


    if(dataJSON?.message == 'Not Found'){

        return false
    }else{
        const userInfos = {
            userAvatar: dataJSON.avatar_url,
            userName: dataJSON.name,
            userBio: dataJSON.bio,
            userURL: dataJSON.url,
            userReposUrl: dataJSON.repos_url
        }
    
        return userInfos
    }

}
// getUserInfos("ncjkandjj")