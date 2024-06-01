document.addEventListener('DOMContentLoaded', function(){
    const article = document.getElementById('content');
    const fontSizePlaceholder = document.getElementById('font-size');

    function setFontSize() {
        article.style.fontSize = `${fontSize}px`;
        fontSizePlaceholder.textContent = fontSize;
        localStorage.setItem('fontSize', fontSize);
    }

    let fontSize = parseInt(localStorage.getItem('fontSize')) || 18;
    setFontSize();

    document.querySelectorAll('.font-adjust').forEach(function(button){
        button.addEventListener('click', function(ev){
            if (ev.target.textContent == '+') {
                if (fontSize != 48)
                    fontSize += 2;
            }
            else {
                if (fontSize != 12)
                    fontSize -= 2;
            }
            setFontSize();
            
        });
    });

});