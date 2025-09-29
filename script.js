// heart-icon favourite-number functionality
document.querySelectorAll(".favourite-number").forEach(function(el) {
    el.addEventListener("click", function() {
        let heartIconCount = parseInt(document.getElementById("heart-count").innerText);
        heartIconCount++;
        document.getElementById("heart-count").innerText = heartIconCount; 
    });
});
