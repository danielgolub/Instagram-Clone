import {Injectable, Inject} from "angular2/core";
import {Http, Headers, URLSearchParams} from "angular2/http";

@Injectable()
export class CommentService {
    http: Http;
    base_url: string;

    constructor(http: Http) {
        this.http = http;
        this.base_url = 'comment_url'
    }

    postComment(newComment: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        return this.http.post(this.base_url, JSON.stringify(newComment),{headers});
    }

    deleteComment(deletedComment: any) {
        let params = new URLSearchParams();
        params.append('id', '' + deletedComment.id );

        return this.http.delete(this.base_url, {search: params});
    }
}