import { HelloService } from './hello.service';

describe('HelloService', () => {
  let service: HelloService;

  beforeEach(() => {
    service = new HelloService();
  });

  it('#getHelloWorld should return Hello World message', () => {
    expect(service.getHelloWorld()).toBe('Hello world Aissam !');
  });
});
