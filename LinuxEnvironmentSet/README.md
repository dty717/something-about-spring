# Set Linux Environment(🙈🙉🙊)


## install java
* create dir for java
```sh
    cd /usr
    mkdir java
    cd java
``` 

* download java(jdk-8u131-linux-x64)
```sh
	wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.rpm"
``` 

* install java
```sh
    rpm -ivh jdk-8u131-linux-x64.rpm
``` 
[refer oracle install guides](https://docs.oracle.com/javase/8/docs/technotes/guides/install/linux_jdk.html)


* set java home
    no need setting java/bin becasue it has been done in rpm install
```sh
    vi ~/.bashrc
``` 
[refer set path](https://stackoverflow.com/questions/14637979/how-to-permanently-set-path-on-linux-unix)
    type [i] to insert 
```txt
    export JAVA_HOME="/usr/java/jdk1.8.0_131"
``` 
    type [Exc] to break out insert mod
    type [:][x] and [enter] to save and quit


## install maven
* create dir for maven
```sh
    cd ~
    cd /usr
    mkdir maven
    cd maven
``` 

* download maven(maven-3.6.0)
```sh
    wget http://apache.osuosl.org/maven/maven-3/3.6.0/binaries/apache-maven-3.6.0-bin.zip
    unzip apache-maven-3.6.0-bin.zip
```

* set maven home
```sh
    vi ~/.bashrc
``` 
    type [i] to insert 
```txt
    export PATH="$PATH:/usr/maven/apache-maven-3.6.0/bin"
``` 
    type [Exc] to break out insert mod
    type [:][x] and [enter] to save and quit
[refer install maven](https://maven.apache.org/install.html)


