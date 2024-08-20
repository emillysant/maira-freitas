import { HttpClient, HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, from, Observable, switchMap } from 'rxjs';
import { SpotifyAutenticationService } from './services/spotify-autentication.service';


export const loggingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<any> => {
  const tokenService = inject(SpotifyAutenticationService);

  return tokenService.getToken().pipe(
    switchMap((token: string | null) => {
      if (!token) {
        console.warn('No token available');
        return next(req);
      }
      console.log('Token:', token);
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(clonedReq);
    }),
    // catchError(error => {
    //   console.error('Error fetching token', error);
    //   // Dependendo do caso, você pode querer redirecionar ou mostrar uma mensagem ao usuário
    //   return next(req); // Continua a requisição sem o token
    // })
  );
};


// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(private authService: SpotifyAutenticationService) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return this.authService.getToken().pipe(
//       switchMap(token => {
//         const clonedRequest = req.clone({
//           setHeaders: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         console.log(token)
//         return next.handle(clonedRequest);
//       }),
//       catchError(error => {
//         console.error('Error in interceptor:', error);
//         throw error;
//       })
//     );
//   }
// }