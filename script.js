document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');

    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.dataset.value;

            if (value === 'C') {
                currentInput = '';
            } else if (value === 'del') {
                currentInput = currentInput.slice(0, -1);
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = 'Error';
                }
            } else {
                currentInput += handleSpecialCharacters(value);
            }

            display.value = currentInput;
        });
    });

    function handleSpecialCharacters(value) {
        if (value === '&piv;') {
            return Math.PI.toString();
        }
        return value;
    }
});
