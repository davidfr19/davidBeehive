import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Bee } from './models/bee';
import { Post } from './models/post';
import { Company } from './models/company';
import { Address } from './models/address';
import { Geo } from './models/geo';
import { Album } from './models/album';
import { Photo } from './models/photo';
import { Todo } from './models/todo';
import { Comment } from './models/comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private bees: Bee[] = [];
  
  // The bee I am modifiying
  myCurrentBee:Bee = null;
  
  //Me as bee
  iAmBee:Bee;

  // This array controls which component is showing
  showArray:boolean[] = [true, true, true];

  constructor(private http: Http) {
    this.loadFromJson();
  }

  currentBee(e){
    this.myCurrentBee= e;
    console.log(this.myCurrentBee);
  }





  loadData(usersUrl: string, postsUrl: string, albumsUrl: string, photosUrl: string, todosUrl: string, commentsUrl: string) {
    this.http.get(usersUrl).map(res => res.json()).subscribe((data) => {

      for (var user of data) {
        let company = new Company(user.company.name, user.company.catchPhrase, user.company.bs);
        let address = new Address(user.address.street, user.address.suite, user.address.city, user.address.zipcode, new Geo
          (user.address.geo.lat, user.address.geo.lng));
        let bee = new Bee(user.id, user.name, user.username, user.email, user.phone, user.website, address
          , company, user.avatarUrl);
        this.bees.push(bee);
      }

      this.http.get(postsUrl).map(res => res.json()).subscribe((data) => {
        for (var item of data) {
          let post = new Post(item.id, item.userId, item.title, item.body);
          for (var bee of this.bees) {
            if (post.getUserid() === bee.getId()) {
              bee.addPost(post);
            }
          }
        }
      });

      this.http.get(albumsUrl).map(res => res.json()).subscribe((data) => {
        for (var item of data) {
          let album = new Album(item.id, item.userId, item.title);
          for (var bee of this.bees) {
            if (album.getUserid() === bee.getId()) {
              bee.setAlbum(album);
            }
          }
        }

        this.http.get(photosUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let photo = new Photo(item.id, item.albumId, item.title, item.url, item.thumbnailUrl);
            for (var bee of this.bees) {
              if (photo.getAlbumId() === bee.getAlbum().getId()) {
                bee.addPhotoToAlbum(photo);
              }
            }
          }
        });

        this.http.get(todosUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let todo = new Todo(item.id, item.userId, item.title, item.completed);
            for (var bee of this.bees) {
              if (todo.getUserid() === bee.getId()) {
                bee.addTodo(todo);
              }
            }
          }
        });

        this.http.get(commentsUrl).map(res => res.json()).subscribe((data) => {
          for (var item of data) {
            let comment = new Comment(item.id, item.postId, item.name, item.body, item.email);
            for (var bee of this.bees) {
              for (var post of bee.getPosts()) {
                if (post.getId() === comment.getPostId()) {
                  post.addComment(comment);
                }
              }
            }
          }
        });
      });

      //1. Agregar tu información a este usuario.
      let company = new Company('davidfr19', 'Always awake', 'Happy as fuck');
      let address = new Address('Rea Ave', 'Mountain View Valley', 'Cartago', '1000', new Geo
        ('0.000001', '0.000002'));
      let me = new Bee(11, 'David Fallas', 'dFallas', 'dfallasr@ucentotec.ac.cr', '87074308', 'www.davidfallas.com', address
        , company, 'https://scontent.fsjo3-1.fna.fbcdn.net/v/t31.0-8/16992519_10211707032966876_7002354643197851767_o.jpg?oh=94ff21ecbe9676ccc555f1e87044cf9d&oe=599FAE8F');
      let album = new Album(1000, 11, 'Davids Photos');
      me.setAlbum(album);
      this.iAmBee = me;
      this.bees.push(me);

      console.log(this.bees);
      console.log(this.iAmBee);
    });

  }

  loadFromServer() {
    //Data from: https://jsonplaceholder.typicode.com/
    this.loadData('https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/posts',
      'https://jsonplaceholder.typicode.com/albums',
      'https://jsonplaceholder.typicode.com/photos',
      'https://jsonplaceholder.typicode.com/todos',
      'https://jsonplaceholder.typicode.com/comments');
  }

  loadFromJson() {
    this.loadData('../assets/data/users.json',
      '../assets/data/posts.json',
      '../assets/data/albums.json',
      '../assets/data/photos.json',
      '../assets/data/todos.json',
      '../assets/data/comments.json');
  }
}
