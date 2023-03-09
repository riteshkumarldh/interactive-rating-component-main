const circles = document.querySelectorAll(".circle");
const button = document.querySelector(".btn");
const ratedStar = document.querySelector(".rated-star span");


circles.forEach((circle) => {
    circle.addEventListener("click", (e) => {
        circles.forEach(cir => {
            if(cir.classList.contains("active")){
                cir.classList.remove("active");
            }
        });
        circle.classList.add("active");
        ratedStar.textContent = circle.textContent;

        // runs only after selecting ratings
        button.addEventListener("click", () => {
            document.body.classList.add("show");
        });

    });
});

