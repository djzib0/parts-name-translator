import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Numpad } from "../numpad/numpad";

@Component({
  selector: 'app-nozzle',
  imports: [ReactiveFormsModule, Numpad],
  templateUrl: './nozzle.html',
  styleUrl: './nozzle.css',
})
export class Nozzle {

  http = inject(HttpClient)

  nozzleForm: FormGroup = new FormGroup({
    nozzleDiameter: new FormControl(0),
    nozzleProfile: new FormControl(""),
    nozzleType: new FormControl(""),
    nozzleInnerRing: new FormControl(""),
  })
  
  nozzleProfiles: string[] = ["19A", "Optima"]

  nozzleTypesEng: string[] = [
    "fixed",
    "thruster",
  ]

  nozzleTypesPl: string[] = [
    "do zamocowania stałego",
    "do pędnika"
  ]

  nozzleInnerRingsEng: string[] = [
    "complete st. st.",
    "st. st. ring",
    "complete steel",
    "st. st. ring and outlet"
  ]

  nozzleInnerRingsPl: string[] = [
    "wnętrze dyszy ze stali nierdzewnej",
    "pierścień kawitacyjny ze stali nierdzewnej",
    "wnętrze ze stali zwykłej",
    "pierścień i wylot ze stali nierdzewnej"
  ]

  getNozzleResultEng() {
    const nozzleDiameter = this.nozzleForm.get('nozzleDiameter')?.value
    const nozzleProfile = this.nozzleProfiles[(this.nozzleForm.get('nozzleProfile')?.value)]
    const nozzleType = this.nozzleTypesEng[(this.nozzleForm.get('nozzleType')?.value)]
    const nozzleInnerRing = this.nozzleInnerRingsEng[(this.nozzleForm.get('nozzleInnerRing')?.value)]

    return `
    Nozzle ${nozzleDiameter != null ? nozzleDiameter : ""} ${nozzleProfile ? ", " + nozzleProfile : ""}${nozzleType ? ", " + nozzleType : ""}${nozzleInnerRing ? ", " + nozzleInnerRing : ""}`
  }
  
  getNozzleResultPl() {
    const nozzleDiameter = this.nozzleForm.get('nozzleDiameter')?.value
    const nozzleProfile = this.nozzleProfiles[(this.nozzleForm.get('nozzleProfile')?.value)]
    const nozzleType = this.nozzleTypesPl[(this.nozzleForm.get('nozzleType')?.value)]
    const nozzleInnerRing = this.nozzleInnerRingsPl[(this.nozzleForm.get('nozzleInnerRing')?.value)]
  
    return `
    Dysza ${nozzleDiameter != null ? nozzleDiameter : ""} ${nozzleProfile ? ", " + nozzleProfile : ""}${nozzleType ? ", " + nozzleType : ""}${nozzleInnerRing ? ", " + nozzleInnerRing : ""}`
    
  }

  copyToClipboardEng() {
    navigator.clipboard.writeText(this.getNozzleResultEng())
    .then(() => {
      alert('Copied to clipboard')
    })
  }

  copyToClipboardPl() {
    navigator.clipboard.writeText(this.getNozzleResultPl())
    .then(() => {
      alert('Copied to clipboard')
    })
  }

  translatedText = ""

  
  translate() {
    const body = new URLSearchParams();
    body.set('q', this.getNozzleResultEng());
    body.set('source', 'pl');
    body.set('target', 'en');
    body.set('format', 'text');

    this.http.post<any>(
      'https://translate.argosopentech.com/translate',
      body.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).subscribe({
      next: res => this.translatedText = res.translatedText,
      error: err => console.error(err)
    });
  }


  
}