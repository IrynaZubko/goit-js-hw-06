const categoriesEl = document.querySelectorAll('.item');

console.log("Number of categories:", categoriesEl.length);

[...categoriesEl].map(category => {
    const titlesEl = category.querySelectorAll('h2');

    [...titlesEl].map(title => {
        console.log(`Category: ${title.textContent}`);
    });

    console.log("Elements:", category.querySelectorAll('li').length);
});