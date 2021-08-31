class ejercicios_numericos {
    fibonacci_generator(fibonacci_generator_max) {
        var siguiente = 1;
        var actual = 0;
        var temporal = 0;
		for (let x = 1; x <= fibonacci_generator_max; x++) {
			// fibonacci iterativo
			console.log(actual);
			temporal = actual;
			actual = siguiente;
			siguiente = siguiente + temporal;
		}
		console.log(actual);
    }

    torresDeHanoi(hanoi_generator_n, hanoi_generator_origin, hanoi_generator_aux, hanoi_generator_dest) {
        if (hanoi_generator_n == 1){
            console.log("Mover disco de " + hanoi_generator_origin + " a " + hanoi_generator_dest);
	}
        else {
            torresDeHanoi(hanoi_generator_n - 1, hanoi_generator_origin, hanoi_generator_dest, hanoi_generator_aux);
            console.log("mover disco de " + hanoi_generator_origin + " a " + hanoi_generator_dest);
            torresDeHanoi(hanoi_generator_n - 1, hanoi_generator_aux, hanoi_generator_origin, hanoi_generator_dest);
        }
    }
}
