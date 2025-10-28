import { baseUrl, repositoriesQuantity } from '../variables.js'


async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    const repositories = await response.json()
    if (!Array.isArray(repositories)) {
        console.error('A resposta da API não é um array:', repositories)
        return []
    }

    return repositories.map(repo => ({
        name: repo.name,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        watchers_count: repo.watchers_count,
        language: repo.language
    }))
}

export { getRepositories }