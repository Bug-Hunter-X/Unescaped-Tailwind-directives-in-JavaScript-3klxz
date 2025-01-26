```javascript
// Correct approach using template literals
const color = 'red';
document.getElementById('myElement').classList.add(`bg-${color}-500`);

// Another correct approach using string concatenation
document.getElementById('myElement').classList.add('bg-' + color + '-500');
```