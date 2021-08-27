class complex_exercises {
    fibonacci_generator(fibonacci_generator_max) {
        let fibonacci_generator_num1 = 0
        let fibonacci_generator_num2 = 1;
        for (let fibonacci_generator_i = 1; fibonacci_generator_i <= fibonacci_generator_max; fibonacci_generator_i = fibonacci_generator_i + 1) {
            console.log(fibonacci_generator_num1 + " ");
            let fibonacci_generator_prev = fibonacci_generator_num1 + fibonacci_generator_num2;
            fibonacci_generator_num1 = fibonacci_generator_num2;
            fibonacci_generator_num2 = fibonacci_generator_prev;
        }
    }

    hanoi_generator(hanoi_generator_n, hanoi_generator_origin, hanoi_generator_aux, hanoi_generator_dest) {
        if (hanoi_generator_n == 1)
            console.log("Mover disco de " + hanoi_generator_origin + " a " + hanoi_generator_dest);
        else {
            hanoi_generator(hanoi_generator_n - 1, hanoi_generator_origin, hanoi_generator_dest, hanoi_generator_aux);
            console.log("mover disco de " + hanoi_generator_origin + " a " + hanoi_generator_dest);
            hanoi_generator(hanoi_generator_n - 1, hanoi_generator_aux, hanoi_generator_origin, hanoi_generator_dest);
        }
    }

    fact_generator(fact_generator_n){
        let fact_generator_product = 1;
        let fact_generator_i = 1;
        do {
            fact_generator_product *= fact_generator_i;
            fact_generator_i++;
        } while (fact_generator_i <= fact_generator_n);
        console.log(fact_generator_product);
    }
}
