document.addEventListener('DOMContentLoaded', () => {
    const arrSize = document.querySelector("#arr_sz");
    const speedInput = document.querySelector("#speed_input");

    // Delay function to create pauses in execution
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function createBars() {
        let noOfBars = arrSize.value;
        let randomNumber = [];
        for (let i = 1; i <= noOfBars; i++) {
            let randomNum = Math.floor(Math.random() * 102);
            randomNumber.push(randomNum);
        }
        console.log(randomNumber);

        let barContainers = document.getElementById('barsContainer');
        
        // Clear existing bars
        barContainers.innerHTML = '';

        randomNumber.forEach(number => {
            let bar = document.createElement('div');
            bar.style.height = `${number * 2}px`;
            bar.classList.add('bar');
            barContainers.appendChild(bar);
        });
        console.log(randomNumber);
    }

    document.getElementById('array').addEventListener('click', createBars);
    arrSize.addEventListener('input', createBars);
    createBars();
});
