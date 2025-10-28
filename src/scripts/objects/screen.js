import { showUserEvents } from "./events.js"

const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info"> <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                <div class="data">
                                    <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                    <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                    <br>
                                    <p class="followers">Seguidores: ${user.followers}</p>
                                    <p class="followers">Seguindo: ${user.following}</p>
                                </div>
                                </div>
                                
                                <div class="profile-data info events"> 
                                    <h3>Eventos</h3>
                                </div>`
        let repositoriesItens = ''
user.repositories.forEach(repo => {
  repositoriesItens += `
    <li>
      <a href="${repo.html_url}" target="_blank">
        ${repo.name}
      </a>
      <p>⭐ Estrelas: ${repo.stargazers_count}</p>
      <p>🍴 Forks: ${repo.forks_count}</p>
      <p>👁️ Watchers: ${repo.watchers_count}</p>
      <p>💻 Linguagem: ${repo.language ?? 'Não especificada'}</p>
    </li>
  `
})

            if(user.repositories.length > 0) {
                this.userProfile.innerHTML += `<div class="repositories section"
                <h2> Repositórios</h2 >
                    <ul>${repositoriesItens}</ul>
                                                </div > `
            }

            showUserEvents(user.userName)
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }

}

export { screen }