async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/emanuelleferraz/portfolio-js-developer/refs/heads/main/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}