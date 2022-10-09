const form = document.querySelector("#mailing")
const submit = document.querySelector(".submit")
const n = document.querySelector(".name")
const e = document.querySelector(".email")
form.addEventListener("submit",async (e)=>{
  e.preventDefault()
  submit.setAttribute("disabled","true")
  const res = await fetch("smrtskool.herokuapp.com/email",{
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:`{
      "name":${n.value},
      "email":${e.value}
    }`
  });
  res.json().then(data=>{
    console.log(data)
  })
  submit.setAttribute("disabled","true")
})