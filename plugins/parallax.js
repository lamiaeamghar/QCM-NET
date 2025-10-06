import Parallax from 'parallax-js'

const scene = document.querySelectorAll('.scene');
if(scene) {
    scene.forEach((el, i) => {
        const thing = new Parallax(el);
        thing(el)
    });
};

