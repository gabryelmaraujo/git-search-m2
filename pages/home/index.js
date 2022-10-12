// /* Desenvolva sua lógica aqui...*/

// const userNameInput = document.getElementById("userNameInput");
// const searchButton = document.querySelector(".searchButton");

// async function getUserInfos(user) {

//     const data = await fetch(`https://api.github.com/users/${user}`)
//     const dataJSON = await data.json()
//         console.log(dataJSON)

//     const userAvatar = dataJSON.avatar_url
//     const userName = dataJSON.name
//     const userBio = dataJSON.bio
//     const userURL = dataJSON.url
//     const userReposUrl = dataJSON.repos_url

//     const userObj = {
//         avatar: userAvatar,
//         name: userName,
//         bio: userBio,
//         url: userURL,
//         reposUrl: userReposUrl
//     }

//     if(recentUsersArr.length == 3){
//         recentUsersArr.splice(0, 1)
//         recentUsersArr.push(userObj)
//     }else{
//         recentUsersArr.push(userObj)
//     }

//     // console.log(recentUsersArr)
        
//     const recentUl = document.querySelector('.recentUl')
//     const recentLi = document.querySelector('.recentIcon')
//     if(recentUl.childElementCount == 3){
//         recentUl.removeChild(recentLi)
//     }

    

//         recentUl.insertAdjacentHTML('beforeend',`
//         <li class = "recentIcon">
//             <div class="recentImg">
//                 <a href="${userURL}">
//                     <img src="${userAvatar}">
//                 </a>
//                 <div class="anchorTextDiv" hidden>
//                     <p>Acessar este perfil</p>
//                 </div>

//             </div>
//         </li>
//     `)



// //REDIRECT ON CLICK 

// const formAction = document.getElementById('searchForm')
// formAction.action = '/pages/profile/index.html'

//     const profileImg = document.querySelector('.profileImg')
//     console.log(profileImg)

// }

// searchButton.addEventListener('click', (e)=>{
//     // e.preventDefault()
//     getUserInfos(userNameInput.value)

// })



//------------------------------------------------ OUTRA LÓGICA


const searchButton = document.querySelector(".searchButton")


searchButton.addEventListener('click', ((e)=>{
    e.preventDefault()

    toLocalStorage()
}))

async function toLocalStorage(){
    const input = document.getElementById("userNameInput")
    const userData = await getUserInfos(input.value)

    if(recentUsersArr.length == 3){
        recentUsersArr.splice(0, 1)
        recentUsersArr.push(userData)
    }else{
        recentUsersArr.push(userData)
    }
    
    

 localStorage.setItem("@GitSearch/UserData:", JSON.stringify(recentUsersArr))
}


async function getUserInfos(user){

    const data = await fetch(`https://api.github.com/users/${user}`)
    const dataJSON = await data.json()

    const userInfos = {
        userAvatar: dataJSON.avatar_url,
        userName: dataJSON.name,
        userBio: dataJSON.bio,
        userURL: dataJSON.url,
        userReposUrl: dataJSON.repos_url
    }

    return userInfos

}