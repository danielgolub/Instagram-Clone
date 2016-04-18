import {Page, NavController} from 'ionic-angular';
import {PhotoService} from '../../providers/photo/photo';
import {CommentService} from '../../providers/comment/comment';

/*
  Generated class for the PhotosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/photos/photos.html',
  providers: [PhotoService, CommentService]
})
export class PhotosPage {
  photos: any;

  constructor(public nav: NavController, private photo: PhotoService, private comment: CommentService) {
    this.nav = nav;
  }

  ngOnInit() {
    this.photo.getAll()
        .subscribe(
            data =>
                this.photos = data
        );
  }

  onAddPhoto() {
    let newPhoto = {
      user: 'userId',
      description: 'description',
      imageData: 'imageData',
    }

    this.photo.postPhoto(newPhoto)
        .subscribe(
            res => {
              console.log('success', res);
            },
            err => {
              console.log('error', err);
            });
  }
}
