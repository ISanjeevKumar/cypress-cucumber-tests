pipeline {
    agent any
    tools { nodejs 'Nodejs' }
    parameters {
        string(name:'SPEC', defaultValue:'**/*.feature', description:'choose feature files that you want to run')
        choice(name:'BROWSER', choices: ['chrome', 'electron', 'firefox'], description:'choose the browser')
    }

    stages {
        stage('Install depedency') {
            steps {
                sh 'npm i'
                sh 'npx cypress verify'
            }
        }
        stage('Run Tests') {
            parallel {
                stage('Smoke') {
                    steps {
                        sh 'npm run test -tag "smoke"'
                    }
                }
                stage('Regression') {
                    steps {
                        sh 'npm run test -tag  "regression"'
                    }
                }
            }
        }
    }

    post {
        always {
            deleteDir()
        }
    }
}

