document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const age = document.getElementById("age").value.trim();
    const name = document.getElementById("name").value.trim();

    // Validation for empty fields
    if (age === "" || name === "") {
        alert("Please enter valid details");  // FIXED (removed period)
        return;
    }

    function checkAge(age) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Number(age) > 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000);
        });
    }

    checkAge(age)
        .then(message => alert(message))
        .catch(error => alert(error));
});
