pipeline {
    agent {
        label 'docker'
    }

    options {
        buildDiscarder(logRotator(daysToKeepStr: '150', numToKeepStr: '30', artifactDaysToKeepStr: '30', artifactNumToKeepStr: '15'))
        disableConcurrentBuilds()
        timeout(time: 30, unit: 'MINUTES')
        gitLabConnection('gitlab.isaac.nl')
        gitlabBuilds(builds: [
            'clean',
            'checkout',
            'update docker images',
            'run unit tests'
        ])
    }

    stages {
        stage('clean') {
            steps {
                gitlabCommitStatus(name: 'clean') {
                    // Cleanup entire workspace
                    deleteDir()
                }
            }
        }
        stage('checkout') {
            steps {
                gitlabCommitStatus(name: 'checkout') {
                    // Checkout the latest version
                    checkout scm
                    script {
                        env.DOCKER_TAG = env.BRANCH_NAME.toLowerCase().replaceAll(/[^a-z0-9_.\-]/, '-');
                    }
                }
            }
        }
        stage('update docker images') {
            steps {
                gitlabCommitStatus(name: 'update docker images') {
                    // Update the docker images in our docker registry.
                    script {
                        docker.withRegistry('https://rocked.isaac.local', 'docker-registry-app-ci') {
                            docker.build('rocked.isaac.local/payvision/payvision-sdk-javascript:' + env.DOCKER_TAG, '--pull .').push(env.DOCKER_TAG)
                        }
                    }
                }
            }
        }
        stage('run unit tests') {
            steps {
                gitlabCommitStatus(name: 'run unit tests') {
                    script {
                        docker.withRegistry('https://rocked.isaac.local', 'docker-registry-app-ci') {
                            docker.image('rocked.isaac.local/payvision/payvision-sdk-javascript:' + env.DOCKER_TAG).inside {
                                sh 'cd /app && npm run test tests/unit'
                            }
                        }
                    }
                }
            }
        }
        stage('sonarqube analysis') {
            // We only run SonarQube analysis on our develop branch.
            // The 'sonar-project.properties' that is bundled with this project is used for that purpose
            when {
                expression {
                    env.BRANCH_NAME == 'develop'
                }
            }
            steps {
                script {
                    scannerHome = tool 'sonar-runner 3.x'
                }
                withSonarQubeEnv('Sonar') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
    }

    post {
        failure {
            // On failure, send an e-mail to the person who broke the build.
            emailext (
                subject: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                body: """<p>FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
                <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>""",
                recipientProviders: [
                    [$class: 'RequesterRecipientProvider'],
                    [$class: 'DevelopersRecipientProvider']
                ],
                attachLog: true,
                compressLog: true
            )
        }
    }
}
