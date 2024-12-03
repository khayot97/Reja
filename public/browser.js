
console.log("FrontEmd Js ishga tushdi");

// STEP- 6  dan => kelib buyerda qurish xosil qilmoqdamiz
function itemTemplate(item) {
    return`<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1">
              O'zgartirish
            </button>
            <button
               data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm">
              O'chirish
            </button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field"); 
// bu yerda yigib olyapti 

document.getElementById("create-form")
.addEventListener("submit", function (e) {
    // STEP-1 biz malumotlarni yigib olishimiz kerak 
    console.log("stpe-1 ihga tushdi:");
    e.preventDefault();
     // bu tradational API ni toxtatadi 
    // bu form post va rest API imkon yaratib beradi!
    // preventDefault tradational API ochiryapti 

    //  axiosni ishlatgan holda frontendizmdan backendimizga 
    // REST API yuboryapmz va hosil qilmoqdamiz!
    axios
    // bolajak req header create/ item & createfield esa bodysi!
    // API type boyicha 3 xil boladi 1 rest 2 tradational 3 breal 
    // API structure boyicha header & body
    // API methode boyicha esa post & get

    .post("/create-item", { reja: createField.value })
    // bu orqali backendga chiqetadi 
    // STEP-6 <= 5 dan chiqib responsega keladi va frontendga keladi
    // STEP-7 fontendga malumot qoshadi
    .then((response) => {
    // document bu maqsadli objectbrowser orqli ixiyori burchagini ozgartirolamiz!
        document.getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
       createField.value ="";
       createField.focus();
// itemdan kelyapti va oxiriga qoshyapti 
// itemtemplet orqali view yasaymiz 
    })
    .catch((err) => {
       console.log("Iltimos qaytadan harakat qiling!");
    });
});

document.addEventListener("click", function(e) {
    // delet oper
    if(e.target.classList.contains("delete-me")) {
        if(confirm("Aniq o'chirmoqchimisiz?")) {
            axios
            .post("/delete-item", { id: e.target.getAttribute("data-id") })
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling!");
            });
        }
    }
  
    // edit oper
    if(e.target.classList.contains("edit-me")) {
        let userInput = prompt(
            "O'zgartirish kiriting",
            e.target.parentElement.
            parentElement.querySelector(".item-text").innerHTML
        );
        if (userInput) {
            axios
            .post("/edit-item", {
                id: e.target.getAttribute("data-id"),
                new_input: userInput,
            })
            .then(response  => {
                console.log(response.data);
                e.target.parentElement.parentElement.querySelector(
                 ".item-text"
                ).innerHTML = userInput;
            })
            .catch(err => {
                console.log("Iltimos qaytadan harakat qiling!");
            });
        }
    }
});  

document.getElementById("clean-all").addEventListener("click", function() {
    axios.post("/delete-all", { delete_all: true })
    .then((response) => {
        alert(response.data.state);
        document.location.reload();
    });
});