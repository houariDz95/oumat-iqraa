import { EditorState, ContentState, convertFromRaw, Editor } from 'draft-js';

export const updateTextAndSlice = (text, isContentFromEditor) => {

    const contentState = isContentFromEditor
      ? convertFromRaw(text)
      : ContentState.createFromText(text);
  
    const editorState = EditorState.createWithContent(contentState);
  
    const truncateText = (text, limit) => {
      if (text.length <= limit) {
        return text;
      }
      return text.slice(0, limit) + '...';
    };
  
    const contentBlocks = editorState
      .getCurrentContent()
      .getBlockMap()
      .toArray();
  
    const slicedBlocks = contentBlocks.slice(0, 120);
    const joinedText = slicedBlocks.map(block => block.getText()).join('');
    const truncatedDescription = truncateText(joinedText, 150);
    return (
        <>{truncatedDescription}</>
    )

}

export const updateText = (text, isContentFromEditor) => {

  let editorState;
  if (text) {
   const contentState = isContentFromEditor
    ? convertFromRaw(text)
    : ContentState.createFromText(text);
     editorState = EditorState.createWithContent(contentState);
  }
  return (
    <div className="ebook-container">
      {isContentFromEditor ? (
        <Editor editorState={editorState} readOnly={true} className="text-base leading-relaxed" />
      ) : (
        <p className=" text-base text-justify mb-4" style={{whiteSpace: "break-spaces"}}>{text}</p>
      )}
    </div>
  )

}