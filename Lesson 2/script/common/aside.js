var aside = document.getElementById('aside')
console.log(aside)
function toggleAside()
{
  if(aside.classList.length == 1)
  {
    aside.classList.add('aside_active')
  }
  else
  {
    aside.classList.remove('aside_active')
  }
}
