// console.log("chk");
 const labels = document.querySelectorAll('.form-control label');
 labels.forEach( label1 => {
    label1.innerHTML = label1.innerText
            .split('')
            .map( (letters, ind) => `<span style="transition-delay:${ind * 50}ms">${letters}</span>`)
            .join('')
 })