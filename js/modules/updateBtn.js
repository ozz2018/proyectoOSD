export default (id, btnUpdate) => {
  btnUpdate.addEventListener('click', () => {
    window.open(location.origin + '/form.html?post=' + id)
  })
}