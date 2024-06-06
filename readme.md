# Airbnb Listings Interface

This project is a client-side application that interacts with a "Listings" API to produce a rich user interface for accessing Airbnb listing data. The interface allows users to search for listings, view a subset of listing data in a table, and display additional information in a modal window when a specific listing is clicked.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features
- Searchable table of Airbnb listings with columns: Name, Type, Location, and Summary.
- Pagination controls to navigate through the listings.
- Modal window to display detailed information about a listing, including a picture, neighborhood overview, price, room type, bed type, and number of beds.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/airbnb-listings-interface.git
    ```
2. Navigate to the project directory:
    ```bash
    cd airbnb-listings-interface
    ```

## Usage
1. Open `index.html` in a web browser to view and interact with the application.
2. Use the search form in the navbar to filter listings by name.
3. Navigate through the pages using the pagination controls.
4. Click on a listing row to view more details in a modal window.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5

## API Endpoints
The application interacts with the following API endpoints:
- `GET /api/listings?page={page}&perPage={perPage}`: Retrieves a paginated list of listings.
- `GET /api/listings?page={page}&perPage={perPage}&name={name}`: Retrieves a paginated list of listings filtered by name.
- `GET /api/listings/{id}`: Retrieves detailed information about a specific listing by ID.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Create a pull request.
## Contact
Roxu1927@outlook.com Project Link: https://github.com/whoisrgxu/Airbnb-Listing-Interface
Deployed as: https://web422-as2-evym.onrender.com
