# Somet About Spring


## Contents
------------

- [file upload](#file-upload)


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


* In MVC controller,using annotation shows as follow

```java
	@RequestMapping(value = { "/uploadThing" }, method = RequestMethod.POST,consumes = "multipart/form-data")
	public String uplaodThing(@RequestParam("file")MultipartFile multipartFile,...){
		...
	}
```

