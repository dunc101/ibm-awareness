from datetime import datetime, timezone


class Database:
    def __init__(self):
        self._todos: dict[int, dict] = {}
        self._next_id = 1

    def list_all(self) -> list[dict]:
        return list(self._todos.values())

    def get(self, todo_id: int) -> dict | None:
        return self._todos.get(todo_id)

    def create(self, title: str) -> dict:
        todo = {
            "id": self._next_id,
            "title": title,
            "completed": False,
            "created_at": datetime.now(timezone.utc),
        }
        self._todos[self._next_id] = todo
        self._next_id += 1
        return todo

    def update(self, todo_id: int, title: str | None, completed: bool | None) -> dict | None:
        todo = self._todos.get(todo_id)
        if todo is None:
            return None
        if title is not None:
            todo["title"] = title
        if completed is not None:
            todo["completed"] = completed
        return todo

    def delete(self, todo_id: int) -> bool:
        return self._todos.pop(todo_id, None) is not None


db = Database()
