# Something About Spring

## Log
------------

## tomcat root

* In server.xml,you can add it as a root.
```xml
	<Context path="" docBase="war_name" debug="0" reloadable="true"></Context>
``` 
   The real reason is that it connect "/" to "/war_name",so when you visit "/url_path",it convert to visiting "/url_path/war_name",as you thought it is root.
   Another way is make you appName ROOT,and in this way ,don't use (Context path) in server.xml,it will conflict.
* So the Good way as I think,when deploying the project first time,Stop tomcat, and remove war file and change the deployed file as ROOT

## Contents
------------

- [file upload](#file-upload)
- [json handle](#json-handle)
- [maven create spring](#maven-create-spring)
- [return text file](#return-text-file)
- [integration](#integration)
- [javac package](#package)

## file upload

* In html, just put enctype="multipart/form-data" into form tag as an attribute 

```html
	<form action="/uploadThing" method="post" enctype="multipart/form-data">
		<input type="file" name="file"/>
		...
	</form>
```

* In applicationContext.xml, add a bean with id=multipartResolver

```xml
	<bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
		<!-- one of the properties available; the maximum file size in bytes -->
		<property name="maxUploadSize" value="100000"/>
	</bean>
```

* For the bean multipartResolver, there need two libraries, commons-fileupload-1.3.3.jar and commons-io-2.6.jar


* In MVC controller,using an annotation shows as follow

```java
	@RequestMapping(value = { "/uploadThing" }, method = RequestMethod.POST,consumes = "multipart/form-data")
	public String uplaodThing(@RequestParam("file")MultipartFile multipartFile,...){
		...
	}
```

* Another choice is js, with using formdata,
 
  reference:

<https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects>
  
e.x
```javascript
    var formData = new FormData();
    formData.append("path",path);
    formData.append("file",file);
    $.ajax({
        url: 'uploadFile',
        type: 'POST',
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            fresh();
        }
    });
```
In this situation, convert the charset in MVC because the default charset for FormData is ISO-8859-1, e.x.
```java
    @RequestMapping(value = { "/uploadFile" },produces = "application/json;charset=utf-8")
    @ResponseBody
    public String uploadThing(@RequestParam(value="path", required = true)String path,@RequestParam(value = "file", required = false) MultipartFile multipartFile) {
        String orgName = multipartFile.getOriginalFilename();
        try {
            path=new String(path.getBytes("ISO-8859-1"),"utf-8");
            orgName=new String(orgName.getBytes("ISO-8859-1"),"utf-8");
        } catch(Exception e) {
            
        }
        ...
```


What confused me is why should use the bean with id=multipartResolver. Perhaps it has some relation bewteen enctype="multipart/form-data" and
multipartResolver Class, as it's mentioned in [16.8 Spring's multipart (fileupload) support](https://docs.spring.io/spring/docs/3.0.0.M3/reference/html/ch16s08.html).
So it may be dispatched when springMVC detected the header with enctype="multipart/form-data", and it goes to the multipartResolver.


## json handle

* In html, I often use jq for json post
```javascript
	$.ajax({
	  dataType: "json",
	  url: url,
	  data: data,
	  success: success
	});
```

* In MVC controller,add produces = "application/json" in the annotation of RequestMapping, and return @ResponseBody with json format text.
```java
	@RequestMapping(value = "/url", produces = "application/json")
	@ResponseBody
	public String tablesql(@RequestParam(value = "param",required = false) String param){
		return "{json:\"format\"}";
	}
```


## maven create spring

* create a maven project,then add pom attributes, then add web.xml, applicationContext.xml, dispatcher-servlet.xml.

  reference:

<https://maven.apache.org/archetypes/maven-archetype-webapp/index.html>

<https://medium.com/nycdev/java-build-a-tomcat-web-app-with-maven-and-spring-fbc823fa9a37>

<https://howtodoinjava.com/maven/tomcat-maven-plugin-example/>

<http://tomcat.apache.org/maven-plugin-trunk/tomcat7-maven-plugin/usage.html>

<https://stackoverflow.com/questions/2237537/which-maven-dependencies-to-include-for-spring-3-0>

<https://crunchify.com/how-to-import-all-spring-mvc-dependencies-to-your-maven-project/>

<http://www.avajava.com/tutorials/lessons/how-do-i-create-a-web-application-project-using-maven.html>


## return text file

* In header, set produces value MediaType.APPLICATION_OCTET_STREAM_VALUE of the RequestMapping.
```java
    @RequestMapping(value = { "url" },produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)

```

## integration

* reference:

<https://github.com/spring-projects/spring-integration/blob/master/src/reference/asciidoc/ip.adoc>

<https://github.com/spring-projects/spring-integration-samples/tree/master/basic/tcp-client-server>

<https://github.com/spring-projects/spring-integration-samples/issues/87>

## package

* folder don't determine the class package when javac compiling
* the class is ordered by folder
In any folder, the package is like "aa.bb.xxx" which is all ok.
when having compiled, the class package must be place in folder aa/bb/xxx

