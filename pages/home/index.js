/* Desenvolva sua lógica aqui...*/

const userNameInput = document.getElementById("userNameInput");
const searchButton = document.querySelector(".searchButton");

async function getUserInfos(user) {

    const data = await fetch(`https://api.github.com/users/${user}`)
    const dataJSON = await data.json()
        console.log(dataJSON)

    const recentUl = document.querySelector('.recentUl')
    recentUl.innerHTML = ''

    recentUl.insertAdjacentHTML('beforeend',`
        <li class = "recentIcon">
            <div class="recentImg">
                <a href="${dataJSON.url}">
                    <img src="${dataJSON.avatar_url}">
                </a>
            </div>
        </li>
    `)

}

searchButton.addEventListener('click', (e)=>{
    e.preventDefault()
    getUserInfos(userNameInput.value)
})

const recentUl = document.querySelector('.recentUl')

if(recentUl.childElementCount != 0){
    const recentAnchor = document.querySelector('.recentAnchor')

    recentAnchor.addEventListener('mouseover', ()=>{
        const anchorTextDiv = document.querySelector('.anchorTextDiv')
        anchorTextDiv.classList.toggle('anchorTextDivHidden')
    })
}

