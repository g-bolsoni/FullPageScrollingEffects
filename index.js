// ----------------------------------------------------------------
// Navbar responsive
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ----------------------------------------------------------------
// integração com o github

for(let i=1; i <=9; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  document.querySelector('.git').appendChild(box);
}

// ----------------------------------------------------------------
// api
fetch('https://api.github.com/users/g-bolsoni')
.then(res => res.json())
.then(data => {
  console.log(data);
  console.log(data.company);
  console.log(data.repos_url);

  document.getElementsByClassName('box').innerHTML = data.bio;
})
