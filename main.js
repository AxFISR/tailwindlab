document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btnTheme").addEventListener("click", function() {
        document.documentElement.classList.toggle("dark");
        document.getElementById("btnTheme").innerText = document.documentElement.classList.contains("dark") ? "light" : "dark";
    });

    document.getElementById('btnmenu').addEventListener("click", function() {
        document.getElementById("popupmenu").classList.toggle("hidden");
    });

    document.querySelectorAll("a").forEach(function(el) {
        el.addEventListener("click", function() {
            // Get the text content of the clicked menu option
            var menuOption = el.textContent.toLowerCase();

            // Change the background and text based on the menu option
            changeBodyContent(menuOption);

            document.getElementById("popupmenu").classList.add("hidden");
        });
    });

    // Function to change the body background and text based on the menu option
    function changeBodyContent(option) {
        var bodyElement = document.querySelector('.p-4.grow.border.border-slate-500');

        // Reset background and text first (in case other option was selected before)
        bodyElement.style.backgroundColor = '';
        bodyElement.innerText = '';

        // Apply background and text based on the selected menu option
        switch (option) {
            case 'home':
                bodyElement.style.backgroundColor = 'lightblue';
                bodyElement.innerText = 'Welcome to the Home Page!';
                break;
            case 'projects':
                bodyElement.style.backgroundColor = 'lightgreen';
                bodyElement.innerText = 'Check out our Projects!';
                break;
            case 'about':
                bodyElement.style.backgroundColor = 'lightcoral';
                bodyElement.innerText = 'Learn more About Us!';
                break;
        }
    }
});
