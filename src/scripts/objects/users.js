const user = {
  avatarUrl: '',
  name: '',
  bio: '',
  userName: '',
  repositories: [],
  followers: '',
  following: '',
  events: [],

  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url
    this.name = gitHubUser.name
    this.bio = gitHubUser.bio
    this.userName = gitHubUser.login

    this.followersUrl = gitHubUser.followers_url ?? ''
    this.followingUrl = gitHubUser.following_url
      ? gitHubUser.following_url.replace('{/other_user}', '')
      : ''

    const followersCount =
      typeof gitHubUser.followers === 'number'
        ? gitHubUser.followers
        : Number(gitHubUser.followers) ?? 0

    const followingCount =
      typeof gitHubUser.following === 'number'
        ? gitHubUser.following
        : Number(gitHubUser.following) ?? 0

    this.followers = followersCount
    this.following = followingCount
  },

  setRepositories(repositories) {
    this.repositories = repositories
  },

  setEvents(eventsList) {
    this.events = eventsList
  }
}

export { user }