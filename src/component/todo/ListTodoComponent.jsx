const ListTodoComponent = () => {
  const today = new Date();
  const targetDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDay());

  const todos = [
    { id: 1, description: "이력서 수정", done: false, targetDate },
    { id: 2, description: "무지성 지원", done: false, targetDate },
    { id: 3, description: "유데미 인도아재 보기", done: false, targetDate },
  ];

  return (
    <div className="container">
      <h1>Todo - List</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Description</td>
              <td>Is done?</td>
              <td>Target date</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.description}</td>
                <td>{e.done.toString()}</td>
                <td>{e.targetDate.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodoComponent;
