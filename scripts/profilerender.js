


async function profileRender(){

const user = JSON.parse(localStorage.getItem("@GitSearc/SearchedUser:"))

const data = await fetch(`https://api.github.com/users/${user}`)
const userInfos = await data.json()
const reposUrl = userInfos.repos_url

//PROFILE HEADER RENDER
const userImg = userInfos.avatar_url
const userName = userInfos.name
const userBio = userInfos.bio
const userMail = userInfos.email

const profileImg = document.querySelector('.profileImg')
    profileImg.src = userImg

const profileName = document.querySelector('.profileName')
    profileName.innerText = userName

const profileBio = document.querySelector('.profileJob')
    profileBio.innerText = userBio

const profileEmail = document.querySelector('.profileEmail')
    profileEmail.href = userMail

const reposData = await fetch(reposUrl)
const arrRepos = await reposData.json()


const repoList = document.querySelector('.repoList')
arrRepos.forEach((elt)=>{
    const repoName = elt.name
    const repoDesc = elt.description
    const repoUrl = elt.html_url
    const repoDemo = elt.homepage

    repoList.insertAdjacentHTML('beforeend',`
        <li class="repositories">
            <div class="repoTitle">
                <h2 class="repoH2">
                    ${repoName}
                </h2>
            </div>
            
            <div class="repoDesc">
                <p>
                    ${repoDesc}
                </p>
            </div>

            <div class="repoBttns">
                <a href="${repoUrl}" class="repoAnchor">
                    <button class="viewRepoBttn">
                        Repositório
                    </button>
                </a>
                <a href="${repoDemo}" class="repoDemoAnchor">
                    <button class="repoDemoBttn">
                        Demo
                    </button>
                </a>
            </div>

        </li>
    `)

})


}
profileRender()
