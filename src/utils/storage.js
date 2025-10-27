export function saveCurrent(data) {
  localStorage.setItem('currentSite', JSON.stringify(data))
}

export function getCurrent() {
  const raw = localStorage.getItem('currentSite')
  return raw ? JSON.parse(raw) : null
}

export function saveShared(id, data) {
  const raw = localStorage.getItem('sites')
  const map = raw ? JSON.parse(raw) : {}
  map[id] = data
  localStorage.setItem('sites', JSON.stringify(map))
}

export function getShared(id) {
  const raw = localStorage.getItem('sites')
  const map = raw ? JSON.parse(raw) : {}
  return map[id] || null
}
