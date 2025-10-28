async function getUserEvents(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}/events`)
  const events = await response.json()

  const filteredEvents = events
    .filter(event => event.type === "PushEvent" || event.type === "CreateEvent")
    .slice(0, 10)
    .map(event => {
      if (event.type === "PushEvent") {
        return {
          repoName: event.repo.name,
          message: event.payload.commits?.[0]?.message || "Sem mensagem de commit"
        }
      } else {
        return {
          repoName: event.repo.name,
          message: "Repositório criado"
        }
      }
    })

  return filteredEvents
}

function renderUserEvents(events) {
  const eventsContainer = document.querySelector('.events')
  eventsContainer.innerHTML = '<h3>Eventos</h3>'
  if (!events || events.length === 0) {
    eventsContainer.innerHTML += '<p>Nenhum evento encontrado.</p>'
    return
  }

  events.forEach(event => {
    const eventItem = document.createElement('div')
    eventItem.classList.add('event-item')

    eventItem.innerHTML = `
      <p><strong>Repositório:</strong> ${event.repoName}</p>
      <p><strong>💬 Mensagem:</strong> ${event.message}</p>
    `
    eventsContainer.appendChild(eventItem)
  })
}

async function showUserEvents(userName) {
  const events = await getUserEvents(userName)
  renderUserEvents(events)
}

export { showUserEvents }