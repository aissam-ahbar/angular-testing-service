import { HelloService } from './hello.service';

describe('HelloService', () => {
  let service: HelloService;

  beforeEach(() => {
    service = new HelloService();
  });

  it('#getHelloWorld should return HelloWorld message', () => {
    expect(service.getHelloWorld()).toBe('Hello world Aissam !');
  });
});
