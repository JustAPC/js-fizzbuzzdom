for( i=1; i<=100; i++ ) {
    document.getElementById("contenitoreNumeri").innerHTML += `
    <div class="col_custom text-center fs-2 p-3"> 
        <div class="py-5 bg-box1">${i}</div> 
    </div>
    `
    if( i % 3 == 0  ){
        document.getElementById("contenitoreNumeri").innerHTML += `
        <div class="col_custom text-center fs-2 p-3"> 
            <div class="py-5 bg-box1 bg-fizz">Fizz</div> 
        </div>
        `
    }

    if( i % 5 == 0  ){
        document.getElementById("contenitoreNumeri").innerHTML += `
        <div class="col_custom text-center fs-2 p-3"> 
            <div class="py-5 bg-box1 bg-buzz">Buzz</div> 
        </div>
        `
    }

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`Il ${i} è divisibile per 3 e per 5`)
        document.getElementById("contenitoreNumeri").innerHTML += `
        <div class="col_custom text-center fs-2 p-3"> 
            <div class="py-5 bg-box1 bg-fizzbuzz">FizzBuzz</div> 
        </div>
        `
    }
}
