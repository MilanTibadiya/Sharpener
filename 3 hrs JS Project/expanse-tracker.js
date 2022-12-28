var itemList = document.getElementById('items');


let submit = document.getElementById("submit")
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    var expanse = document.getElementById("expanse").value;
    var discription = document.getElementById("discription").value;
    var category = document.getElementById("category").value;

    // console.log('1='+expanse+"2="+discription+"3"+category);

    // localStorage.setItem('name', expanse);
    const obj = {
      expanse,
      discription,
      category
    }
    localStorage.setItem(obj.discription, JSON.stringify(obj));
    showNewUserOnScreen(obj);
});

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
})

    function showNewUserOnScreen(user){
    //   console.log('milan')
      document.getElementById("expanse").value = '';
      document.getElementById("discription").value = '';
      document.getElementById("category").value = '';

      const parentNode = document.getElementById('items');
      const childHTML = `<li class="list-group-item" id=${user.discription}>
                 Expanse Amount: ${user.expanse} || Discription: ${user.discription} || Category: ${user.category}
                <button type="button" class="btn btn-danger btn-sm float-end" onclick=deleteUser('${user.discription}')>Delete User</button>
                <button type="button" class="btn btn-success btn-sm float-end" onclick=editUserDetails('${user.discription}','${user.expanse}','${user.category}')>Edit User</button>
                                      </li>`;

                parentNode.innerHTML = parentNode.innerHTML + childHTML;
    }
    
    //Edit user
    function editUserDetails(discription, expanse, category){
        document.getElementById('discription').value = discription;
        document.getElementById('expanse').value = expanse;
        document.getElementById('category').value = category;

        deleteUser(discription);
    }


    function deleteUser(discription){
        // console.log(discription);
        localStorage.removeItem(discription);
        removeUserFromScreen(discription);
    }

    function removeUserFromScreen(discription){
        const parentNode = document.getElementById('items');
        const childRemove = document.getElementById(discription);
        if(childRemove){
            parentNode.removeChild(childRemove);
        }
    }