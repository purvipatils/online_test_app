import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizcontentsService } from '../quizcontents.service';



@Component({
	selector: 'app-quizhome',
	templateUrl: './quizhome.component.html',
	styleUrls: ['./quizhome.component.css']
})
export class QuizhomeComponent implements OnInit {
	qname = "";

	constructor(private _quizservice: QuizcontentsService, private router: Router) { }
	ngOnInit() {
		console.log("hello");
		this.qname = this._quizservice.path;
		console.log(this.qname)
	}

	homecnf() {
		var ask = window.confirm("You will be redirected to Home Page.");
		if (ask) {
			this.router.navigate(['/']);

		}
	}


}