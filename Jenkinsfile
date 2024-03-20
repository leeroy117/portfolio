pipeline {
    agent any

    environment {
        DOCKER_IMAGE_TAG = "${env.BUILD_NUMBER}" // Usa el número de compilación como etiqueta de la imagen Docker
    }

    stages {
        stage('Checkout!') {
            steps {
                git branch: 'main', url: 'https://github.com/leeroy117/portfolio.git'
            }
        }
        stage('Construir imagen Docker!') {
            steps {
                script {
                    // Construir la imagen Docker
                    sh 'docker build -t portfolio:${DOCKER_IMAGE_TAG} .'
                }
            }
        }
        stage('Desplegar!') {
            steps {
                script {
                    // Detener y eliminar contenedores antiguos si existen
                    sh 'docker stop portfolio || true'
                    sh 'docker rm portfolio || true'
                    // Ejecutar el contenedor Docker con la nueva imagen
                    sh 'docker run -d --name portfolio -p 3000:3000 portfolio:${DOCKER_IMAGE_TAG}'
                }
            }
        }
    }
}
