class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def new
    @todo = Todo.new
  end

  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      redirect_to [:todos], notice: 'created'
    else
      render :new, status: :not_found
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:task)
  end
end
