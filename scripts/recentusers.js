
let recentUsersArr = []

function getRecentSearchs(){

    const users = JSON.parse(localStorage.getItem("@GitSearch/UserData:"))

    let usersArr = Array.from(users)
    
    if(usersArr.length > 0){
        usersArr.forEach((user)=>{

            const avatar = user.userAvatar
            const login = user.login

            const recentUl = document.querySelector('.recentUl')

            recentUl.insertAdjacentHTML('beforeend', `
                <li class="recentIcon">
                    <div class="recentImg">
                        <a href="/pages/profile/index.html" class="recentAnchor qtip tip-bottom" data-tip="Acessar este perfil">
                            <img src="${avatar}">
                        </a>
                    </div>
                </li>

            `)
        })
    }
}
getRecentSearchs()



const recentAnchor = document.querySelector('.recentAnchor')
recentAnchor.addEventListener('click', ()=>{

    const users = JSON.parse(localStorage.getItem("@GitSearch/UserData:"))
    let usersArr = Array.from(users)

    usersArr.forEach((user) =>{
        const login = user.login

        let userArr = []

        if(userArr != 0){
            userArr.splice()
            userArr.push(login)
        }else{
            userArr.push(login)
        }
    
        localStorage.setItem("@GitSearc/SearchedUser:", JSON.stringify(userArr))

    })

})
