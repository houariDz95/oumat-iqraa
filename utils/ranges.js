export function findEntityLiksRanges(entityType) {
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

