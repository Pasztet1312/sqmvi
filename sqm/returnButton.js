// returnButton.js
(function() {
    function createReturnButton() {
        const button = document.createElement('button');
        button.innerText = '↩';
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.backgroundColor = '#1a73e8';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '50%';
        button.style.width = '50px';
        button.style.height = '50px';
        button.style.fontSize = '24px';
        button.style.cursor = 'pointer';
        button.style.zIndex = '1000';
        button.addEventListener('click', function() {
            window.close();
        });
        document.body.appendChild(button);
    }

    document.addEventListener('DOMContentLoaded', function() {
        createReturnButton();
    });
})();