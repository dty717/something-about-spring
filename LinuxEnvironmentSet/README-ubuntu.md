# Set Linux Environment(ubuntu)(🙈🙉🙊)


## install java
* create dir for java
```sh
    cd /usr
    sudo mkdir java
    cd java
``` 

* install software-properties-common(if not install)
```sh
    sudo apt install software-properties-common
``` 

* install java
```sh
    sudo add-apt-repository ppa:webupd8team/java
``` 
[refer oracle install guides](http://tipsonubuntu.com/2016/07/31/install-oracle-java-8-9-ubuntu-16-04-linux-mint-18/)

## install maven
* create dir for maven
```sh
    cd ~
    cd /usr
    mkdir maven
    cd maven
``` 

* download maven(maven-3.6.2)
```sh
    wget http://apache.osuosl.org/maven/maven-3/3.6.2/binaries/apache-maven-3.6.2-bin.zip
    unzip apache-maven-3.6.2-bin.zip
```

* set maven home
```sh
    vi ~/.bashrc
``` 
    type [i] to insert 
```txt
    export PATH="$PATH:/usr/maven/apache-maven-3.6.2/bin"
``` 
    type [Exc] to break out insert mod
    type [:][x] and [enter] to save and quit
[refer install maven](https://maven.apache.org/install.html)

* reboot
```sh
    reboot now
``` 