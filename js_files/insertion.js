document.addEventListener('DOMContentLoaded', () => {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function insertionSort() {
        const bars = document.querySelectorAll('.bar');
        const speed = 101 - document.querySelector('#speed_input').value;

        for (let i = 1; i < bars.length; i++) {
            let key = parseInt(bars[i].style.height);
            let j = i - 1;

            bars[i].style.background = 'red'; // Current key element

            await delay(speed);

            while (j >= 0 && parseInt(bars[j].style.height) > key) {
                bars[j].style.background = 'yellow'; // Current element being compared
                bars[j + 1].style.height = bars[j].style.height;
                await delay(speed);
                bars[j].style.background = 'blue'; // Reset color after comparison
                j = j - 1;
            }
            bars[j + 1].style.height = key + 'px';
            bars[i].style.background = 'blue'; // Reset color after insertion

            // Mark the sorted part
            for (let k = 0; k <= i; k++) {
                bars[k].style.background = 'green'; // Element in correct position
            }
        }
    }

    document.getElementById('insertion').addEventListener('click', insertionSort);
});
