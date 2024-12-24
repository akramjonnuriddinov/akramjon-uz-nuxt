---
title: "Go'da CRUD API yaratish va uni Vue.js’da ishlatish"
description: "Go'da CRUD API yaratish va uni Vue.js’da ishlatishni bosqichma-bosqich tushuntiraman. Har bir qadamni tushunarli qilish uchun hamma narsani batafsil tushuntiraman."
published: "12/24/2024"
---

Albatta, boshlaymiz! Go'da CRUD API yaratish va uni Vue.js’da ishlatishni bosqichma-bosqich tushuntiraman. Har bir qadamni tushunarli qilish uchun hamma narsani batafsil tushuntiraman.

## **1-qadam: Go loyihasini sozlash**

Go loyihasini yaratish uchun terminalda quyidagilarni bajaramiz:

1. **Loyiha papkasini yaratamiz**:

   ```bash
   mkdir golang-crud
   cd golang-crud
   ```

2. **Go modulyatsiyasini boshlaymiz**:

   ```bash
   go mod init golang-crud
   ```

   Bu `go.mod` faylini yaratadi, unda loyihaning nomi va bog‘lanishlari saqlanadi.

## **2-qadam: Kerakli kutubxonalarni o‘rnatish**

Biz RESTful API yaratishda yordam beradigan kutubxonalarni o‘rnatamiz:

- **Gin Web Framework**: HTTP serverni boshqarish uchun.
- **GORM**: Ma'lumotlar bazasini boshqarish uchun.

Quyidagi buyruqlarni ishlating:

```bash
go get -u github.com/gin-gonic/gin
go get -u gorm.io/gorm
go get -u gorm.io/driver/sqlite
```

Bu kutubxonalar Gin, GORM va SQLite (bazaviy ma'lumotlar bazasi)ni qo‘shadi.

## **3-qadam: Ma'lumotlar bazasini sozlash**

Ma'lumotlar bazasi va modelni sozlashni boshlaymiz. `main.go` faylini oching va quyidagi kodni yozing:

```js
package main

import (
	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Book struct {
	ID     uint   `json:"id" gorm:"primaryKey"`
	Title  string `json:"title"`
	Author string `json:"author"`
	Price  float64 `json:"price"`
}

var DB *gorm.DB

func main() {
	var err error
	DB, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("Ma'lumotlar bazasiga ulanishda xatolik!")
	}

	// Modelni avtomatik yaratish
	DB.AutoMigrate(&Book{})

	r := gin.Default()

	r.Run(":8080")
}
```

### Kodni tushuntirish:

1. **`Book` modeli**:
   - `gorm:"primaryKey"` orqali `ID` asosiy kalit sifatida belgilanadi.
   - JSON formatida ishlash uchun `json` teglari qo‘shilgan.
2. **Ma'lumotlar bazasini ulash**:
   - SQLite haydovchisini uladik.
   - `AutoMigrate` bilan model asosida jadval yaratdik.

## **4-qadam: CRUD amallarini yozish**

Endi API uchun marshrutlarni qo‘shamiz. Har bir amal uchun alohida funksiya yozamiz:

```js
func main() {
	var err error
	DB, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("Ma'lumotlar bazasiga ulanishda xatolik!")
	}

	DB.AutoMigrate(&Book{})

	r := gin.Default()

	r.GET("/books", GetBooks)
	r.POST("/books", CreateBook)
	r.GET("/books/:id", GetBookByID)
	r.PUT("/books/:id", UpdateBook)
	r.DELETE("/books/:id", DeleteBook)

	r.Run(":8080")
}

func GetBooks(c *gin.Context) {
	var books []Book
	DB.Find(&books)
	c.JSON(200, books)
}

func CreateBook(c *gin.Context) {
	var book Book
	if err := c.ShouldBindJSON(&book); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	DB.Create(&book)
	c.JSON(200, book)
}

func GetBookByID(c *gin.Context) {
	id := c.Param("id")
	var book Book
	if err := DB.First(&book, id).Error; err != nil {
		c.JSON(404, gin.H{"error": "Kitob topilmadi!"})
		return
	}
	c.JSON(200, book)
}

func UpdateBook(c *gin.Context) {
	id := c.Param("id")
	var book Book
	if err := DB.First(&book, id).Error; err != nil {
		c.JSON(404, gin.H{"error": "Kitob topilmadi!"})
		return
	}
	if err := c.ShouldBindJSON(&book); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	DB.Save(&book)
	c.JSON(200, book)
}

func DeleteBook(c *gin.Context) {
	id := c.Param("id")
	if err := DB.Delete(&Book{}, id).Error; err != nil {
		c.JSON(404, gin.H{"error": "Kitob topilmadi!"})
		return
	}
	c.JSON(200, gin.H{"message": "Kitob o‘chirildi!"})
}
```

## **5-qadam: Vue.js bilan ulash**

1. **Axios-ni o‘rnatish**:
   Vue.js loyihasida Axios orqali API bilan ishlaymiz. Axiosni o‘rnatish uchun:

   ```bash
   npm install axios
   ```

2. **Axios konfiguratsiyasi**:
   Vue.js loyihasida ma'lumotlarni API’dan olish va jo‘natish uchun quyidagi kodni yozamiz:

   ```javascript
   import axios from "axios"

   const api = axios.create({
     baseURL: "http://localhost:8080",
   })

   export default api
   ```

3. **Misol komponent**:
   Masalan, kitoblar ro‘yxatini ko‘rish uchun:

   ```vue
   <template>
     <div>
       <h1>Kitoblar</h1>
       <ul>
         <li v-for="book in books" :key="book.id">
           {{ book.title }} - {{ book.author }} - ${{ book.price }}
         </li>
       </ul>
     </div>
   </template>

   <script>
   import api from "@/api"

   export default {
     data() {
       return {
         books: [],
       }
     },
     async created() {
       const response = await api.get("/books")
       this.books = response.data
     },
   }
   </script>
   ```

Bu dastur CRUD API’ni yaratish va Vue.js orqali undan foydalanishni o‘z ichiga oladi. Har bir qadamda savolingiz bo‘lsa, bemalol so‘rang! 😊
