import options from './options'
import '../scss/snow.scss';
import Flake from './flake';
import rand from './rand';



setInterval(() => {
    let flake = new Flake (options.flakes[rand(0,options.fonts.length)],
                        rand(0, options.maxWidth - 100), -20,
                        rand(0, options.maxHeight), 
                        "&#10054;"
                    );
                    flake.draw();
                    flake.move(options.speed[rand(0, options.speed.length)]);
},100);

