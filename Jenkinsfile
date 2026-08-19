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

        stage('Pipeline') {
            steps {
                dir('ReactCrash') {
                    sh 'npm ci'
                    sh 'npm run lint || true'
                    sh 'npm run build'
                    sh '''
                        sudo rm -rf /var/www/html/*
                        sudo cp -r dist/* /var/www/html/
                    '''
                }
            }
        }
    }

    post {
        success { echo 'Build and deploy succeeded.' }
        failure { echo 'Build failed — check console output above.' }
    }
}
