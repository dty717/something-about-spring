from http://dynamicremo.blogspot.com/2016/08/setting-up-spark-installation-of-java.html

Setting Up Spark - Installation of Java JDK, Scala, SBT Build Tool, Spark

Java JDK
Install JDK instead of JRE
We gonna be needing Java also for the development, such as Maven Projects.
Scala
Install Scala 2.11.7
Scala Lang Download
Add New Environment Variable
SCALA_HOME c:\scala\bin
Adding to Path Variable
%SCALA_HOME%\bin;
Test with Command Prompt
scala
SBT Build Tool
Install SBT on Windows (MSI Installer)
Add New Environment Variable
SBT_HOME c:\sbt
Hadoop(Optional)
Download and Extract
Hadoop
Add New Environment Variable
HADOOP_HOME hadoop-common-2.2.0-bin-master
SPARK
Download and Extract
1.6.2
Pre-built for Hadoop 2.6
Direct Download
Navigate to the Folder via Command Prompt
sbt package
Navigate to Spark\bin Folder
spark-shell
Testing the Spark and Scala Configuration
val textFile = sc.textFile("C:/Spark/spark-2.0.0-bin-hadoop2.7/README.md") textFile.count()
Running the Spark Cluster on Windows, we have to start the Master and Workers
Installation of Cluster on Windows
Navigate to Spark\bin Folder in Command Prompt
spark-class org.apache.spark.deploy.master.Master
Spark is Up and Running at LOCALHOST [http://localhost:8080/] and Master will give [spark://HOST:POST - URL]
Now we initiate a Worker and Connect it to a Master
Navigate to Spark\bin Folder in Command Prompt
spark-class org.apache.spark.deploy.worker.Worker spark://192.168.0.100:7077
Thus we receive a Worker ID
You can see a WORKER listed under the WORKERS heading, one can explore the jobs that are currently in progress.
Now connecting Application with Cluster
Navigate to Spark\bin Folder in Command Prompt
spark-shell --master spark://192.168.0.100:7077
You can see a App with an ID is listed under the Running Applications heading.
Click on the Application ID to Navigate and explore further description of that particular job.
Right now its Blank as we have not started any Application Task. Let start with a simple application in our command prompt and have those detailed listed here in the Browser as well.
Atlast we Test a Simple App
> val textFile = sc.textFile("C:/Spark/spark-2.0.0-bin-hadoop2.7/README.md")
> textFile.count() // Number of items in this RDD
> textFile.first() // First item in this RDD
> val linesWithSpark = textFile.filter(line => line.contains("Spark"))
> textFile.filter(line => line.contains("Spark")).count()
  // How many lines contain "Spark"?
Back to the Browser and Reload the Localhost Page
Click on the Application ID to Navigate and explore further description of that particular job.
Some of the basics regarding the App are listed, such as: Worker which is assigned for that job, Amount of Cores and Memory consumed by that particular App and the App Status.
Moreover, for Deatiled description click on the Link "Application Detail UI" and we can have Event Timeline and Progress bar representation of the Tasks which were in queue or are in progress.