// Cover Functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatId(number) {
    return (number < 10 ? '00' : number < 100 ? '0' : '') + number;
}

function stopPropagation(event) {
    event.stopPropagation();
}