const userList = document.querySelector(".user-list");

userList.addEventListener("click", (e) => {
  const liEl = e.target;
  if (liEl.tagName === "LI") {
    const name = liEl.dataset.name; // data-name="jay"
    // console.log(name);
    select(userList, liEl);
    history.pushState(name, null, name);
  }
});

window.addEventListener("popstate", (e) => {
  const selectedUser = document.querySelector(
    `.user-list [data-name=${e.state}]`
  );
  select(userList, selectedUser);
});

function select(ulEl, liEl) {
  Array.from(ulEl.children).forEach((v) => v.classList.remove("selected"));
  if (liEl) {
    liEl.classList.add("selected");
  }
}
