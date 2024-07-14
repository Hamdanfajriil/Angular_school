import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SwiperContainer } from 'swiper/element';
import { FormatDatePipe } from 'src/app/pipes/format-date/format-date.pipe';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    MatButtonModule,
    FormatDatePipe
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsComponent {
  @ViewChild('newsSwiper') swiper!: ElementRef<SwiperContainer>;

  listNews = [
    {
      title: "A student from school succeeded in making a robot",
      tag: "Student Achievement",
      datePost: new Date('2023-12-11'),
      author: "Alif Razan Saputra",
      image: 'assets/images/news-2.jpg'
    },
    {
      title: "A student from school succeeded in making an airplane",
      tag: "Student Achievement",
      datePost: new Date('2023-12-11'),
      author: "Alif Razan Saputra",
      image: 'assets/images/news-1.jpg'
    },
    {
      title: "Lorem Ipsum sit dolor Amet",
      tag: "Student Achievement",
      datePost: new Date('2023-12-11'),
      author: "Alif Razan Saputra",
      image: 'assets/images/news-3.jpg'
    },
  ]

  onNext() {
    this.swiper.nativeElement.swiper.slideNext()
  }
  onPrev() {
    this.swiper.nativeElement.swiper.slidePrev()
  }

}
