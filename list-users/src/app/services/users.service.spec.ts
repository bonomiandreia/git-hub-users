import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, HttpClientModule],
      declarations: [],
      providers: [HttpClientModule],

    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be call a method GET', () => {
    const url = `${environment.endpoint}search/users?q=foo%20in:login`;

    service.getListUser().subscribe();

    const request = httpMock.expectOne(url);

    request.flush({
      total: 1,
      items: [
        {
          login: "foo",
          profile: "https://avatars.githubusercontent.com/u/33384?v=4",
          type: "User"
        }
      ]
    })

    expect(request.request.method).toBe('GET');
  });

});
