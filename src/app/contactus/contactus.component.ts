import { Component, OnInit } from '@angular/core';
import { QuizcontentsService } from '../quizcontents.service'
import{Router} from '@angular/router'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private _service:QuizcontentsService,private router:Router) { }

  ngOnInit(): void {
  }
  onsubmit(form:NgForm)
  {
    alert("Form Submitted!");
    this.router.navigate(['/']);
  }

}


