import { Component, HostListener, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '@component/portofolio-web/header/header.component';
import { BannerComponent } from '@component/portofolio-web/banner/banner.component';
import { HeaderMenuComponent } from '@component/portofolio-web/header-menu/header-menu.component';
import { AboutUsComponent } from '@component/portofolio-web/about-us/about-us.component';
import { NewsComponent } from '@component/portofolio-web/news/news.component';
import { AchievementComponent } from '@component/portofolio-web/achievement/achievement.component';
import { TestimonialComponent } from '@component/portofolio-web/testimonial/testimonial.component';
import { FooterComponent } from '@component/portofolio-web/footer/footer.component';

@Component({
  selector: 'app-portofolio-web',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent,
    AboutUsComponent,
    NewsComponent,
    AchievementComponent,
    TestimonialComponent,
    FooterComponent
  ],
  templateUrl: './portofolio-web.component.html',
  styleUrl: './portofolio-web.component.css'
})
export class PortofolioWebComponent implements OnInit{
  @ViewChild('banner', { static: false }) bannerDiv!: ElementRef;

  headerA1: any;
  headerA2: any;

  bannerIsScrolled: boolean = false;
  AboutIsScrolled:  boolean = false;


  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.headerA1 = this.el.nativeElement.querySelector('#bannerId').offsetTop;
    this.headerA2 = this.el.nativeElement.querySelector('#aboutId').offsetTop;

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.bannerIsScrolled = window.scrollY > this.headerA1;
    console.log('this.bannerIsScrolled', this.bannerIsScrolled);
    console.log('this.headerA1', this.headerA1);
    console.log('window.scrollY', window.scrollY);


    this.AboutIsScrolled = window.scrollY > (this.headerA2 - 250);
  }

  goTo(e:any){
    console.log('e', e)
  }
}
