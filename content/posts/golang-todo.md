---
title: "GO TODO APP in uzbek"
description: "Go dasturlash tilida portfolio uchun puxta ishlangan CRUD API yaratamiz."
published: "12/25/2024"
keywords: "todo, crud, uzbek, golang, api, backend"
---

Portfolioga mos va puxta ishlangan CRUD API yaratamiz. Loyihani professional tarzda tuzib, Go tilidagi arxitektura uslubini, kod yozish standartlarini, hamda tushunchalarni o'zbek tilida sodda va batafsil tushuntirib beraman. Quyida loyihamizning umumiy ko'rinishi va tushuntirishlari keltiriladi.

### 1.1 Loyihaning papka tuzilishi

Biz quyidagi tuzilmani yaratamiz:

```bash
todo-app/
├── cmd/               // Asosiy kirish nuqtasi (main.go)
├── controllers/       // API endpointlarni boshqaruvchi qatlam
├── routes/            // Routerlar va yo'llar
├── services/          // Biznes mantiqni boshqarish
├── middlewares/       // Middleware funksiyalari
├── models/            // Ma'lumotlar modeli
├── db/                // Ma'lumotlar bazasi bilan ishlash
└── go.mod             // Go moduli konfiguratsiyasi
```

### 1.2 Qadam-baqadam tushuntirish

Har bir qismni yozishda quyidagi yo'nalishda ishlaymiz:

1. **`cmd/`:** Bu yerdagi `main.go` fayl API serverni ishga tushiradi.
2. **`controllers/`:** HTTP so'rovlarini qabul qilib, ularga mos javob beradigan kodlar yoziladi.
3. **`routes/`:** Endpointlarni belgilash va marshrutlash.
4. **`services/`:** Ma'lumotlarni qayta ishlash va mantiqiy operatsiyalarni amalga oshirish.
5. **`middlewares/`:** Masalan, autentifikatsiya yoki loglar uchun kodlar.
6. **`models/`:** Ma'lumotlarning strukturasini yaratish (masalan, `TODO` obyektining modeli).
7. **`db/`:** Ma'lumotlar bazasiga ulanishni tashkil qilish.

Agar tayyor bo'lsangiz, avval loyihaning asosiy papkasini yaratishdan boshlaymiz va birinchi bo'lib asosiy fayl (`main.go`) ustida ishlaymiz. Bu orqali Go muxitini sozlashni ham o'rganasiz.
<br />
<br />

---

### 2.1 Loyihani yaratish

Birinchi qadam – loyihani yaratish. Terminalda quyidagilarni bajaring:

```bash
mkdir todo-app
cd todo-app
go mod init todo-app
```

Bu `go.mod` faylini yaratadi, loyihangizning Go moduli bo'ladi.

### 2.2 Papka tuzilmasi

Yuqorida aytilgan tuzilmani yarating:

```bash
mkdir cmd controllers routes services middlewares models db
```

### 2.3 `main.go` faylini yozish

Fayl: `cmd/main.go`

```js
package main

import (
	"log"
	"net/http"
	"todo-app/routes"
)

func main() {
	router := routes.SetupRoutes() // Routerni sozlash
	log.Println("Server started on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
```

### 2.4 `routes/routes.go` faylini yozish

Fayl: `routes/routes.go`

```js
package routes

import (
	"net/http"
	"todo-app/controllers"

	"github.com/gorilla/mux"
)

func SetupRoutes() *mux.Router {
	router := mux.NewRouter()

	// TODO endpoints
	router.HandleFunc("/api/todos", controllers.GetTodos).Methods("GET")
	router.HandleFunc("/api/todos", controllers.CreateTodo).Methods("POST")
	router.HandleFunc("/api/todos/{id}", controllers.UpdateTodo).Methods("PUT")
	router.HandleFunc("/api/todos/{id}", controllers.DeleteTodo).Methods("DELETE")

	return router
}
```

**Izoh:** Biz `mux` paketidan foydalanamiz. Uni o'rnatish uchun terminalda:

```bash
go get -u github.com/gorilla/mux
```

### 2.5 `models/todo.go` faylini yozish

Fayl: `models/todo.go`

```js
package models

type Todo struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}
```

### 2.6 `controllers/todo_controller.go` faylini yozish

Fayl: `controllers/todo_controller.go`

```js
package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"
	"todo-app/models"

	"github.com/gorilla/mux"
)

var todos = []models.Todo{} // Hozircha xotiraviy saqlovchi (database o'rniga)

// GET /api/todos
func GetTodos(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(todos)
}

// POST /api/todos
func CreateTodo(w http.ResponseWriter, r *http.Request) {
	var todo models.Todo
	_ = json.NewDecoder(r.Body).Decode(&todo)
	todo.ID = len(todos) + 1
	todos = append(todos, todo)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(todo)
}

// PUT /api/todos/{id}
func UpdateTodo(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, _ := strconv.Atoi(params["id"])
	var updatedTodo models.Todo
	_ = json.NewDecoder(r.Body).Decode(&updatedTodo)

	for index, todo := range todos {
		if todo.ID == id {
			todos[index] = updatedTodo
			todos[index].ID = id
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(todos[index])
			return
		}
	}

	http.Error(w, "Todo not found", http.StatusNotFound)
}

// DELETE /api/todos/{id}
func DeleteTodo(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, _ := strconv.Atoi(params["id"])

	for index, todo := range todos {
		if todo.ID == id {
			todos = append(todos[:index], todos[index+1:]...)
			w.WriteHeader(http.StatusNoContent)
			return
		}
	}

	http.Error(w, "Todo not found", http.StatusNotFound)
}
```

### 2.7 API'ni ishga tushirish

Endi serverni ishga tushirish uchun quyidagilarni bajaring:

```bash
go run cmd/main.go
```

### 2.8 Sinov uchun

Postman yoki boshqa API testlash vositalari yordamida quyidagi so'rovlarni yuborishingiz mumkin:

- **GET** `http://localhost:8080/api/todos`
- **POST** `http://localhost:8080/api/todos`  
  Tana (Body):
  ```json
  {
    "title": "Learn Go",
    "completed": false
  }
  ```
- **PUT** `http://localhost:8080/api/todos/1`  
  Tana (Body):
  ```json
  {
    "title": "Master Go",
    "completed": true
  }
  ```
- **DELETE** `http://localhost:8080/api/todos/1`
