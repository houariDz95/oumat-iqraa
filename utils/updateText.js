import { EditorState, ContentState, convertFromRaw, Editor, CompositeDecorator } from 'draft-js';



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
          strategy: findEntityRanges('LINK'),
          component: LinkSpan,
        },
        {
          strategy: findStyleRanges('LARGE'),
          component: SizeSpan,
        },
        {
          strategy: findStyleRanges('RED'),
          component: ColorSpan,
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

function findEntityRanges(entityType) {
  return (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(
      character => {
        const entityKey = character.getEntity();
        return (
          entityKey !== null && contentState.getEntity(entityKey).getType() === entityType
        );
      },
      (start, end) => {
        callback(start, end);
      }
    );
  };
}


const LinkSpan = props => {
  const { contentState, entityKey } = props;
  const entity = contentState.getEntity(entityKey);
  const { url } = entity.getData();
  const style = {
    color: "#6449ff",
    fontWeight: 'bold',
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={style}>
      {props.children}
    </a>
  );
};


function findStyleRanges(style) {
  return (contentBlock, callback, contentState) => {
    contentBlock.findStyleRanges(
      character => character.hasStyle(style),
      (start, end) => {
        callback(start, end);
      }
    );
  };
}


const SizeSpan = props => {
  const { contentState, entityKey, children } = props;
  const sizeStyle = contentState.getEntity(entityKey).getData().style;
  const style = {
    fontSize: sizeStyle === 'SMALL' ? '12px' : sizeStyle === 'LARGE' ? '20px' : '16px',
  };

  return <span style={style}>{children}</span>;
};

const ColorSpan = props => {
  const { contentState, entityKey, children } = props;
  const colorStyle = contentState.getEntity(entityKey).getData().style;

  const style = {
    color: colorStyle === 'RED' ? '#6449ff' : colorStyle === 'BLUE' ? 'blue' : 'black',
  };

  return <span style={style}>{children}</span>;
};