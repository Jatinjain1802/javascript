function rps(user,computer) {
    if (user=== computer) return "draw";
    if (user === "rock" && computer=== "scissore") return "User win";
    if (user === "scissore" && computer=== "paper") return "User win";
    if (user === "paper" && computer=== "rock") return "User win";
    return "computer win";

}

console.log(rps("rock","scissore"));
