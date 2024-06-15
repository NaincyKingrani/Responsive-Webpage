document.addEventListener("DOMContentLoaded", () => {
    const b = document.getElementById("b1");
    const s = document.getElementById("Sec1");

    b.addEventListener("click", () => {
        const currentColor = s.style.backgroundColor;
        s.style.backgroundColor = currentColor === "lightblue" ? "pink" : "lightblue";
    });
});