class TextEditorModel {
  constructor() {
    this.lines = [];
  }

  addLine(line) {
    this.lines.push(line);
  }

  clear() {
    this.lines = [];
  }
}

class EditorCommand {
  exec(editor) {
    throw Error("EditorCommand.exec is abstract");
  }
}

class ClearLinesCommand {
  exec(editor) {
    let lines = editor.lines;
    editor.clear();
    return new RestoreLinesCommand(lines);
  }
}

class RestoreLinesCommand {
  constructor(lines) {
    this.lines = lines;
  }

  exec(editor) {
    editor.lines = lines;
    return new ClearLinesCommand();
  }
}

class AppendLineCommand {
  constructor(index, text) {
    this.index = index;
    this.text = text;
  }

  exec(editor) {
    let length = (editor.lines[this.index] += this.text);
  }
}
