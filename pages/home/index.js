/* Desenvolva sua lógica aqui...*/

const userNameInput = document.getElementById("userNameInput");
const searchButton = document.querySelector(".searchButton");

async function getUserInfos(user) {

    const data = await fetch(`https://api.github.com/users/${user}`)
    const dataJSON = await data.json()
        console.log(dataJSON)

    const userAvatar = dataJSON.avatar_url
    const userName = dataJSON.name
    const userBio = dataJSON.bio
    const userURL = dataJSON.url
    const userReposUrl = dataJSON.repos_url

    const userObj = {
        avatar: userAvatar,
        name: userName,
        bio: userBio,
        url: userURL,
        reposUrl: userReposUrl
    }

    if(recentUsersArr.length == 3){
        recentUsersArr.splice(0, 1)
        recentUsersArr.push(userObj)
    }else{
        recentUsersArr.push(userObj)
    }

    console.log(recentUsersArr)
        
    const recentUl = document.querySelector('.recentUl')
        recentUl.insertAdjacentHTML('beforeend',`
        <li class = "recentIcon">
            <div class="recentImg">
                <a href="${userURL}">
                    <img src="${userAvatar}">
                </a>
                <div class="anchorTextDiv" hidden>
                    <p>Acessar este perfil</p>
                </div>

            </div>
        </li>
    `)

}

searchButton.addEventListener('click', (e)=>{
    e.preventDefault()
    getUserInfos(userNameInput.value)
})

// const recentUl = document.querySelector('.recentUl')
// if(recentUl.childElementCount != 0){
//     const recentAnchor = document.querySelector('.recentAnchor')

//     recentAnchor.addEventListener('mouseover', ()=>{
//         const anchorTextDiv = document.querySelector('.anchorTextDiv')
//         anchorTextDiv.hidden = false
//     })
//     recentAnchor.addEventListener('mouseout', ()=>{
//         const anchorTextDiv = document.querySelector('.anchorTextDiv')
//         anchorTextDiv.hidden = true
//     })
// }