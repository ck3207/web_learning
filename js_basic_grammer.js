/**
 * Created by hspcadmin on 2021/1/12.
 */
function demo_if_else(a, b){
    if (a > b) {
        document.getElementById("demo_id").innerHTML= a + " is bigger than " + b;
    }
    else if (a < b){
        document.getElementById("demo_id").innerHTML= a + " is smaller than " + b;
    }
    else {
        document.getElementById("demo_id").innerHTML= a + " is equal to " + b;
    }
}

function demo_switch_case(key, a, b, c, d) {
    switch (key){
        case a: document.getElementById("demo_id").innerHTML= "Im a"; break;
        case b: document.getElementById("demo_id").innerHTML= "Im b"; break;
        case c: document.getElementById("demo_id").innerHTML= "Im b"; break;
        default: document.getElementById("demo_id").innerHTML= "Not matched! Im default value: ".concat(d);
    }

}