const success = document.getElementById("success");
const fail = document.getElementById("fail");
const warning = document.getElementById("warning");

success.addEventListener("click", () => {
    Toastify({
        text: "Well done!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on focus
        style: {
            minWidth: "300px",
            height: "80px",
            background: "#4E8D7C",
            borderRadius: "32px",
            fontSize: "34px",
            fontWeight: "500",
            letterSpacing: "-3.5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            alignContent: "center"
        },
        onClick: function(){}
    }).showToast();
})


// const failH1 = document.createElement("h1");
// failH1.style.fontSize = "20px";
// failH1.style.fontWeight = "500";
// failH1.style.margin = "0";
// failH1.textContent = "Oh snap!";

// const failP = document.createElement("p");
// failP.classList.add("notification_p");
// failP.style.fontSize = "14px";
// failP.style.fontWeight = "400";
// failP.style.margin = "5px 0 0 0";
// failP.textContent = "Change a few things up and try submitting again.";

// Обёртка


fail.addEventListener("click", () => {
    const failContent = document.createElement("div");
    failContent.innerHTML = `
        <div style="display: flex; flex-direction: column;">
            <h1 style="font-size: 20px; font-weight: 500; letter-spacing: -3.5%">Oh snap!</h1>
            <p style="font-size: 14px; font-weight: 400; letter-spacing: -3.5%">Change a few things up and try submitting again.</p>
        </div>
    `

    Toastify({
        node: failContent,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            minWidth: "300px",
            height: "80px",
            background: "#F64B3C",
            borderRadius: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
    }).showToast();
});

warning.addEventListener("click", () => {
    Toastify({
        text: "Warning!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on focus
        style: {
            minWidth: "300px",
            height: "80px",
            background: "#EF8D32",
            borderRadius: "32px",
            fontSize: "34px",
            fontWeight: "500",
            letterSpacing: "-3.5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            alignContent: "center"
        },
        onClick: function(){}
    }).showToast();
})