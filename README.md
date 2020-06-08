# Containers
## Introduction
Containers are self contained software components, which once constructed can be executed on any OS platform, linux, windows.

The containers consists of mainly three pieces
1) The application to run. .jar, .py, .exe
2) The base image which is needed and has necessary native support to enable application to run
3) Instructions to the container hosting application on a platform on how to run the container.

These are built into a one big image, which can be shared(just like the base image) for running the containers which in turn run the application.

## Advantages

The Advantage of running the applications as containers instead on directly on the host is, the developer takes cares of most of the dependencies at the time of building the container image. The user of the container dont need to be aware and worry about application specific dependencies, just make sure that container running application is able to run the container and the OS platform patches and licenses are up-to-date.

## Containarization

There are many tools to containerize the applications, but one which is widely adopted is Docker.

Docker has good eco-system built around it and good documentaion, which makes is easy to hence widely used.

## Image Repository

 The base images are like light weight version of OS, with just the minimum modules needed to execute certain supported applications.
 There are base images to run python, java and .Net applications. One could always add more modules to a base image and use as a base image.

 The standard images are publicly made available for common use in public image repository like DockerHub, AWS - Elastic Container Repository(ECR, locally available in AWS).

 ## Docker Instructions
Pre-Requisite: Docker Engine must be installed and running to execute below docker cli

 To build docker image: docker build -t prakashtanaji/nodeapp .
 To view docker images: docker images
 To run docker image:  docker run --name nodeapp-demo -p 64001:64000 -d nodeapptest
 To view runnning containers: docker ps
 To login into the running container shell: docker exec -it <container id>  /bin/ash


### To setup docker engine:
Download docker engine setup script from docker.com:
curl -fsSL https://get.docker.com -o get-docker.sh

Run the downloaded shell script to install the engine:
sudo sh get-docker.sh

To view the version of Docker running(make sure docker daemon is running):
docker version

To check the system kernel and other details:
docker info







