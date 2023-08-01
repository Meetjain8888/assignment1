setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
            setTimeout(() => {
                document.body.style.backgroundColor = 'green';
                setTimeout(() => {
                    document.body.style.backgroundColor = 'blue';
                }, 1000)                
            }, 1000)            
        }, 1000)        
    }, 1000)
}, 1000)

const delayedcolorchange = (newColor,delay,donext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        donext();
    }, delay)
}
delayedcolorchange('red', 1000, () => {
    delayedcolorchange('orange', 1000, () => {
        delayedcolorchange('yellow', 1000, () => {
            delayedcolorchange('green', 1000, () => {
                delayedcolorchange('blue', 1000, () => {

                })
            })
        })
    })
});
