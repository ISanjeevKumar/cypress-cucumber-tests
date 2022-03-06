pipeline {
    agent {
        label 'master'
    }
    stages {
        stage('Run Tests') {
            parallel {
                stage('Smoke') {
                    steps {
                        bat 'run-tests.bat'
                    }
                }
                stage('Regression') {
                    steps {
                        sh 'run-tests.sh'
                    }
                    }
                }
            }
        }
    }

