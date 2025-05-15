const updateCount = <T>({
  item,
  itemCount,
  prevItems,
  currentItems
}: {
  item: T;
  itemCount: number;
  prevItems: T[];
  currentItems: T[];
}): number => {
  let updateLikes = itemCount;
  if (prevItems?.includes(item) !== currentItems?.includes(item)) {
    updateLikes += prevItems?.includes(item) ? -1 : 1;
  }
  return updateLikes;
};

export { updateCount };
