# Something About Spring Security

- [verison problem](#verison-problem)

## verison problem

* from website howtodoinjava(https://howtodoinjava.com/spring-security/login-form-based-spring-3-security-example/), 
* the spring-security verison of the example is 3.0.5.RELEASE.
* By default, spring auto generates and configures a UsernamePasswordAuthenticationFilter bean. This filter, by default, responds to the URL /j_spring_security_check when processing a login POST from your web-form. For username field it uses ‘j_username‘ and for password field it uses ‘j_password‘.

* On submitting this form, UsernamePasswordAuthenticationFilter will match the username and password as configured in authentication-provider settings in application-security.xml.
* the csrf is disable by default.

```html
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
    <%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
     
    <html>
        <body>
            <h1 id="banner">Login to Security Demo</h1> 
            <form name="f" action="<c:url value='j_spring_security_check'/>"
                        method="POST">
                <table>
                    <tr>
                        <td>Username:</td>
                        <td><input type='text' name='j_username' /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type='password' name='j_password'></td>
                    </tr>
                    <tr>
                        <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colspan='2'><input name="submit" type="submit">&nbsp;<input name="reset" type="reset"></td>
                    </tr>
                </table>
            </form>
        </body>
    </html>
```

* But in verison (>4.3.14), the default form params have changed, including name(=username),password(=password),action(=login).
* the csrf is disable by default.
```html
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
    <%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
     
    <html>
        <body>
            <h1 id="banner">Login to Security Demo</h1> 
            <form name="f" action="<c:url value='login'/>"
                        method="POST">
                <table>
                    <tr>
                        <td>Username:</td>
                        <td><input type='text' name='username' /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type='password' name='password'></td>
                    </tr>
                    <tr>
                        <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colspan='2'><input name="submit" type="submit">&nbsp;<input name="reset" type="reset"></td>
                    </tr>
                </table>
            </form>
        </body>
    </html>
```
