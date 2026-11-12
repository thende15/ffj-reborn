import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiptapEditorDirective } from 'ngx-tiptap';
import { Editor } from '@tiptap/core';
import { Markdown } from '@tiptap/markdown'
import StarterKit from '@tiptap/starter-kit';
import Color from '@tiptap/extension-color'
import { TextStyle } from '@tiptap/extension-text-style'

@Component({
  selector: 'app-create-thread',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, TiptapEditorDirective],
  templateUrl: './create-thread.html',
  styleUrl: './create-thread.css',
})
export class CreateThread implements OnDestroy {
  editor = new Editor({
    extensions: [StarterKit, Markdown, Color, TextStyle], 
//     content: ``,
    contentType: 'markdown',
    editorProps:{
      attributes: {
        class: 'editor ui-helper-clearfix size'
      }
    }
  })
  value = '<p>Hello world!</p>' //This can be HTML or JSON, and can potentially change thsi to BBCode; for now pass in emptry string
  subjectControl = new FormControl('');

  //TODO: build your own buttons/toolbar
  toolbarOption(option: string, event: Event){
    let input = event.target as HTMLInputElement
    switch (option) {
      case 'color':
        this.editor.chain().focus().setColor(input.value).run()
        break
      case 'bold':
        this.editor.chain().focus().toggleBold().run()
        break;
      case 'italics':
        this.editor.chain().focus().toggleItalic().run()
        break
      case 'underline':
        this.editor.chain().focus().toggleUnderline().run()
        break
      case 'strikethrough':
        this.editor.chain().focus().toggleStrike().run()
        break
      case 'superscript':
        // this.editor.chain().focus().toggleS().run()
        break
      case 'subscript':
        // this.editor.chain().focus().toggleSu().run()
        break
      default:
        break;
    }
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
