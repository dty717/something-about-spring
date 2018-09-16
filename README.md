# Something About Spring


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


* In MVC controller,using an annotation shows as follow

```java
	@RequestMapping(value = { "/uploadThing" }, method = RequestMethod.POST,consumes = "multipart/form-data")
	public String uplaodThing(@RequestParam("file")MultipartFile multipartFile,...){
		...
	}
```

What confused me is why should use the bean with id=multipartResolver. I think it has some relation bewteen enctype="multipart/form-data" and
multipartResolver Class, as it's mentioned in [16.8 Spring's multipart (fileupload) support](https://docs.spring.io/spring/docs/3.0.0.M3/reference/html/ch16s08.html).
So it may be dispatched when springMVC detected the header with enctype="multipart/form-data", and it goes to the multipartResolver.


