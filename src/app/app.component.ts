import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'prismjs';
import 'prismjs/components/prism-java';

declare var Prism: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  linestart = '<span class="line">';
  lineend = '</span>';
  htmlstart = '<pre class="line-numbers"><code class="language-java">\n';
  htmlend = '\n</pre></code>\n';
  public text: string;

  public highlight() {
      const string = $('#text').val();
      this.text = Prism.highlight(string, Prism.languages.java, 'java');
      const lines: string[] = this.text.match(/^.*([\n\r]+|$)/gm);
      const lones: string[] = new Array(lines.length);
      lines.forEach((line, index, arr) => {
          lones[index] = this.linestart + line.replace(/\s+$/, '') + this.lineend;
      });
      console.log(lones);
      this.text = this.htmlstart + lones.join('\n') + this.htmlend;
  }
}
