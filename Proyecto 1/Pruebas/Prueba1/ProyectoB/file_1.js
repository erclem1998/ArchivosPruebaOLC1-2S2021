//Autor: Herlindo Corona

class draws_generator {

    tringle_size = 3;
    square_size = 8;

    set_size(size) {
        tringle_size = size;
    }

    draw_triangle() {
        let draw_triangle_draw = "";
        for (let draw_triangle_i = tringle_size; draw_triangle_i >= 1; draw_triangle_i--) {
            let draw_triangle_j = 0;
            for (draw_triangle_j = 0; draw_triangle_j < draw_triangle_i; draw_triangle_j++) {
                draw_triangle_draw = draw_triangle_draw + "*"
            }
            draw_triangle_draw = draw_triangle_draw + "\n"
        }
        var x="prueba"; 
        console.log(draw_triangle_draw);
    }

    draw_square() {
        const a=5;
        let draw_square_draw = '';
        if (square_size >= 2 && square_size <= 50) {
            for (let draw_square_i = 1; draw_square_i <= square_size; draw_square_i++) {
                for (let draw_square_j = 1; draw_square_j <= square_size; draw_square_j++) {
                    draw_square_draw = draw_square_draw + "*";
                }
                draw_square_draw = draw_square_draw + "\n"
            }
            console.log(draw_square_draw);
        } else {
            console.log("Por favor ingrese un numero entre 2 y 50");
        }
    }
}

/*
    Si este comentario se repite
    cuenta como parte de la repitencia
    */