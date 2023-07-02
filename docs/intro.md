---
sidebar_position: 1
---

# Containers

## Summary

Most of the modern solutions use containers due to it's facility to automate things, if you have multiple applications for example frontend and backend like most of the traditional applications, you need to deploy that application, but how? maybe creating a VM or using a dedicated server on your company to install all the dependencies then start your applications, but what happens if application A has incompatibility with a library that application b needs.

It is possible to isolate your applications to avoid this problems,  the answer is Yes!!, and thats the objective of containers, as [docker explains](https://www.docker.com/resources/what-container/):

> A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

Thanks to the containers you can encapsulate all the dependencies of an application thus avoiding problems of incompatibility with other resources, when using containers there is no need to create virtual machines per application, besides having the advantage of being lightweight and only install what is strictly necessary for the operation of the application, imagine that it is like a small virtual machine.

### Tools

* Docker: Docker is a widely adopted containerization platform that provides an end-to-end solution for building, packaging, and deploying applications in containers. It includes the following key components:

    * Docker Engine: The core runtime that enables the creation and management of containers. It provides an API and command-line interface (CLI) for interacting with containers.

    * Docker Image: A lightweight, standalone, and executable software package that includes everything needed to run an application, including the code, runtime, libraries, and dependencies.

    * Dockerfile: A text file that contains instructions for building a Docker image. It specifies the base image, desired configuration, and steps to install and configure the application.

    * Docker Compose: A tool for defining and running multi-container applications. It uses a YAML file to define the services, networks, and volumes required for a multi-container setup.

* Podman: Podman is an open-source container engine that provides a command-line interface for managing containers and pods. Podman is part of the broader container ecosystem called the "OCI" (Open Container Initiative). Key features of Podman include:

    * Rootless Containers: Podman allows users to run containers as non-root, enhancing security and reducing the attack surface.

    * Pod Support: Podman supports pod-based container deployments, similar to Kubernetes. It enables users to manage multiple containers as a single unit, providing enhanced orchestration capabilities.

    * Docker Compatibility: Podman is designed to be compatible with the Docker command-line interface, allowing users to easily migrate Docker-based workflows to Podman.

## Virtual Machines

A virtual machine is a software emulation of a physical computer, complete with its own operating system (OS) and applications. It enables you to run multiple OS environments on a single physical machine by using a hypervisor, which is responsible for managing the virtualization process. Each VM is isolated from the host machine and other VMs, providing a high level of security and flexibility. VMs encapsulate the entire guest OS, including the kernel, libraries, and applications, resulting in a higher resource overhead.

### Components of a VM

* Hypervisor: A hypervisor, also known as a virtual machine monitor (VMM), is a software or firmware layer that enables the creation and management of VMs. It abstracts the physical hardware and allows multiple VMs to run on a single physical machine. There are two types of hypervisors: Type 1 hypervisors (bare-metal) run directly on the host's hardware, while Type 2 hypervisors (hosted) run as software on a host operating system.

* Guest OS: Each VM runs its own guest operating system, which can be different from the host OS. The guest OS functions as if it were running on a physical machine and has its own kernel, drivers, and libraries.

* Virtual Hardware: VMs have virtualized hardware resources, including virtual CPUs (vCPUs), virtual memory (RAM), virtual storage, and virtual network interfaces. The hypervisor manages the allocation and utilization of these resources among the VMs.

    * VMware ESXi: ESXi is a widely used Type 1 hypervisor that runs directly on the physical hardware. It provides a robust virtualization platform for server consolidation, allowing multiple VMs to run on a single physical server.

    * Oracle VirtualBox: VirtualBox is an open-source Type 2 hypervisor that runs on various operating systems, including Windows, macOS, and Linux. It offers a user interface for managing VMs and supports a wide range of guest operating systems. VirtualBox is commonly used for testing, development, and running virtualized environments on personal computers.

## Objetive

The objective of this repository is to document and share relevant information about what I learned from the use of container tools, during the different sections will be explained the different functionalities of the container tools, in this case with emphasis on docker.
