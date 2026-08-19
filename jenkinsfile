pipeline {
    agent { label 'vm-agent' }

    tools {
        nodejs 'node20'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint || true'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    sudo rm -rf /var/www/html/*
                    sudo cp -r dist/* /var/www/html/
                '''
            }
        }
    }

    post {
        success {
            echo 'Build and deploy succeeded.'
        }
        failure {
            echo 'Build failed — check console output above for the failing stage.'
        }
        always {
            echo "Pipeline finished with status: ${currentBuild.currentResult}"
        }
    }
}
