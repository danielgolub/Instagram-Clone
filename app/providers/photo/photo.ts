import {Injectable,Inject} from 'angular2/core';
import {Http,Headers,URLSearchParams} from 'angular2/http';

@Injectable()
export class PhotoService {

    http:Http;
    base_url: string

    constructor(http:Http)  {
        this.http = http;
        this.base_url = 'photo_url'
    }

    getAll() {
        return this.http.get(this.base_url);
    }

    postPhoto(newPhoto: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        console.info('newImage', newPhoto);

        return this.http.post(this.base_url, JSON.stringify(newPhoto),{headers});
    }

    deletePhoto(deletedPhoto: any) {
        let params = new URLSearchParams();
        params.append('id', '' + deletedPhoto.id );

        return this.http.delete(this.base_url, {search: params});
    }

}