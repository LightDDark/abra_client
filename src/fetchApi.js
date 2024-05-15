async function fetchApi(url, options = {}) {
  let token = ''
  try {
    const value = localStorage.getItem('user')
    if (value) {
      token = JSON.parse(value).token
    }
  } catch (err) {
    console.log(err)
  }
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  }

  return fetch('api' + url, { ...options, headers })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching data:', error)
      // Handle the error as needed
    })
}

export default fetchApi
