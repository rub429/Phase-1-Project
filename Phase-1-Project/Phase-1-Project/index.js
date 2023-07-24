console.log('index.js connected');
const searchTermsInput = document.body.querySelector('#search-terms');
// fetch meal categories data from TheMealDB API
const getMealCategories = async() => {
    const mealCategoriesApiURL = "www.themealdb.com/api/json/v1/1/categories.php"
    try {
        const response = await fetch(mealCategoriesApiURL)
        const data = await response.json()
        const categories = data.categories
        console.log('categories:',categories);
        return categories;
        }
        catch(error) {
            console.log(error)
            alert('Something went wrong, try again later')
        }
    }

// render meal categories data to dom
const renderMealCategories = (mealCategoriesArray) => {
    console.log('renderMealCategories');
    console.table(mealCategoriesArray);
}

// find and select a UL with meal categories ID dom element to append my data into
const mealCategoriesList = document.body.querySelector('#meal-categories-list')
// for each element in our meal categories array
mealCategoriesArray.array.forEach(mealCategory => {
    // create a wrapping element maybe <li> class of card
    const mealCategoriesListItem = document.createElement('li')
    mealCategoriesListItem.className = 'meal-category-card'
    //appendChild the li.card to selected DOM element
    mealCategoriesList.appendChild(mealCategoriesListItem)
    // display category name, image, and description
        // image
            // create an img element
            const mealCategoriesImg = document.createElement('img');
            // set img src to category thumbnail url
            mealCategoriesImg.src = mealCategory?.strCategoryThumb
            // give it a mobile friendly max width of like 300px
            mealCategoriesImg.width = 300
            // appendChild the image to our card
            mealCategoriesListItem.appendChild(mealCategoriesImg);
        // name
            // create an h4 element
            const mealCategoryName = document.createElement('h4');
            // set h4 element textContent to be meal category name
            mealCategoryName.textContent = mealCategory?.strCategory;
            // appendChild the h4 to our card
        mealCategoriesListItem.appendChild(mealCategoryName);
        // description
            // create an p element
            const mealCategoryDescription = document.createElement('p')
            // set p element textContent to be meal category description
            mealCategoryDescription.textContent = mealCategory?.strCategoryDescription; 
            // appendChild the p to our card
            mealCategoriesListItem.appendChild(mealCategoryDescription);
});

// fuction to call when form input is given focus
const handleFormInputFocus= async () => {
    console.log('focus occurred');
    const mealCategoriesArray = await getMealCategories();
    renderMealCategories(mealCategoriesArray)
};

// add event listenerto search term input
searchTermsInput.addEventListener('focus',handleFormInputFocus);