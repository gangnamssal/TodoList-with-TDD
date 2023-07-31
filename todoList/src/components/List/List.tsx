function List({ tasks, onClick }: ListProps) {
  return (
    <ul>
      {!tasks.length ? (
        <p>할 일이 없어요!</p>
      ) : (
        tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => onClick(task.id)}>완료</button>
          </li>
        ))
      )}
    </ul>
  );
}

interface Tasks {
  id: number;
  title: string;
}

interface ListProps {
  tasks: Tasks[];
  onClick: (id: number) => void;
}

export default List;
