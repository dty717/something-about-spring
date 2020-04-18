# Set Linux Environment(ubuntu)(🙈🙉🙊)


## install java
* Create dir for java
```sh
    cd /usr
    sudo mkdir java
    cd java
``` 

* Install software-properties-common(if not install)
```sh
    sudo apt install software-properties-common
``` 

* Install java
```sh
    sudo add-apt-repository ppa:webupd8team/java
``` 
[refer oracle install guides](http://tipsonubuntu.com/2016/07/31/install-oracle-java-8-9-ubuntu-16-04-linux-mint-18/)

## install maven
* Create dir for maven
```sh
    cd ~
    cd /usr
    mkdir maven
    cd maven
``` 

* Download maven(maven-3.6.2)
```sh
    wget http://apache.osuosl.org/maven/maven-3/3.6.2/binaries/apache-maven-3.6.2-bin.zip
    unzip apache-maven-3.6.2-bin.zip
```

* Set maven home
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

* Get permission(option for not root)
```sh
    sudo chmod a+x /usr/local/apache-maven/apache-maven-3.6.2/bin/mvn
```
    make mvn has permission.
```sh
    sudo chown -R $USER:$USER /usr/path_need_mvn/
```
    turn the floders and files the mvn uses has permission.

* Reboot
```sh
    reboot now
``` 

## install and use mysql
* Download the repository packages
```sh
    sudo wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
``` 

* Add the Software Repositories
```sh
    sudo rpm –ivh mysql80-community-release-el7-3.noarch.rpm
```

* Install MySQL
```sh
    sudo yum install mysql80-community-release-el7-3.noarch.rpm
    sudo yum install mysql-server
``` 

* Start the MySQL service
```sh
    sudo systemctl start mysqld
```
    To check the status of MySQL use the command:
```sh
    sudo systemctl status mysqld
```
    To disable it, you can use the disable command:
```sh
    sudo systemctl disable mysqld
```
    To stop the MySQL service, use the stop command:
```sh
    sudo systemctl stop mysqld
```

* Find Temporary Password
```sh
    sudo grep 'temporary password' /var/log/mysqld.log
``` 
    get password LMaZd+KZ:7hp
```sh
    2020-04-18T03:18:37.696281Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: LMaZd+KZ:7hp
```

* Configuring and Securing
```sh
    sudo mysql_secure_installation
``` 

* Log into MySQL
```sh
    mysql -u root -p
``` 
    enter password LMaZd+KZ:7hp

* Common usage
show database:
```sh
    SHOW DATABASES;
``` 
create database:
```sh
    create database test;
``` 
use database:
```sh
    use test;
``` 
create table:
```sh
    DROP TABLE IF EXISTS `thing`;
    CREATE TABLE `thing` (
      `Id` int(11) NOT NULL AUTO_INCREMENT,
      `东西` varchar(255) DEFAULT NULL,
      `位置` int(10) DEFAULT NULL,
      `图片路径` varchar(255) DEFAULT NULL,
      `常用` bit(1) DEFAULT NULL,
      `数量` int(10) DEFAULT NULL,
      `特性` varchar(255) DEFAULT NULL,
      PRIMARY KEY (`Id`)
    ) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=gbk;
``` 
insert table:
```sh
    INSERT INTO `thing` VALUES (1,'剪线钳',1,'无',NULL,NULL,''),(2,'焊锡',2,'无',NULL,NULL,''),(3,'摄像头',3,NULL,NULL,NULL,''),(7,' 十通电磁阀',1,'',b'0',13,NULL),(8,'十毫升双孔注射泵',1,'',b'0',3,NULL),(9,'消解池黑壳',1,'',b'0',7,NULL),(10,'消解管',1,'',b'0',50,NULL),(11,'大电风扇',1,'',b'0',20,NULL),(12,'小风扇',1,'',b'0',27,NULL),(13,'黄铜两接口',1,'',b'0',100,NULL),(14,'中型风扇',1,'',b'0',21,NULL),(15,'方形电机板',2,'',b'1',2,NULL),(16,'圆形环阀板',2,'',b'1',6,NULL),(17,'电机滴定导线',2,'',b'0',1,NULL);
``` 
show table:
```sh
    select * from thing ;
``` 

[refer install mysql](https://phoenixnap.com/kb/how-to-install-mysql-on-centos-7)
