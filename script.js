// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const title = document.getElementById('main-title');
    title.textContent = 'JavaScript & DOM Manipulation is Awesome!';
    title.classList.add('highlight');
});

// Add a new element to the list
document.getElementById('add-element-btn').addEventListener('click', () => {
    const list = document.getElementById('dynamic-list');
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
});

// Remove the last element from the list
document.getElementById('remove-element-btn').addEventListener('click', () => {
    const list = document.getElementById('dynamic-list');
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    } else {
        alert('No more items to remove!');
    }
});