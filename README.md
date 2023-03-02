# App Builder - backend

> Default port `3002`

# How to install phase4

Create a separate folder for the server outside a git initiated place.
Delete the exsisting data folder.

Execute

`git clone https://YasasSandeepa@bitbucket.org/hosura/poc-data-repo.git data`

## Endpoints

| Method | URL                                        | Remarks                                       | Example                                         |
| ------ | ------------------------------------------ | --------------------------------------------- | ----------------------------------------------- |
| `GET`  | {localhost:3002}/features/                 | Get a List all the business feature available | http://localhost:3002/features                  |
| `GET`  | {localhost:3002}/features/{featureId}      | Get JSON structure of the business feature    | http://localhost:3002/features/MarketWatch      |
| `GET`  | {localhost:3002}/features/{featureId}/data | Get data JSON of the business feature         | http://localhost:3002/features/MarketWatch/data |
| `POST` | {localhost:3002}/features/{featureId}      | Create structure of a new business feature    | http://localhost:3002/features/MarketWatch      |
| `POST` | {localhost:3002}/features/{featureId}/data | Create data of a new businesss feature        | http://localhost:3002/feautres/MarketWatch/data |
| `PUT`  | {localhost:3002}/features/{featureId}      | Update structure JSON of a business feature   | http://localhost:3002/features/MarketWatch      |
| `PUT`  | {localhost:3002}/features/{featureId}/data | Update data JSON of a business feature        | http://localhost:3002/features/MarketWatch/data |
| `GET`  | {localhost:3002}/pages/{pageId}            | Get JSON structure of the page                | http://localhost:3002/pages/p001                |
| `PUT`  | {localhost:3002}/pages/{pageId}/           | Update JSON structure of the page             | http://localhost:3002/pages/p001                |
| `GET`  | {localhost:3002}/data/{dataType}           | Get different types of data                   | http://localhost:3002/data/symbolData           |
| `GET`  | {localhost:3002}/templates/                | Get a list of all templates                   | http://localhost:3002/templates/                |
| `GET`  | {localhost:3002}/templates/{templateName}  | Get structure JSON of the template            | http://localhost:3002/templates/Card            |
| `POST` | {localhost:3002}/templates/Card            | Create the template structure JSON            | http://localhost:3002/templates/Card            |
| `PUT`  | {localhost:3002}/templates/{templateName}  | Update the template structure JSON            | http://localhost:3002/templates/Card            |
