import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TextToSpeechService } from './text-to-speech.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public rates!: number[];
	public selectedRate!: number;
	public selectedVoice!: SpeechSynthesisVoice | null;
	public text!: string;
	public voices!: SpeechSynthesisVoice[];
  constructor(private _http: HttpClient, private _service: TextToSpeechService) {
		this.voices = [];
		this.selectedVoice = null;
		this.selectedRate = 1;
	}

	public ngOnInit() : void {
		this._service.registerInstance().then((data: any) => {
			this.text = data[0].capital;
		});
		//this.text = "counter 1 token 1";
		this.speechInitiate();
	}

	public speak() : void {
		let  utterance = new SpeechSynthesisUtterance(this.text);
		utterance.voice = this.selectedVoice;
		utterance.rate = this.selectedRate;
		speechSynthesis.speak( utterance );
	}
	
	speechInitiate() {
		speechSynthesis.addEventListener(
			"voiceschanged", () => {
			this.voices = speechSynthesis.getVoices();
		    console.log(this.voices)
			this.selectedVoice = ( this.voices[ 2 ] || null );
			}
		);
	}

}