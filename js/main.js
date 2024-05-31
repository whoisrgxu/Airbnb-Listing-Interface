/********************************************************************************
*  WEB422 – Assignment 2
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Rong Gang Xu   Student ID: 129160230   Date: May 28th, 2024
*
*  Github Repository: https://github.com/senecargxu/Web422-AS2
*  Published URL: https://web422-as2-evym.onrender.com
********************************************************************************/

let page = 1;
const perPage = 10;
let searchName = null;
let tbody = document.getElementById('listingsTable');
let modalTitle = document.querySelector('.modal-title');
let modalBody = document.querySelector('.modal-body');


function loadListingsData(){

    let url;
    if (searchName !== null) {
        url = `https://web422-as1-wuzl.onrender.com/api/listings?page=${page}&perPage=${perPage}&name=${searchName}`;
    } else 
        url = `https://web422-as1-wuzl.onrender.com/api/listings?page=${page}&perPage=${perPage}`;
    fetch(url)
    .then(res => {
        return res.ok ? res.json() : Promise.reject(res.status);
    })
    .then(data => {
        tbody.innerHTML = "";
        if(data.length){
            // non-empty array (listings available)
            createRowElements(data);
        }else{
            // empty array (no listings available)
            if (page > 1) page--;
            else {
                let rowData = document.createElement('tr');
                rowData.innerHTML = '<td colspan="4"><strong>No data available</td>';
                tbody.appendChild(rowData);
            }
        }
        updateCurrentPage();
    }).catch(err => {
        // error (no listings available)
        tbody.innerHTML = "";
        if (page > 1) page--;
        else {
            let rowData = document.createElement('tr');
            rowData.innerHTML = '<td colspan="4"><strong>No data available</td>';
            tbody.appendChild(rowData);
        }
    });
    
}

function createRowElements(data){

    data.map((listing) => {

        let listingRow = `<tr data-id="${listing._id}">
            <td class="align-top">${listing.name}</td>
            <td class="align-top">${listing.room_type}</td>
            <td class="align-top">${listing.address.street}</td>
            <td class="align-top">${listing.summary}<br><br>
            <strong>Accommodates:</strong> ${listing.accommodates}<br>
            <strong>Rating:</strong> ${listing.review_scores.review_scores_rating} (${listing.number_of_reviews} Reviews)<br>
            </td>
        </tr>`

        tbody.innerHTML += listingRow;
    })
    displayListings();
}
function updateCurrentPage() {

    let currentpage = document.getElementById('current-page');
    currentpage.textContent = page;
}

function displayListings() {

    let rows = document.querySelectorAll('#listingsTable tr');

    rows.forEach(row => {

        row.addEventListener('click', (e) => {
            let id = row.getAttribute('data-id');
            fetch(`https://web422-as1-wuzl.onrender.com/api/listings/${id}`)
            .then(res => {
                return res.ok ? res.json() : Promise.reject(res.status);
            })
            .then(data => {
                if(data){
                    // listings available

                    modalTitle.textContent = data.name;

                    modalBody.innerHTML = `
                    
                        <img id="photo" onerror="this.onerror=null;this.src = 'https://placehold.co/600x400?text=Photo+Not+Available'" class="img-fluid w-100" src="${data.images.picture_url }"><br><br>
                        ${data.neighborhood_overview}<br><br>
                        <strong>Price:</strong> ${data.price.toFixed(2)}<br>
                        <strong>Room:</strong> ${data.room_type}<br>
                        <strong>Bed:</strong> ${data.bed_type} (${data.beds})<br><br>
                    `
                }else{
                    // no listings found
                    modalTitle.textContent = `No data found`;
                }
            }).catch(err => {
                // error (no listings available)
                modalTitle.textContent = `No data found`;
            });
            new bootstrap.Modal(document.getElementById('detailsModal')).show();
        })
    })
}

document.addEventListener('DOMContentLoaded', function(e){

    let previousPage = document.getElementById('previous-page');
    let nextPage = document.getElementById('next-page');
    let searchForm = document.getElementById('searchForm');
    let clearForm = document.getElementById('clearForm');
    let name = document.getElementById('name');

    previousPage.addEventListener('click', function(e){

        if (page > 1) {

            page--;
            loadListingsData();
        }
    })

    nextPage.addEventListener('click', function(e){

            page++;
            loadListingsData();
    })

    searchForm.addEventListener('submit', function(e) {

        e.preventDefault();
        searchName = encodeURIComponent(name.value.trim());
        console.log(searchName);
        page = 1;
        loadListingsData();
    })

    clearForm.addEventListener('click', function(e) {

        name.value = "";
        searchName = null;
        loadListingsData();
    })

    loadListingsData();
})