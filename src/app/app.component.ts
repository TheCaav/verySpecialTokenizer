import { Component } from '@angular/core';
import * as $ from 'jquery';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-java';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  linestart = '<span class="line">';
  lineend = '</span>';
  public text: string;

  public highlight() {
      const string = $('#text').val();
      this.text = Prism.highlight(string, Prism.languages.java, 'java');
      const lines: string[] = this.text.match(/^.*([\n\r]+|$)/gm);
      const lones: string[] = new Array(lines.length);
      lines.forEach((line, index, arr) => {
          lones[index] = this.linestart + line.trim() + this.lineend;
      });
      console.log(lones);
      this.text = lones.join('\n\r');
  }
}
