import { EditorState, ContentState, convertFromRaw, Editor, CompositeDecorator } from 'draft-js';
import { findEntityLiksRanges } from './ranges';
import { LinkSpan } from './spans';


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
  if (text) {
    const contentState = isContentFromEditor
      ? convertFromRaw(text)
      : ContentState.createFromText(text);

    let editorState;

    if (isContentFromEditor) {
      const decorator = new CompositeDecorator([
        // ... Other decorators ...
        {
          strategy: findEntityLiksRanges('LINK'),
          component: LinkSpan,
        },
      ]);

      editorState = EditorState.createWithContent(contentState, decorator);
    }

    return (
      <div className="ebook-container">
        {isContentFromEditor ? (
          <Editor
            editorState={editorState}
            readOnly={true}
          />
        ) : (
          <p className="text-base text-justify mb-4" style={{ whiteSpace: 'break-spaces' }}>
            {text}
          </p>
        )}
      </div>
    );
  }

  return null;
};


