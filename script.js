const tbodyelm = document.getElementById("tablebody");
const name1 = document.getElementById("name1");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.querySelector("form");
const error = document.querySelector(".error");
const success = document.querySelector(".success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name1.value == "" || email.value == "" || phone.value == "") {
    error.innerText = "Empty input field (s)";
    error.classList.add("error");
    setTimeout(() => {
      error.innerText = "";
    }, 2000);
    return;
  }
  tbodyelm.innerHTML += `<tr>
         <td>${name1.value}</td>
        <td>${email.value}</td>
        <td>${phone.value}</td>
        <td class="Delete"><button>Delete</button></td>
    </tr>`;

  var row = document.querySelectorAll(".Delete");
  for (let i = 0; i < row.length; i++) {
    row[i].onclick = function () {
      this.parentNode.remove();
      success.innerText = "Item Deleted Successfully";
      success.classList.add("success");
      setTimeout(() => {
        success.innerText = "";
      }, 2000);
    };
  }
  name1.value = "";
  email.value = "";
  phone.value = "";
});
