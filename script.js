function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  async function callapi(){
    let result = await fetch('https://api.ecelliitr.org/edc/community');
    result = await result.json();
    console.warn(result);
    document.getElementById('userdata').innerHTML= result
    .map((user)=>
    `<tr>
    <td><img id="logos" src="${user.image}" height="80px"width="80px"></img></td>
    <td><b><div class="name"margin-right="40px">${user.name}</div></b></td>
    <td>${user.description}</td>
    <td>${user.email}</td>
    <td>${user.contact}</td>
    <td><a href="${user.linkedin}"><i class="fa-brands fa-linkedin"></i></a><td>
    </tr>`
    ).join("");

  }
  callapi();
  
