# Angular Testing Service

To check that your services are working fine, you can write unit tests.

## Test Overview

```
--------------------
# hello.service.ts
--------------------
@Injectable({
  providedIn: 'root',
})
export class HelloService {
  public getHelloWorld() {
    return 'Hello world Aissam !';
  }
}
```

```
--------------------
# hello.service.ts
--------------------
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // (inject the service with dependency injection)
  constructor(public helloService: HelloService) {}
}
```

```
----------------------------------------------------------------------------------
# hello.service.html (curly braces string interpolation to render string in HTML)
----------------------------------------------------------------------------------
{{ helloService.getHelloWorld() }}
```
