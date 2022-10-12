
let recentUsersArr = []

function getRecentSearchs(){

    const usersArr = JSON.parse(localStorage.getItem("@GitSearch/UserData:"))
    
    if(usersArr.length > 0){
        usersArr.forEach((user)=>{
            console.log(user)
            const avatar = user.userAvatar
            const name = user.userName
            const bio = user.userBio
            const url = user.userURL
            const repos = user.userReposUrl

            const recentUl = document.querySelector('.recentUl')
            recentUl.innerHTML=''

            recentUl.insertAdjacentHTML('beforeend', `
                <li class="recentIcon">
                    <div class="recentImg">
                        <a href="/pages/profile/index.html">
                            <img src="${avatar}">
                        </a>
                        <div class="anchorTextDiv" hidden>
                            <p>Acessar este perfil</p>
                        </div>

                    </div>
                </li>

            `)

        })
    }
}
getRecentSearchs()