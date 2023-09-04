export const LinkSpan = props => {
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
  

