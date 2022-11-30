if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // @ts-ignore
  document.getElementById("favicon").setAttribute("href", "./assets/img/file-account-white.png")
} else {
  // @ts-ignore
  document.getElementById("favicon").setAttribute("href", "./assets/img/file-account.png")

}
