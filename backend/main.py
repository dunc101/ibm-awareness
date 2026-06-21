from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from database import db
from models import Todo, TodoCreate, TodoUpdate

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/todos", response_model=list[Todo])
def list_todos():
    return db.list_all()


@app.get("/api/todos/{todo_id}", response_model=Todo)
def get_todo(todo_id: int):
    todo = db.get(todo_id)
    if todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo


@app.post("/api/todos", response_model=Todo, status_code=201)
def create_todo(body: TodoCreate):
    return db.create(body.title)


@app.put("/api/todos/{todo_id}", response_model=Todo)
def update_todo(todo_id: int, body: TodoUpdate):
    todo = db.update(todo_id, body.title, body.completed)
    if todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo


@app.delete("/api/todos/{todo_id}", status_code=204)
def delete_todo(todo_id: int):
    if not db.delete(todo_id):
        raise HTTPException(status_code=404, detail="Todo not found")
