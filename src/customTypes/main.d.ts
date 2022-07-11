type ToDoItem = {
  /** ID of the item, generated by uuidV4 */
  id: string;
  /** Title of the item */
  title: string;
  /** Has this task been completed? */
  completed: boolean;
  /** Date this task was created */
  createdAt: Date;
};

type Dispatcher<S> = Dispatch<SetStateAction<S>>;