class TodosController < ApplicationController
  def index
    # res.render('index')
    # render :index
    # app/views/todos/index.erb

    @todo = 'buy groceries'
    @heading = 'the best todo list!'

    @my_arr = ['walk the dog', 'clean the carpet']
  end

  def show
    # render 'show'
  end
end
