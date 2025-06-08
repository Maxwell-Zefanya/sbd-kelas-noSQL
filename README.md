# Mini-Proyek SBD Kelas 02 (Back-end)
### Made by Kelompok 15
Anggota:
- Anthonius Hendhy Wirawan - 2306161795
- Maxwell Zefanya Ginting - 2306221200
- Ruben Kristanto - 2306214626
## Pendahuluan
Repository ini mengandung bagian back-end dari mini-proyek kelas SBD 02 untuk kelompok 15. Repository front-end terletak pada link dibawah ini:  
https://github.com/RubenKristanto/Frontend-SBD-kelas-no-SQL  

Proyek yang telah dibuat ini bertujuan untuk membuat sebuah aplikasi web yang bertemakan game marketplace. Pengguna bisa membuat akun untuk melihat atau membeli berbagai game. Game tersebut akan disimpan ke akun sang pengguna dan bisa dimainkan sesuai keinginan. Selain itu, aplikasi website ini juga memiliki fitur achievement yang bisa diraih oleh pengguna saat ia melakukan berbagai aktivitas baik di Game ataupun di store ini.  

Aplikasi ini memiliki 3 bagian, yaitu bagian front-end, bagian back-end, dan bagian database. Bila digambarkan dalam diagram, relasi antara ketiga bagian adalah sebagai berikut:  

![Relasi Aplikasi](https://imgur.com/LFJ2b4J.png)  

Secara garis besar, bagian front-end akan berkomunikasi dengan back-end untuk mendapatkan data sesuai dengan format yang diinginkan. Data tersebut sendiri bisa ada pada back-end karena bagian back-end juga terhubung dengan database. Sesuai dengan gambar, teknologi yang digunakan untuk ketiga bagian adalah sebagai berikut:  
- Database: MongoDB Atlas, a NoSQL document database
- Back-end: Node.js
- Front-end: React with Vite

Jalannya bagian database sudah diurus sendiri oleh MongoDB, dimana produknya sudah bisa langsung digunakan untuk keperluan komunikasi data. Namun, untuk menjalankan aplikasi back-end dan front-end, perlu dilakukan beberapa tahap yang relatif lebih sulit yang melibatkan lebih banyak tahap. Oleh karena itu, kelompok kami sampai kepada solusi yaitu dengan kontainerisasi kedua aplikasi. Teknologi kontainerisasi yang kami gunakan adalah Docker, dimana melalui Docker bagian back-end dan front-end bisa dijalankan dengan lebih mudah dan efisien.  

## Cara Menjalankan
### Part 1: Setup
**PERHATIAN: Langkah yang diberikan pada README ini sama dengan yang ada pada README front-end. Anda hanya perlu mengikuti salah satunya saja.**  

Sebelum container bisa dijalankan, perlu mendownload dan menyetel aplikasi Docker Desktop terlebih dahulu. Tempat men-download ada pada link https://www.docker.com/products/docker-desktop/. Untuk penyetelan bisa mengikuti langkah-langkah pada link berikut https://docs.docker.com/desktop/.

### Part 2: Run
**PERHATIAN: Supaya aplikasi bisa berjalan dengan benar, pastikan anda terhubung ke internet.**  

Setelah Docker Desktop disetel, buka dua instance program command line secara bersamaan. Instance A akan menarik dan menjalankan container back-end dan instance B akan menjalankan container front-end. Command yang perlu dimasukkan kedalam kedua instance adalah sebagai berikut:  
#### Instance A:
    docker pull maxwellzefanya/k2-g15-backend:latest
    docker build -t maxwellzefanya/k2-g15-backend .
    docker run -p 3000:3000 maxwellzefanya/k2-g15-backend
#### Instance B
    docker pull maxwellzefanya/k2-g15-frontend:latest
    docker build -t maxwellzefanya/k2-g15-frontend .
    docker run -p 5173:5173 maxwellzefanya/k2-g15-frontend
### Part 3: Stop
Untuk menghentikan container yang telah dijalankan, bisa dilakukan secara interaktif melalui Docker Desktop. Pertama, masuk ke bagian *Containers*. Pada bagian *Containers* bisa ditemukan berbagai container yang sudah di-build dan siap untuk dijalankan / sedang berjalan. Untuk menghentikan container back-end dan front-end proyek ini, bisa dilakukan dengan menekan tombol berhenti pada container yang memiliki image `maxwellzefanya/k2-g15-backend:latest` dan `maxwellzefanya/k2-g15-frontend:latest`.
