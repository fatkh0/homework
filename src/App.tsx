import React from "react";

import Todo from './Todo';

// rework this into regular api call, feel free to use any open api
const todos = (): Promise<{id: string; title: string;}[]> => new Promise((res) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        title: "Go shopping",
      },
      {
        id: "2",
        title: "Job interview",
      },
      {
        id: "3",
        title: "Prepare homework",
      },
    ]);
  }, 100);
});

function App() {
  const [state, setState] = React.useState<{ id: string; title: string }[]>([]);

  React.useEffect(() => {
    (async () => {
      const awaitedTodos = await todos();

      if (awaitedTodos.length) {
        awaitedTodos.map((awaitedTodosItem: any, i: number) => {
          if (state.some(stateItem => stateItem.id === awaitedTodosItem.id)) return null

          setState([...state, awaitedTodosItem])
        })
      }
      
    })()
  })

  return (
    <div>
      {state.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;