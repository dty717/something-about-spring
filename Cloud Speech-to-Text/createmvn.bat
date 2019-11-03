set MAVEN_OPTS="-DsocksProxyHost=192.168.2.100 -DsocksProxyPort=1080"

cd Test
mvn package
java -cp target/Test-1.0-SNAPSHOT.jar org.dty717.App