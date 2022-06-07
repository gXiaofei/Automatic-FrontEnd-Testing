function add(a, b) {
    return a + b;
}


function minus(a, b) {
    return a - b;
}

try{
    module.exports = {
        add,
        minus
    } 
}catch(e) {}
