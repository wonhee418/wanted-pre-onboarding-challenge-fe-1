export type Todo = {
  title: string;
  contenet: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type TodoProps = {
  id: string;
  title: string;
  createdAt: string;
  editMode: Boolean;
  onEditMode: () => void;
};

export type TodoRequest = {
  id?: string;
  title: string;
  content: string;
};
