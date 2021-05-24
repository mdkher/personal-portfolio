import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss']
})
export class CustomCursorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px;")
    })
    document.addEventListener('click', () => {
      cursor.classList.add('clickEvent');
      setTimeout(() => {
        cursor.classList.remove("clickEvent");
      }, 250)
    })
  }

}
