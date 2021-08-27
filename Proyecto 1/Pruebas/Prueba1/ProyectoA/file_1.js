//Autor: Erick Lemus
class draws {
    //Esta clase es un ejemplo de un archivo de entrada
    tringle_size = 3;
    square_size = 8;

    set_size(tam) {
        tringle_size = tam;
    }

    draw_triangle() {
        let triangle_draw = "";
        for (let draw_triangle_i = tringle_size; draw_triangle_i >= 1; draw_triangle_i--) {
            var draw_triangle_j = 0;
            for (draw_triangle_j = 0; draw_triangle_j < draw_triangle_i; draw_triangle_j++) {
                triangle_draw = triangle_draw + "*"
            }
            triangle_draw = triangle_draw + "\n"
        }
        console.log(triangle_draw);
    }
    /*
    Si este comentario se repite
    cuenta como parte de la repitencia
    */
    draw_sq() {
        let sq_draw = '';
        if (square_size >= 2 && square_size <= 50) {
            for (let draw_square_i = 1; draw_square_i <= square_size; draw_square_i++) {
                for (let draw_square_j = 1; draw_square_j <= square_size; draw_square_j++) {
                    sq_draw = sq_draw + "*";
                }
                sq_draw = sq_draw + "\n"
            }
            console.log(sq_draw);
        } else {
            console.log("Por favor ingrese un numero entre 2 y 50");
        }
    }
}