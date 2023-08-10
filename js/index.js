$(document).ready(function () {
    $(document).mousemove(function (event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        $('#fake-cursor').css({
            'left': mouseX,
            'top': mouseY
        })
    })

    const component11 = document.getElementById('logo-container');
    const component12 = document.getElementById('balance-container');
    const component2 = document.getElementById('fake-cursor');

    component11.addEventListener('mouseover', () => {
        if (!('ontouchstart' in window || navigator.maxTouchPoints) )
            component2.style.display = 'block';
    });
    
    component11.addEventListener('mouseout', () => {
    component2.style.display = 'none';
    });

    component12.addEventListener('mouseover', () => {
        if (!('ontouchstart' in window || navigator.maxTouchPoints) )
            component2.style.display = 'block';
    });
    
    component12.addEventListener('mouseout', () => {
    component2.style.display = 'none';
    });
})