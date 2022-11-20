const tbodyelm = document.getElementById("tablebody");
const name1 = document.getElementById("name1");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const btn = document.getElementById("add");

btn.addEventListener("click", () => {
  if (name1.value == "" || email.value == "" || phone.value == "") {
    alert("Fill The Empty Field");
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
      alert("Are you Sure !!");
    };
  }
  name1.value = "";
  email.value = "";
  phone.value = "";
});
