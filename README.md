# docker
## build:
    docker build -t k2-g15-backend .
## Run:
    docker run -p 3000:3000 k2-g15-backend
## Jika tidak dapat dijalankan karena ada service yang berjalan di service yang sama:
    docker ps  

    docker stop <container-id>