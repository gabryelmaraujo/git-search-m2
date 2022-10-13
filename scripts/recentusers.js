
let recentUsersArr = []

function getRecentSearchs(){

    const users = JSON.parse(localStorage.getItem("@GitSearch/UserData:"))

    let usersArr = Array.from(users)
    
    if(usersArr.length > 0){
        usersArr.forEach((user)=>{

            const avatar = user.userAvatar
            const name = user.userName
            const bio = user.userBio
            const url = user.userURL
            const repos = user.userReposUrl

            const recentUl = document.querySelector('.recentUl')

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