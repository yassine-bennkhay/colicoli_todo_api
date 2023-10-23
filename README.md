
## API Reference
This is a NodeJS TODO API for creating, updating, reading and deleting todos.
In this reference, I will give a quick documentation on how to get the NodeJS Server up and running in your machine and perform the different operations.

First things first make sure to download NodeJS from this [link](https://nodejs.org/en) if you don't have it already.


## Installation
#### Clone the Repo
```bash
git@github.com:yassine-bennkhay/colicoli_technical_assignment_nodejs_api.git

```
After cloning the repo in your IDE.
open the terminal and run the command

```bash
  npm install
```
This command will install all the necessary NodeJS modules and dependencies required.

#### Configure Database
In the root folder create a .env file with the values.
```bash
MONGO_URI=mongodb+srv://username:password@cluster0.ezw4qan.mongodb.net/todo_assignment
PORT=3000
```
change ```MONGO_URI
         ```
     to your own by heading to [Mongodb](https://www.mongodb.com/) and then create an account, configure the cluster and grap the ```URI
         ```.
 #### Run the Server
In the terminal run the command
 ```bash
npm run server
 ```         
If everything is done well, you will see that the server is running on port 3000.

#### BaseUrl
```
http://localhost:3000
```
#### Add a Todo

```http
  POST /api/v1/todos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `task`      | `string` | The Todo you want to add. |

The status is added by default Todo.
#### Response
```
{
    "task": "to demonstrate the respone.",
    "status": "todo",
    "_id": "65366e0d6525ff5a7979059a",
    "createdAt": "2023-10-23T12:58:53.435Z",
    "updatedAt": "2023-10-23T12:58:53.435Z",
    "__v": 0
}
```

#### Get all Todos

```http
  GET /api/v1/todos
```
#### Response
```
[
{
"_id": "653651e6f21e1d1be492a7dd",
"task": "Write the NodeJS API DOCS",
"status": "todo",
"createdAt": "2023-10-23T10:58:46.055Z",
"updatedAt": "2023-10-23T10:58:46.055Z",
"__v": 0
}
]
```
#### Update a Todo

```http
  PUT /api/v1/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. The ID of the Todo you want to update. |
| `task`      | `string` | The new value you want to update with. |
| `status`      | `string` | The status: Todo, In Porgress, or Done. |

#### Response

```
{
    "_id": "65366e0d6525ff5a7979059a",
    "task": "This is an updated todo, now its in progress.",
    "status": "progress",
    "createdAt": "2023-10-23T12:58:53.435Z",
    "updatedAt": "2023-10-23T13:01:05.807Z",
    "__v": 0
}
```
#### Delete a Todo

```http
  DELETE /api/v1/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. The ID of the Todo you want to delete. |

#### Response
```
{
    "id": "65366e0d6525ff5a7979059a"
}
```

## Author

- [@yassine-bennkhay](hhttps://github.com/yassine-bennkhay)

