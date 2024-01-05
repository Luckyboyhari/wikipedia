let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner")


function createAndAppendResults(result) {
    //1 div-container - result-item
    let {
        title,
        link,
        description
    } = result;
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);
    //2 achor-title - result-title
    let resultTitle = document.createElement("a");
    resultTitle.classList.add("result-title");
    resultTitle.textContent = title;
    resultTitle.href = link;
    resultTitle.target = "_blank";
    resultItemEl.appendChild(resultTitle)
    //3 title break
    let titleBreakEl = document.createElement("br");
    resultTitle.appendChild(titleBreakEl);
    //4 anthor Url - result-url
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.textContent = link;
    urlEl.href = link;
    urlEl.target = "_blank";
    resultTitle.appendChild(urlEl);

    //5 line break 
    let lineBreakEl = document.createElement("br");
    resultTitle.appendChild(lineBreakEl);
    //6 paragraph discription - line-description
    let resultdesEl = document.createElement("p");
    resultdesEl.classList.add("result-title");
    resultdesEl.textContent = description;
    resultTitle.appendChild(resultdesEl);
}

function displayResults(search_results) {
    spinnerEl.classList.toggle("d-none");
    for (let result of search_results) {
        createAndAppendResults(result)
    }

}

function searchwiki(event) {
    if (event.key === "Enter") {
        searchResultsEl.textContent = "";
        spinnerEl.classList.toggle("d-none");
        let serachlistenerval = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + serachlistenerval;
        let options = {
            method: "GET",

        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);


            })

    }
}





searchInputEl.addEventListener("keydown", searchwiki);