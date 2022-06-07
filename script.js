const inputs = document.querySelectorAll('.controls input');
// console.log(inputs);
function handleUpdate() {
// console.log(this.value);
// console.log(this.dataset); // to get array of all the data attribute in the element
// console.log(this.name); // prints the name value of input element
const suffix = this.dataset.sizing || ''; //null for color as it does not have data attribute ,will store px
// console.log(suffix);
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //adding suffix to add px at the end of blur and space value
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
